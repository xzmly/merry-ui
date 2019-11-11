import * as React from 'react';
import { useContext }from "react";
import classes from '../../helpers/classes';
import RowContext,{ RowContextProps }from "./Context"
import {SpacingType} from "./Row"
import './Grid.styl';

export interface ColProps extends React.HTMLAttributes<HTMLElement> {
  span?: number
  spacing?: [SpacingType?,SpacingType?,SpacingType?,SpacingType?],
  pull?: number,
  push?: number
}

const Col: React.FC<ColProps> =
    props => {

      const {
        span,
        className,
        children,
        style,
        pull,
        push,
        ...restProps
      } = props;

      const {
        totalWidth,
        grids,
        spacing
      } = useContext<RowContextProps>(RowContext);

      const padding: string | undefined = props.spacing ?
          props.spacing.map((v:SpacingType) => v + 'px').join(' ') : spacing;

      const colStyle: React.CSSProperties = {
        ...style,
        width: totalWidth ? ((totalWidth/grids * (span || 0))/totalWidth)*100 + "%" : undefined,
        padding,
        background: !props.spacing && !spacing ? style && style.background : undefined,
        marginLeft: pull ? pull + 'px' : undefined,
        marginRight: push ? push + 'px' : undefined
      };

      return (
          <div className={classes(className,'col')}
                style={{...colStyle}}
               {...restProps}>
            {
              props.spacing || spacing ?
                  <div
                      className={classes("",'col-spacing-box')}
                      style={{
                        background: style && style.background
                      }}
                  >
                    {children}
                  </div> :
                  children
            }
          </div>
      )
    };

export default Col