import * as React from 'react';
import classes from '../../helpers/classes';
import MenuItem,{ MenuItemProps }from "./menuItem"
import SubMenu,{ SubMenuProps }from "./subMenu";
import Context from "./context";
import './menu.styl';

export type ChildrenType = React.ReactElement<MenuItemProps> | React.ReactElement<SubMenuProps>

interface MenuProps {
  mode?: "vertical" | "horizontal"
  onSubMenuChange?: (keys: Array<string | number>) => void
  openNames?: Array<string | number>

  onClick?: () => void
  className?: string
  children?: ChildrenType | Array<ChildrenType>
}

interface MenuComponent<P> extends React.FC<P>{
  MenuItem: React.FC<MenuItemProps>
  SubMenu: React.FC<SubMenuProps>
}

const Menu: MenuComponent<MenuProps> =
        props => {

  const { className,children,onSubMenuChange,openNames } = props;

  return (
      <Context.Provider
          value={{
            onSubMenuChange: (keys: Array<string | number>) => onSubMenuChange && onSubMenuChange(keys),
            openNames: openNames || []
          }}
      >
        <div className={classes(className,'menu')}>
          {children}
        </div>
      </Context.Provider>
  )
};

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu