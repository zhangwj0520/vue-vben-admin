<script lang="ts" setup>
import { deepClone } from '@hj-meta2d/core';

defineOptions({ name: '图形' });
const graphicGroups = [
  {
    name: '和嘉图形',
    show: true,
    list: [
      {
        name: '矩形',
        icon: 'l-rectangle',
        id: 2,
        data: {
          width: 200,
          height: 50,
          borderRadius: 0.1,
          name: 'hjRectangle',
        },
      },
    ],
  },
  {
    name: '图表',
    show: true,
    list: [
      {
        name: '饼图',
        icon: 'l-rect',
        id: 1,
        data: {
          width: 400,
          height: 250,
          name: 'echarts',
          draggable: false,
          echarts: {
            option: {
              darkMode: true,

              legend: {
                bottom: '2%',
                left: 'center',
              },
              series: [
                {
                  animationDelay() {
                    return Math.random() * 100;
                  },
                  animationEasing: 'exponentialInOut',
                  animationType: 'scale',
                  avoidLabelOverlap: false,
                  color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
                  data: [
                    { name: '搜索引擎', value: 1048 },
                    { name: '直接访问', value: 735 },
                    { name: '邮件营销', value: 580 },
                    { name: '联盟广告', value: 484 },
                  ],
                  emphasis: {
                    label: {
                      fontSize: '12',
                      fontWeight: 'bold',
                      show: true,
                    },
                  },
                  itemStyle: {
                    // borderColor: '#fff',
                    borderRadius: 10,
                    borderWidth: 2,
                  },
                  label: {
                    position: 'center',
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                  name: '访问来源',
                  radius: ['40%', '65%'],
                  type: 'pie',
                },
              ],
              tooltip: {
                trigger: 'item',
              },
            },
          },
        },
      },
      {
        name: '柱状图',
        icon: 'l-rect',
        id: 1,
        data: {
          width: 400,
          height: 250,
          name: 'echarts',
          draggable: false,
          echarts: {
            option: {
              grid: {
                bottom: 0,
                containLabel: true,
                left: '1%',
                right: '1%',
                top: '2 %',
              },
              series: [
                {
                  barMaxWidth: 80,
                  // color: '#4f69fd',
                  data: [
                    3000, 2000, 3333, 5000, 3200, 4200, 3200, 2100, 3000, 5100,
                    6000, 3200, 4800,
                  ],
                  type: 'bar',
                },
              ],
              tooltip: {
                axisPointer: {
                  lineStyle: {
                    // color: '#4f69fd',
                    width: 1,
                  },
                },
                trigger: 'axis',
              },
              xAxis: {
                data: Array.from({ length: 12 }).map(
                  (_item, index) => `${index + 1}月`,
                ),
                type: 'category',
              },
              yAxis: {
                max: 8000,
                splitNumber: 4,
                type: 'value',
              },
            },
          },
        },
      },
      {
        name: 'iframe',
        icon: 'l-rect',
        id: 1,
        data: {
          animations: [],
          bkType: 0,
          blur: 0.01,
          blurBackground: 'rgba(0, 0, 0, 0)',
          canvasLayer: 1,
          center: {
            x: -469.221_141_276_371_44,
            y: 321.658_001_381_057_55,
          },
          children: [],
          dash: 0,
          ellipsis: false,
          events: [],
          ex: 29.778_858_723_628_9,
          externElement: true,
          ey: 602.345_501_381_058,
          fontSize: 12,
          globalAlpha: 1,
          height: 561.375_000_000_001,
          id: '6ff3b5c',
          iframe:
            'https://view.le5le.com/v/?id=01902942-7d13-7caf-8e50-da2900e89fa9',
          lineAnimateImages: [],
          lineHeight: 1.5,
          lineWidth: 1,
          locked: 0,
          name: 'iframe',
          operationalRect: {
            height: 0.89,
            width: 0.56,
            x: 0.22,
            y: 0.08,
          },
          props: {
            custom: [
              {
                key: 'iframe',
                label: '网页地址',
                type: 'string',
              },
              {
                key: 'zIndex',
                label: 'dom层级(z-index)',
                min: 0,
                placeholder: '默认4',
                type: 'number',
              },
              {
                key: 'operationalRect.x',
                label: '可操作x',
                max: 1,
                min: 0,
                placeholder: '范围0-1',
                type: 'number',
              },
              {
                key: 'operationalRect.y',
                label: '可操作y',
                max: 1,
                min: 0,
                placeholder: '范围0-1',
                type: 'number',
              },
              {
                key: 'operationalRect.width',
                label: '可操作宽度',
                max: 1,
                min: 0,
                placeholder: '范围0-1',
                type: 'number',
              },
              {
                key: 'operationalRect.height',
                label: '可操作高度',
                max: 1,
                min: 0,
                placeholder: '范围0-1',
                type: 'number',
              },
              {
                key: 'blur',
                label: '背景模糊',
                min: 0,
                type: 'number',
              },
              {
                key: 'blurBackground',
                label: '毛玻璃颜色',
                type: 'color',
              },
            ],
            look: false,
          },
          rotate: 0,
          shadow: false,
          tags: [],
          template: true,
          textType: 0,
          thumbImg:
            'https://drive.le5lecdn.com/2024/0618/1/1/冷源群控系统2_cfdb68d5.png',
          whiteSpace: 'break-all',
          width: 998.000_000_000_000_7,
          x: -968.221_141_276_371_8,
          y: 40.970_501_381_057_055,
          zIndex: 0,
          'operationalRect.x': 0.22,
          'operationalRect.y': 0.08,
          'operationalRect.width': 0.56,
          'operationalRect.height': 0.89,
        },
      },
    ],
  },
  {
    name: '基本形状',
    show: true,
    list: [
      {
        name: '正方形',
        icon: 'l-rect',
        id: 1,
        data: {
          width: 100,
          height: 100,
          name: 'square',
        },
      },
      {
        name: '矩形',
        icon: 'l-rectangle',
        id: 2,
        data: {
          width: 200,
          height: 50,
          borderRadius: 0.1,
          name: 'rectangle',
        },
      },
      {
        name: '圆',
        icon: 'l-circle',
        id: 3,
        data: {
          width: 100,
          height: 100,
          name: 'circle',
        },
      },
      {
        name: '三角形',
        icon: 'l-triangle',
        id: 4,
        data: {
          width: 100,
          height: 100,
          name: 'triangle',
        },
      },
      {
        name: '菱形',
        icon: 'l-diamond',
        id: 5,
        data: {
          width: 100,
          height: 100,
          name: 'diamond',
        },
      },
      {
        name: '五边形',
        icon: 'l-pentagon',
        id: 6,
        data: {
          width: 100,
          height: 100,
          name: 'pentagon',
        },
      },
      {
        name: '六边形',
        icon: 'l-hexagon',
        id: 7,
        data: {
          width: 100,
          height: 100,
          name: 'hexagon',
        },
      },
      {
        name: '五角星',
        icon: 'l-pentagram',
        id: 8,
        data: {
          width: 100,
          height: 100,
          name: 'pentagram',
        },
      },
      {
        name: '左箭头',
        icon: 'l-arrow-left',
        id: 9,
        data: {
          width: 120,
          height: 60,
          name: 'leftArrow',
        },
      },
      {
        name: '右箭头',
        icon: 'l-arrow-right',
        id: 10,
        data: {
          width: 120,
          height: 60,
          name: 'rightArrow',
        },
      },
      {
        name: '双向箭头',
        icon: 'l-twoway-arrow',
        id: 11,
        data: {
          width: 150,
          height: 60,
          name: 'twowayArrow',
        },
      },
      {
        name: '云',
        icon: 'l-cloud',
        id: 13,
        data: {
          width: 100,
          height: 100,
          name: 'cloud',
        },
      },
      {
        name: '消息框',
        icon: 'l-msg',
        id: 14,
        data: {
          textTop: -0.1,
          width: 100,
          height: 100,
          name: 'message',
        },
      },
      {
        name: '文件',
        icon: 'l-file',
        id: 15,
        data: {
          width: 80,
          height: 100,
          name: 'file',
        },
      },
      {
        name: '立方体',
        icon: 'l-cube',
        id: 18,
        data: {
          width: 60,
          height: 100,
          name: 'cube',
          z: 0.25,
          props: {
            custom: [
              {
                key: 'z',
                label: 'Z',
                type: 'number',
                min: 0,
                placeholder: '<= 1 即宽度的比例',
              },
              {
                key: 'backgroundFront',
                label: '前背景色',
                type: 'color',
              },
              {
                key: 'backgroundUp',
                label: '顶背景色',
                type: 'color',
              },
              {
                key: 'backgroundRight',
                label: '右背景色',
                type: 'color',
              },
            ],
          },
        },
      },
      {
        name: '人',
        icon: 'l-people',
        id: 19,
        data: {
          width: 70,
          height: 100,
          name: 'people',
        },
      },
    ],
  },
  {
    name: '流程图',
    show: true,
    list: [
      {
        name: '开始/结束',
        icon: 'l-flow-start',
        id: 21,
        data: {
          text: '开始/结束',
          width: 120,
          height: 40,
          borderRadius: 0.5,
          name: 'rectangle',
        },
      },
      {
        name: '流程',
        icon: 'l-rectangle',
        id: 22,
        data: {
          text: '流程',
          width: 120,
          height: 40,
          name: 'rectangle',
        },
      },
      {
        name: '判定',
        icon: 'l-diamond',
        id: 23,
        data: {
          text: '判定',
          width: 120,
          height: 60,
          name: 'diamond',
        },
      },
      {
        name: '数据',
        icon: 'l-flow-data',
        id: 24,
        data: {
          text: '数据',
          width: 120,
          height: 50,
          name: 'flowData',
          offsetX: 0.14,
        },
      },
      {
        name: '准备',
        icon: 'l-flow-ready',
        id: 25,
        data: {
          text: '准备',
          width: 120,
          height: 50,
          name: 'hexagon',
        },
      },
      {
        name: '子流程',
        icon: 'l-flow-subprocess',
        id: 26,
        data: {
          text: '子流程',
          width: 120,
          height: 50,
          name: 'flowSubprocess',
        },
      },
      {
        name: '数据库',
        icon: 'l-db',
        id: 27,
        data: {
          text: '数据库',
          width: 80,
          height: 120,
          name: 'flowDb',
        },
      },
      {
        name: '文档',
        icon: 'l-flow-document',
        id: 28,
        data: {
          text: '文档',
          width: 120,
          height: 100,
          name: 'flowDocument',
        },
      },
      {
        name: '内部存储',
        icon: 'l-internal-storage',
        id: 29,
        data: {
          text: '内部存储',
          width: 120,
          height: 80,
          name: 'flowInternalStorage',
        },
      },
      {
        name: '外部存储',
        icon: 'l-extern-storage',
        id: 30,
        data: {
          text: '外部存储',
          width: 120,
          height: 80,
          name: 'flowExternStorage',
        },
      },
      {
        name: '队列',
        icon: 'l-flow-queue',
        id: 31,
        data: {
          text: '队列',
          width: 100,
          height: 100,
          name: 'flowQueue',
        },
      },
      {
        name: '手动输入',
        icon: 'l-flow-manually',
        id: 32,
        data: {
          text: '手动输入',
          width: 120,
          height: 80,
          name: 'flowManually',
        },
      },
      {
        name: '展示',
        icon: 'l-flow-display',
        id: 33,
        data: {
          text: '展示',
          width: 120,
          height: 80,
          name: 'flowDisplay',
        },
      },
      {
        name: '并行模式',
        icon: 'l-flow-parallel',
        id: 34,
        data: {
          text: '并行模式',
          width: 120,
          height: 50,
          name: 'flowParallel',
        },
      },
      {
        name: '注释',
        icon: 'l-flow-comment',
        id: 35,
        data: {
          text: '注释',
          width: 100,
          height: 100,
          name: 'flowComment',
        },
      },
    ],
  },
  {
    name: '活动图',
    show: true,
    list: [
      {
        name: '开始',
        icon: 'l-inital',
        id: 36,
        data: {
          text: '',
          width: 30,
          height: 30,
          name: 'circle',
          background: '#555',
          lineWidth: 0,
        },
      },
      {
        name: '结束',
        icon: 'l-final',
        id: 37,
        data: {
          width: 30,
          height: 30,
          name: 'activityFinal',
        },
      },
      {
        name: '活动',
        icon: 'l-action',
        id: 38,
        data: {
          text: '活动',
          width: 120,
          height: 50,
          borderRadius: 0.25,
          name: 'rectangle',
        },
      },
      {
        name: '决策/合并',
        icon: 'l-diamond',
        id: 39,
        data: {
          text: '决策/合并',
          width: 120,
          height: 50,
          name: 'diamond',
        },
      },
      {
        name: '垂直泳道',
        icon: 'l-swimlane-v',
        id: 40,
        data: {
          text: '垂直泳道',
          width: 200,
          height: 500,
          name: 'swimlaneV',
          textBaseline: 'top',
          textTop: 20,
          // textHeight: ,
          lineTop: 0.08,
        },
      },
      {
        name: '水平泳道',
        icon: 'l-swimlane-h',
        id: 41,
        data: {
          text: '水平泳道',
          width: 500,
          height: 200,
          name: 'swimlaneH',
          textWidth: 0.01,
          textLeft: 0.04,
          textAlign: 'left',
          lineLeft: 0.08,
        },
      },
      {
        name: '垂直分岔/汇合',
        icon: 'l-fork-v',
        id: 42,
        data: {
          text: '垂直分岔/汇合',
          width: 10,
          height: 150,
          name: 'forkV',
          fillStyle: '#555',
          strokeStyle: 'transparent',
        },
      },
      {
        name: '水平分岔/汇合',
        icon: 'l-fork',
        id: 43,
        data: {
          text: '水平分岔/汇合',
          width: 150,
          height: 10,
          name: 'forkH',
          fillStyle: '#555',
          strokeStyle: 'transparent',
        },
      },
    ],
  },
  {
    name: '时序图和类图',
    show: true,
    list: [
      {
        name: '生命线',
        icon: 'l-lifeline',
        id: 44,
        data: {
          text: '生命线',
          width: 150,
          height: 400,
          textHeight: 50,
          name: 'lifeline',
        },
      },
      {
        name: '激活',
        icon: 'l-focus',
        id: 45,
        data: {
          text: '激活',
          width: 12,
          height: 200,
          name: 'sequenceFocus',
        },
      },
      {
        name: '简单类',
        icon: 'l-simple-class',
        id: 46,
        data: {
          text: 'Topolgoy',
          width: 270,
          height: 200,
          textHeight: 200,
          name: 'simpleClass',
          textAlign: 'center',
          textBaseline: 'top',
          textTop: 10,
          list: [
            {
              text: '- name: string\n+ setName(name: string): void',
            },
          ],
        },
      },
      {
        name: '类',
        icon: 'l-class',
        id: 47,
        data: {
          text: 'Topolgoy',
          width: 270,
          height: 200,
          textHeight: 200,
          name: 'interfaceClass',
          textAlign: 'center',
          textBaseline: 'top',
          textTop: 10,
          list: [
            {
              text: '- name: string',
            },
            {
              text: '+ setName(name: string): void',
            },
          ],
        },
      },
    ],
  },
  {
    name: '故障树',
    show: true,
    list: [
      {
        name: '与门',
        icon: 'l-ANDmen',
        data: {
          name: 'andGate',
          width: 100,
          height: 150,
        },
      },
      {
        name: '基本事件',
        icon: 'l-jibenshijian',
        data: {
          name: 'basicEvent',
          width: 100,
          height: 150,
        },
      },
      {
        name: '未展开事件',
        icon: 'l-weizhankaishijian',
        data: {
          name: 'unexpandedEvent',
          width: 100,
          height: 150,
        },
      },
      {
        name: '优先AND门',
        icon: 'l-youxianANDmen',
        data: {
          name: 'priorityAndGate',
          width: 100,
          height: 150,
        },
      },
      {
        name: '禁止门',
        icon: 'l-jinzhimen',
        data: {
          name: 'forbiddenGate',
          width: 100,
          height: 150,
        },
      },
      {
        name: '事件',
        icon: 'l-shijian',
        data: {
          name: 'event',
          width: 100,
          height: 150,
        },
      },
      {
        name: '开关事件',
        icon: 'l-kaiguanshijian',
        data: {
          name: 'switchEvent',
          width: 100,
          height: 150,
        },
      },
      {
        name: '条件事件',
        icon: 'l-tiaojianshijian',
        data: {
          name: 'conditionalEvent',
          width: 150,
          height: 100,
        },
      },
      {
        name: '转移符号',
        icon: 'l-zhuanyifuhao',
        data: {
          name: 'transferSymbol',
          width: 100,
          height: 150,
        },
      },
      {
        name: '或门',
        icon: 'l-ORmen',
        data: {
          name: 'orGate',
          width: 100,
          height: 150,
        },
      },
      {
        name: '异或门',
        icon: 'l-yihuomen',
        data: {
          name: 'xorGate',
          width: 100,
          height: 150,
        },
      },
      {
        name: '表决门',
        icon: 'l-biaojuemen',
        data: {
          name: 'votingGate',
          width: 100,
          height: 150,
        },
      },
    ],
  },
  {
    name: '脑图',
    show: true,
    list: [
      {
        name: '主题',
        icon: 'l-zhuti',
        data: {
          text: '主题',
          width: 200,
          height: 50,
          name: 'mindNode',
          borderRadius: 0.5,
        },
      },
      {
        name: '子主题',
        icon: 'l-zizhuti',
        data: {
          text: '子主题',
          width: 160,
          height: 40,
          name: 'mindLine',
        },
      },
    ],
  },
];

const dragStart = (e: any, elem: any) => {
  if (!elem) {
    return;
  }
  e.stopPropagation();

  // 拖拽事件
  if (e instanceof DragEvent) {
    // 设置拖拽数据
    e.dataTransfer?.setData('Meta2d', JSON.stringify(elem.data));
    console.log('elem.data', elem.data);
  } else {
    // 支持单击添加图元。平板模式
    meta2d.canvas.addCaches = [elem.data];
  }
};

const addShape = (e: any, elem: any) => {
  if (!elem) {
    return;
  }
  e.stopPropagation();
  meta2d.canvas.onDbclickAddPen(deepClone(elem.data));
};
</script>

<template>
  <div class="graphics">
    <t-collapse :default-expand-all="true">
      <t-collapse-panel
        :header="item.name"
        v-for="item in graphicGroups"
        :key="item.name"
      >
        <template :key="elem.name" v-for="elem in item.list">
          <div
            class="graphic"
            :draggable="true"
            @dragstart="dragStart($event, elem)"
            @click.prevent="dragStart($event, elem)"
            @dblclick="addShape($event, elem)"
          >
            <svg class="l-icon" aria-hidden="true">
              <use :xlink:href="`#${elem.icon}`" />
            </svg>
            <p :title="elem.name">{{ elem.name }}</p>
          </div>
        </template>
      </t-collapse-panel>
    </t-collapse>
  </div>
</template>
<style lang="css" scoped>
.graphics {
  z-index: 2;
  height: calc(100vh - 80px);
  overflow-y: auto;
  border-right: 1px solid var(--color-border);
}

.graphics :deep(.t-collapse) {
  border-top: none;
}

.graphics :deep(.t-collapse) .t-collapse-panel__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 12px;
  padding: 20px 4px;
  background-color: var(--color-background-active);
}

.graphics :deep(.t-collapse) .graphic {
  position: relative;
  padding: 10px 0;
  border: 1px solid transparent;
  border-radius: 2px;
}

.graphics :deep(.t-collapse) .graphic:hover {
  cursor: pointer;
  border-color: var(--color-primary);
}

.graphics :deep(.t-collapse) .graphic p {
  display: -webkit-box;
  height: 12px;
  padding: 0 8px;
  margin-top: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  word-break: break-all;
  -webkit-box-orient: vertical;
}

.graphics :deep(.t-collapse) .graphic svg {
  width: 100%;
  height: 28px;
  margin: auto;
  color: var(--color);
}
</style>
