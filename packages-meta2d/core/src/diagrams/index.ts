import { leftArrow, rightArrow, twowayArrow } from './arrow';
import { circle } from './circle';
import { cloud } from './cloud';
import { diamond } from './diamond';
import { file } from './file';
import { form } from './form';
import { gif } from './gif';
import { hexagon } from './hexagon';
import { iframe } from './iframe';
import { line } from './line';
import { message } from './message';
import { mindLine, mindLineAnchors } from './mindLine';
import { mindNode, mindNodeAnchors } from './mindNode';
import { pentagon, pentagonAnchors } from './pentagon';
import { pentagram, pentagramAnchors } from './pentagram';
// import { cube } from './cube';
import { people } from './people';
import { rectangle, square } from './rectangle';
import { svgPath } from './svgPath';
import { triangle, triangleAnchors } from './triangle';
import { video } from './video';

export * from './arrow';
export * from './circle';
export * from './cloud';
export * from './cube';
export * from './diamond';
export * from './file';
export * from './form';
export * from './hexagon';
export * from './iframe';
export * from './line';
export * from './message';
export * from './pentagon';
export * from './pentagram';
export * from './people';
export * from './rectangle';
export * from './svgPath';
export * from './triangle';
export * from './video';

export function commonPens() {
  return {
    rectangle,
    square,
    circle,
    svgPath,
    diamond,
    triangle,
    pentagon,
    pentagram,
    hexagon,
    leftArrow,
    rightArrow,
    twowayArrow,
    message,
    cloud,
    file,
    people,
    line,
    iframe,
    video,
    gif,
    mindNode,
    mindLine,
    mindNode2: rectangle,
    form,
    combine: rectangle,
  };
}

export function commonAnchors() {
  return {
    triangle: triangleAnchors,
    pentagon: pentagonAnchors,
    pentagram: pentagramAnchors,
    mindNode: mindNodeAnchors,
    mindLine: mindLineAnchors,
  };
}
