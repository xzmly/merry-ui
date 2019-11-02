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
  onClick?: (name: string) => void
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
    defaultOpenNames,
    onClick
  } = props;

  const [defaultValues,setDefaultValues] = useState<Array<string> | undefined>(defaultOpenNames);

  const contextValues: MenuContextProps  = defaultOpenNames ? {
    defaultOpenNames: defaultValues,
    onSubMenuChange: (names: Array<string>) => setDefaultValues(names),
    onClick: (name: string) => onClick && onClick(name)
  } : {
    openNames: openNames,
    onSubMenuChange: (names: Array<string>) => onSubMenuChange && onSubMenuChange(names),
    onClick: (name: string) => onClick && onClick(name)
  };

  return (
      <MenuContext.Provider
          value={contextValues}
      >
        <ul className={classes(className,'menu')}>
          {children}
        </ul>
      </MenuContext.Provider>
  )
};

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu