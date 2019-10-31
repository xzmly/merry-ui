import * as React from 'react';
import { MenuItemProps } from "./menuItem"
import classes from '../../helpers/classes';

export interface SubMenuProps {
  title?: React.ReactChild
  className?: string
  children?: React.ReactElement<MenuItemProps> | React.ReactElement<SubMenuProps>
}

const SubMenu: React.FC<SubMenuProps> =
    props => {

      const { className,children } = props;

      return (
          <div className={classes(className,'sub-menu')}>
            <div className={classes("",'sub-menu-title')}>

            </div>
            {children}
          </div>
      )
    };

export default SubMenu