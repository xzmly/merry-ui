import { AutoSizeType } from "./Textarea"

const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
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
  const tagName:string = node.tagName;

  if(computedStyleCache[tagName]){
    return computedStyleCache[tagName]
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

  if (!computedStyleCache[tagName]) {
    computedStyleCache[tagName] = nodeInfo;
  }

  return nodeInfo;
}


export function computeHeight(
    node: HTMLTextAreaElement,
    {minRows, maxRows}: AutoSizeType
){
  if(!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('style',HIDDEN_TEXTAREA_STYLE);
    document.body.appendChild(hiddenTextarea)
  }

  const { paddingSize, borderSize, boxSizing, sizingStyle } = copyTextareaStyle(node);

  hiddenTextarea.setAttribute('style',`${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`);
  hiddenTextarea.value = node.value || node.placeholder || '';

  let minHeight = Number.MIN_SAFE_INTEGER;
  let maxHeight = Number.MAX_SAFE_INTEGER;
  let height = hiddenTextarea.scrollHeight;
  let overflowY: any;


  if (boxSizing === 'border-box') {
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    height -= paddingSize;
  }

  if(minRows || maxRows){

    hiddenTextarea.value = ' ';
    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

    if (minRows) {
      minHeight = singleRowHeight * (minRows || 1);
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }

    if (maxRows) {
      maxHeight = singleRowHeight * (maxRows || 1);
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }

  }

  return { height, minHeight, maxHeight, overflowY };
}