import * as React from 'react';
import classes from '../../helpers/classes';
import MenuItem,{ MenuItemProps }from "./menuItem"
import SubMenu,{ SubMenuProps }from "./subMenu";
import MenuContext,{ContextType}from "./context";
import './menu.styl';
import {useState} from "react";

export type ChildrenType = React.ReactElement<MenuItemProps> | React.ReactElement<SubMenuProps>

export interface MenuContextProps {
  openNames?: Array<string>
  onSubMenuChange?: (keys: Array<string>,restData?: RestDataType) => void
  defaultOpenNames?: Array<string>
  onSelect?: (name: string,restData?: RestDataType) => void
}

interface MenuProps {
  mode?: "vertical" | "horizontal"
  className?: string
  children?: ChildrenType | Array<ChildrenType>
  style?: React.CSSProperties
}

interface MenuComponent<P> extends React.FC<P>{
  MenuItem: React.FC<MenuItemProps>
  SubMenu: React.FC<SubMenuProps>
}

export type RestDataType = {
  item: object
}

const Menu: MenuComponent<MenuProps & MenuContextProps> =
        props => {

  const {
    className,
    children,
    onSubMenuChange,
    openNames,
    defaultOpenNames,
    onSelect
  } = props;

  const [defaultValues,setDefaultValues] = useState<Array<string> | undefined>(defaultOpenNames);
  const [selectedName,setSelectedName] = useState<string | undefined>("");

  const contextValues: MenuContextProps & ContextType = {
    defaultOpenNames: defaultValues,
    openNames: openNames,
    onSubMenuChange: defaultOpenNames ?
        (names: Array<string>) => setDefaultValues(names) :
        (names: Array<string>,restData?: RestDataType) => onSubMenuChange && onSubMenuChange(names,restData),
    onSelect: (name: string,restData?: RestDataType) => {
      setSelectedName(name);
      onSelect && onSelect(name,restData)
    },
    selectedName: selectedName
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