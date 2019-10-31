import * as React from 'react';
import classes from '../../helpers/classes';

export interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
}

const MenuItem: React.FC<MenuItemProps> =
    props => {

      const { className,children } = props;

      return (
          <div className={classes(className,'menu-item')}>
            {children}
          </div>
      )
    };

export default MenuItem