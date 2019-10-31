import * as React from 'react';
import classes from '../../helpers/classes';
import MenuItem,{ MenuItemProps }from "./menuItem"
import SubMenu,{ SubMenuProps }from "./subMenu";
import MenuContext,{ MenuContextProps }from "./context";
import './menu.styl';

export type ChildrenType = React.ReactElement<MenuItemProps> | React.ReactElement<SubMenuProps>

interface MenuProps extends MenuContextProps{
  mode?: "vertical" | "horizontal"
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
      <MenuContext.Provider
          value={{
            onSubMenuChange: (keys: Array<string | number>) => onSubMenuChange && onSubMenuChange(keys),
            openNames: openNames || []
          }}
      >
        <div className={classes(className,'menu')}>
          {children}
        </div>
      </MenuContext.Provider>
  )
};

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu