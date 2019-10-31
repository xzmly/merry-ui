import * as React from 'react';
import { MenuItemProps } from "./menuItem"
import classes from '../../helpers/classes';

type ChildrenType = React.ReactElement<MenuItemProps> | React.ReactElement<SubMenuProps>

export interface SubMenuProps {
  title?: React.ReactNode
  className?: string
  children?: ChildrenType | Array<ChildrenType>
}

const SubMenu: React.FC<SubMenuProps> =
    props => {

      const { className,children,title } = props;

      return (
          <div className={classes(className,'sub-menu')}>
            <div className={classes("",'sub-menu-title')}>
              {title}
            </div>
            {children}
          </div>
      )
    };

export default SubMenu