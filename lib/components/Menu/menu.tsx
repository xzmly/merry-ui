import * as React from 'react';
import classes from '../../helpers/classes';
import MenuItem, {MenuItemProps} from "./menuItem"
import SubMenu, {SubMenuProps} from "./subMenu";
import ItemGroup, {ItemGroupProps} from "./itemGroup";
import MenuContext, {MenuContextProps, OnChangeType} from "./context";
import './menu.styl';
import {useState} from "react";

export type ChildrenType =
    React.ReactElement<MenuItemProps> |
    React.ReactElement<SubMenuProps> |
    React.ReactElement<ItemGroupProps>

interface MenuProps {
  mode?: "vertical" | "horizontal"
  className?: string
  children?: ChildrenType | Array<ChildrenType>
  style?: React.CSSProperties
}

interface MenuComponent<P> extends React.FC<P> {
  MenuItem: React.FC<MenuItemProps>
  SubMenu: React.FC<SubMenuProps>
  ItemGroup: React.FC<ItemGroupProps>
}

const Menu: MenuComponent<MenuProps & MenuContextProps> =
    props => {

      const {
        className,
        children,
        onSubMenuChange,
        openNames,
        defaultOpenNames,
        onSelect,
        defaultSelectedNames,
        selectedNames
      } = props;

      const [defaultValues, setDefaultValues] =
          useState<Array<string> | undefined>(defaultOpenNames);

      const [defaultSelectedValue, setDefaultSelectedValue] =
          useState<Array<string> | undefined>(defaultSelectedNames);

      const contextValues: MenuContextProps = {
        defaultOpenNames: defaultValues,
        openNames: openNames,
        onSubMenuChange: ({names,...restParams}: OnChangeType) =>
            openNames ?
                onSubMenuChange && onSubMenuChange({names,...restParams}) :
                setDefaultValues(names),

        defaultSelectedNames: defaultSelectedValue,
        selectedNames: selectedNames,
        onSelect: ({names,...restParams}: OnChangeType) =>
            selectedNames ?
              onSelect && onSelect({names,...restParams}) :
              setDefaultSelectedValue(names)
      };

      return (
          <MenuContext.Provider
              value={contextValues}
          >
            <ul className={classes(className, 'menu')}>
              {children}
            </ul>
          </MenuContext.Provider>
      )
    };

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;

export default Menu