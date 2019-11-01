import * as React from 'react';
import classes from '../../helpers/classes';
import MenuItem,{ MenuItemProps }from "./menuItem"
import SubMenu,{ SubMenuProps }from "./subMenu";
import MenuContext from "./context";
import './menu.styl';
import {useState} from "react";

export type ChildrenType = React.ReactElement<MenuItemProps> | React.ReactElement<SubMenuProps>

export interface MenuContextProps {
  openNames?: Array<string>
  onSubMenuChange?: (keys: Array<string>) => void
  defaultOpenNames?: Array<string>
}

interface MenuProps extends MenuContextProps{
  mode?: "vertical" | "horizontal"
  className?: string
  children?: ChildrenType | Array<ChildrenType>
}

interface MenuComponent<P> extends React.FC<P>{
  MenuItem: React.FC<MenuItemProps>
  SubMenu: React.FC<SubMenuProps>
}

const Menu: MenuComponent<MenuProps> =
        props => {

  const {
    className,
    children,
    onSubMenuChange,
    openNames,
    defaultOpenNames
  } = props;

  const [defaultValues,setDefaultValues] = useState<Array<string> | undefined>(defaultOpenNames);

  const contextValues: MenuContextProps  = defaultOpenNames ? {
    defaultOpenNames: defaultValues,
    onSubMenuChange: (names: Array<string>) => setDefaultValues(names)
  } : {
    openNames: openNames,
    onSubMenuChange: (names: Array<string>) => onSubMenuChange && onSubMenuChange(names)
  };

  return (
      <MenuContext.Provider
          value={contextValues}
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