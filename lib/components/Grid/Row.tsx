import * as React from 'react';
import classes from '../../helpers/classes';
import Col,{ ColProps }from "./Col"
import './Grid.styl';

type SpacingType = string | number

interface RowProps extends React.HTMLAttributes<HTMLElement> {
  align?: "center" | "top" | "bottom"
  justify?: "start" | "end" | "center" | "space-around" | "space-between"
  spacing?: [SpacingType | SpacingType] |
      { top: SpacingType, right: SpacingType, bottom: SpacingType, left: SpacingType }
  children: Array<React.ReactElement<ColProps>> | React.ReactElement<ColProps>
}

interface RowComponent<P> extends React.FC<P> {
  Col: React.FC<ColProps>
}

const Row: RowComponent<RowProps> =
        props => {

  const {
    className,
    align,
    justify,
    spacing,
    style,
    children,
    ...restProps
  } = props;

  const propsStyle: React.CSSProperties = {
    display: "flex",
    alignItems: align,
    justifyContent: justify,
    margin: spacing ?
        spacing instanceof Array ?
        spacing.map((v:SpacingType) => v + 'px').join(' ') :
        Object.values(spacing as object).map((x:SpacingType) => x + 'px').join(' ') :
        undefined
  };

  return (
      <div className={classes(className,'row')}
           style={{...style,...propsStyle}} {...restProps}>
        {children}
      </div>
  )
};

Row.Col = Col;

export default Row