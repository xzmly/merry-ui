import * as React from 'react';
import classes from '../../helpers/classes';
import MenuItem,{ MenuItemProps }from "./menuItem"
import SubMenu,{ SubMenuProps }from "./subMenu";
import './menu.styl';

export type ChildrenType = React.ReactElement<MenuItemProps> | React.ReactElement<SubMenuProps>

interface MenuProps {
  mode?: "vertical" | "horizontal"
  onSubMenuChange?: () => void
  onClick?: () => void
  openKeys?: Array<Object>
  className?: string
  children?: ChildrenType | Array<ChildrenType>
}

interface MenuComponent<P> extends React.FC<P>{
  MenuItem: React.FC<MenuItemProps>
  SubMenu: React.FC<SubMenuProps>
}

const Menu: MenuComponent<MenuProps> =
        props => {

  const { className,children } = props;
  return (
      <div className={classes(className,'menu')}>
        {children}
      </div>
  )
};

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu