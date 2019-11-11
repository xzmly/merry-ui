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
        span,
        className,
        children,
        style,
        ...restProps
      } = props;

      const {
        totalWidth,
        grids,
        spacing
      } = useContext<RowContextProps>(RowContext);

      const padding: string | undefined = props.spacing ? props.spacing.map((v:SpacingType) => v + 'px').join(' ') : spacing

      const colStyle: React.CSSProperties = {
        width: totalWidth ? ((totalWidth/grids * (span || 0))/totalWidth)*100 + "%" : undefined,
        padding,
        background: !props.spacing && !spacing ? style && style.background : 'none',
      };

      const colContentStyle: React.CSSProperties = {
        padding: (props.spacing || spacing) ? undefined : padding,
        background: (props.spacing || spacing) && style && style.background,
      };

      return (
          <div className={classes(className,'col')}
                style={{...style,...colStyle}}
               {...restProps}>
            {
              props.spacing || spacing ?
                  <div
                      className={classes("",'col-content')}
                      style={{...colContentStyle}}
                  >
                    {children}
                  </div> : children
            }
          </div>
      )
    };

export default Col