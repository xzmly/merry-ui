import * as React from 'react';
import { useContext }from "react";
import classes from '../../helpers/classes';
import RowContext,{ RowContextProps }from "./Context"
import {SpacingType} from "./Row"
import './Grid.styl';

export interface ColProps extends React.HTMLAttributes<HTMLElement> {
  span?: number
  spacing?: [SpacingType?,SpacingType?,SpacingType?,SpacingType?]
}

const Col: React.FC<ColProps> =
    props => {

      const {
        span
      } = props;

      const {
        totalWidth,
        grids,
        spacing
      } = useContext<RowContextProps>(RowContext);

      const propsStyle: React.CSSProperties = {
        width: totalWidth ? ((totalWidth/grids * (span || 0))/totalWidth)*100 + "%" : undefined,
        margin: props.spacing ?
            props.spacing.map((v:SpacingType) => v + 'px').join(' ') : spacing
      };

      const { className,children,style,...restProps } = props;

      return (
          <div className={classes(className,'col')}
                style={{...style,...propsStyle}}
               {...restProps}>
            {children}
          </div>
      )
    };

export default Col