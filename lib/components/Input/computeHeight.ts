const hidden_style = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility: hidden !important,
  overflow: hidden !important,
  position: absolute !important,
  zIndex: -1000 !important,
  top: -99px !important,
  right: -999px !important,
  opacity: 0 !important
`;

const SIZING_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'font-variant',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing',
];

export interface NodeType {
  sizingStyle: string;
  paddingSize: number;
  borderSize: number;
  boxSizing: string;
}

let hiddenTextarea: HTMLTextAreaElement;
const computedStyleCache: { [key: string]: NodeType } = {};

export function copyTextareaStyle(node: HTMLElement){
  const className:string = node.getAttribute('name') as string;

  if(computedStyleCache[className]){
    return computedStyleCache[className]
  }

  const style = window.getComputedStyle(node);

  const boxSizing:string =
      style.getPropertyValue('box-sizing') ||
      style.getPropertyValue('-moz-box-sizing') ||
      style.getPropertyValue('-webkit-box-sizing');

  const paddingSize:number =
      parseFloat(style.getPropertyValue('padding-bottom')) +
      parseFloat(style.getPropertyValue('padding-top'));

  const borderSize:number =
      parseFloat(style.getPropertyValue('border-bottom-width')) +
      parseFloat(style.getPropertyValue('border-top-width'));

  const sizingStyle = SIZING_STYLE.map(name => `${name}:${style.getPropertyValue(name)}`).join(';');

  const nodeInfo: NodeType = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing,
  };

  if (!computedStyleCache[className]) {
    computedStyleCache[className] = nodeInfo;
  }

  return nodeInfo;

}

export function computeHeight(
    node: HTMLTextAreaElement,
    minRows: number | null = null,
    maxRows: number | null = null
){
  if(!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('style',hidden_style);
    document.body.appendChild(hiddenTextarea)
  }

  console.log(minRows,maxRows);

  const { paddingSize, borderSize, boxSizing, sizingStyle } = copyTextareaStyle(node);

  hiddenTextarea.setAttribute('style',`${sizingStyle};${hidden_style}`)
  hiddenTextarea.value = node.value || node.placeholder || '';

  let minHeight = Number.MIN_SAFE_INTEGER;
  let maxHeight = Number.MAX_SAFE_INTEGER;
  let height = hiddenTextarea.scrollHeight;
  let overflowY: any;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height -= paddingSize;
  }

  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = ' ';
    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  }

  return { height, minHeight, maxHeight, overflowY };
}