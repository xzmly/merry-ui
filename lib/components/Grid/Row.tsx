import * as React from 'react';
import {useState} from "react";
import classes from '../../helpers/classes';
import Col,{ ColProps }from "./Col"
import RowContext,{ RowContextProps }from "./Context";
import './Grid.styl';

export type SpacingType = string | number

type ChildrenType = Array<React.ReactElement<ColProps>> | React.ReactElement<ColProps>

enum Justify {
  end = "flex-end",
  start = "flex-start",
  around = "space-around",
  between = "space-between",
  center  = "center"
}
enum Align {
  start = 'flex-start',
  end = 'flex-end',
  center = 'center',
  baseline = 'baseline',
  stretch = 'stretch'
}

interface RowProps extends React.HTMLAttributes<HTMLElement> {
  type?: "block" | "flex"
  align?: "start" | "end" | "center" | "baseline" | "stretch"
  justify?: "start" | "end" | "center" | "around" | "between"
  spacing?: [SpacingType?,SpacingType?,SpacingType?,SpacingType?]
  wrap?: "wrap" | "nowrap" | "wrap-reverse"
  children: ChildrenType
}

interface RowComponent<P> extends React.FC<P> {
  Col: React.FC<ColProps>
}

const Row: RowComponent<RowProps> =
        props => {

  const [totalWidth,setTotalWidth] = useState<number>(0);

  const {
    className,
    align,
    justify,
    spacing,
    style,
    children,
    wrap,
    type,
    ...restProps
  } = props;

  const propsStyle: React.CSSProperties = {
    display: type || "block",
    flexWrap: wrap,
    alignItems: align ? Align[align] : undefined,
    justifyContent: justify ? Justify[justify] : undefined,
  };

  const ContextValue:RowContextProps = {
    totalWidth,
    grids: 24,
    spacing: spacing ? spacing.map((v:SpacingType) => v + 'px').join(' ') : undefined
  };

  return (
      <RowContext.Provider
        value={ContextValue}
      >
        <div ref={(element) => setTotalWidth(element ? element.offsetWidth : 0)}
             className={classes(className,'row')}
             style={{...style,...propsStyle}}
             {...restProps}>
          {children}
        </div>
      </RowContext.Provider>
  )
};

Row.Col = Col;

export default Row