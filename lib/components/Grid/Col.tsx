import * as React from 'react';
import classes from '../../helpers/classes';
import './Grid.styl';

export interface ColProps extends React.HTMLAttributes<HTMLElement> {

}

const Col: React.FC<ColProps> =
    props => {

      const { className,children,...restProps } = props;

      return (
          <div className={classes(className,'col')} {...restProps}>
            {children}
          </div>
      )
    };

export default Col