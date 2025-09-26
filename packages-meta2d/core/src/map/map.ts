import { Canvas } from '../canvas';
import { calcRightBottom, getRect, translateRect } from '../rect';

export class ViewMap {
  box: HTMLElement;
  readonly boxWidth = 320;
  readonly boxHeight = 180;
  readonly ratio = this.boxWidth / this.boxHeight;
  readonly padding = 5;
  img: HTMLImageElement;
  isShow: boolean;
  isDown: boolean;
  view: HTMLElement; // 可视区域外框
  timer: any;
  constructor(public parent: Canvas) {
    this.box = document.createElement('div');
    this.img = new Image();
    this.view = document.createElement('div');

    this.box.appendChild(this.img);
    this.box.appendChild(this.view);
    this.parent.externalElements?.parentElement.appendChild(this.box);

    this.box.className = 'meta2d-map';
    this.box.onmousedown = this.onMouseDown;
    this.box.onmousemove = this.onMouseMove;
    this.box.onmouseup = this.onMouseUp;
    this.box.onwheel = this.onWheel;

    let sheet: any;
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].title === 'le5le/map') {
        sheet = document.styleSheets[i];
      }
    }

    if (!sheet) {
      let style = document.createElement('style');
      style.type = 'text/css';
      style.title = 'le5le.com/map';
      document.head.appendChild(style);

      style = document.createElement('style');
      style.type = 'text/css';
      document.head.appendChild(style);
      sheet = style.sheet;
      sheet.insertRule(
        `.meta2d-map{display:flex;width:${
          this.boxWidth + 2 * this.padding
        }px;height:${this.boxHeight + 2 * this.padding}px;padding:${
          this.padding
        }px;background:#f4f4f4;border:1px solid #ffffff;box-shadow: 0px 0px 14px 0px rgba(0,10,38,0.30);border-radius:8px;position:absolute;z-index:9999;right:0;bottom:0;justify-content:center;align-items:center;cursor:default;user-select:none;overflow: hidden;}`,
      );
      sheet.insertRule(
        '.meta2d-map img{max-width:100%;max-height:100%;pointer-events: none;}',
      );
      sheet.insertRule(
        '.meta2d-map div{pointer-events: none;border:1px solid #1890ff;position:absolute}',
      );
    }
  }

  show() {
    this.box.style.display = 'flex';

    const data = this.parent.store.data;
    if (data.pens.length) {
      this.img.style.display = 'block';
      this.img.src = this.parent.toPng(0, undefined, true);
      this.setView();
    } else {
      this.img.style.display = 'none';
    }
    this.isShow = true;
  }

  hide() {
    this.box.style.display = 'none';
    this.isShow = false;
  }

  setView() {
    const data = this.parent.store.data;
    if (data.pens.length) {
      let rect = getRect(data.pens);
      const vW =
        this.parent.store.data.width || this.parent.store.options.width;
      const vH =
        this.parent.store.data.height || this.parent.store.options.height;
      if (vW && vH) {
        //大屏
        rect = {
          x: this.parent.store.data.origin.x,
          y: this.parent.store.data.origin.y,
          width: vW * this.parent.store.data.scale,
          height: vH * this.parent.store.data.scale,
        };
      } else {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          if (this.parent.store.bkImg) {
            this.img.src = this.parent.toPng(0, undefined, true);
          }
        }, 300);
      }
      // rect += data.x y 得到相对坐标
      translateRect(rect, data.x, data.y);
      const rectRatio = rect.width / rect.height;
      if (rectRatio > this.ratio) {
        // 上下留白，扩大高度
        const height = rect.width / this.ratio;
        rect.y -= (height - rect.height) / 2;
        rect.height = height;
        calcRightBottom(rect);
      } else {
        // 左右留白，扩大宽度
        const width = rect.height * this.ratio;
        rect.x -= (width - rect.width) / 2;
        rect.width = width;
        calcRightBottom(rect);
      }
      const canvasRect = this.parent.canvasRect;
      let left = 0,
        top = 0;
      if (rect.x < 0) {
        left = -rect.x / rect.width;
      } else if (rect.x + rect.width > canvasRect.width) {
        let space = 0;
        if (canvasRect.width > rect.width) {
          // 均已左上角为起点，这种场景需要剪掉一个留白
          space = canvasRect.width - rect.width;
        }
        left = (-rect.x + space) / rect.width;
      }

      if (rect.y < 0) {
        top = -rect.y / rect.height;
      } else if (rect.y + rect.height > canvasRect.height) {
        let space = 0;
        if (canvasRect.height > rect.height) {
          space = canvasRect.height - rect.height;
        }
        top = (-rect.y + space) / rect.height;
      }

      const width =
        canvasRect.width > rect.width ? 1 : canvasRect.width / rect.width;
      const height =
        canvasRect.height > rect.height ? 1 : canvasRect.height / rect.height;
      this.view.style.left = this.padding + left * this.boxWidth + 'px';
      this.view.style.width = width * this.boxWidth + 'px';
      this.view.style.top = this.padding + top * this.boxHeight + 'px';
      this.view.style.height = height * this.boxHeight + 'px';
    }
  }

  private onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    this.isDown = true;
  };

  private onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (this.isDown) {
      try {
        this.parent.gotoView(
          e.offsetX / this.box.clientWidth,
          e.offsetY / this.box.clientHeight,
        );
      } catch (e) {
        console.warn(e.message);
        this.isDown = false;
      }
    }
  };

  private onMouseUp = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      this.parent.gotoView(
        e.offsetX / this.box.clientWidth,
        e.offsetY / this.box.clientHeight,
      );
    } catch (e) {
      console.warn(e.message);
    } finally {
      this.isDown = false;
    }
  };

  private onWheel = (e: WheelEvent) => {
    //放大镜缩放
    let scaleOff = 0.015;
    if (this.parent.store.options.scaleOff) {
      scaleOff = this.parent.store.options.scaleOff;
      if (e.deltaY > 0) {
        scaleOff = -this.parent.store.options.scaleOff;
      }
    } else {
      let isMac = /mac os /i.test(navigator.userAgent);
      if (isMac) {
        if (!e.ctrlKey) {
          scaleOff *= (e as any).wheelDeltaY / 240;
        } else if (e.deltaY > 0) {
          scaleOff *= -1;
        }
      } else {
        let offset = 0.2;
        if (e.deltaY.toString().indexOf('.') !== -1) {
          offset = 0.01;
        }
        if (e.deltaY > 0) {
          scaleOff = -offset;
        } else {
          scaleOff = offset;
        }
      }
    }
    let { offsetX: x, offsetY: y } = e;

    const width =
      this.parent.store.data.width || this.parent.store.options.width;
    const height =
      this.parent.store.data.height || this.parent.store.options.height;
    if (width && height) {
      //大屏
      x =
        (x / this.boxWidth) * width * this.parent.store.data.scale +
        this.parent.store.data.origin.x +
        this.parent.store.data.x;
      y =
        (y / this.boxHeight) * height * this.parent.store.data.scale +
        this.parent.store.data.origin.y +
        this.parent.store.data.y;
    } else {
      const rect = this.parent.parent.getRect();
      x = (x / this.boxWidth) * rect.width + rect.x + this.parent.store.data.x;
      y =
        (y / this.boxHeight) * rect.height + rect.y + this.parent.store.data.y;
    }
    this.parent.scale(this.parent.store.data.scale + scaleOff, { x, y });
  };
}
