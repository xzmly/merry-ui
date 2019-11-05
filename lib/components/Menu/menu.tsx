import * as React from 'react';
import {useState} from "react";
import classes from '../../helpers/classes';
import MenuItem, {MenuItemProps} from "./menuItem"
import SubMenu, {SubMenuProps} from "./subMenu";
import ItemGroup, {ItemGroupProps} from "./itemGroup";
import MenuContext, {MenuContextProps, OnChangeType} from "./context";
import './menu.styl';

export type ChildrenType =
    React.ReactElement<MenuItemProps> |
    React.ReactElement<SubMenuProps> |
    React.ReactElement<ItemGroupProps>

interface MenuProps {
  className?: string
  children?: ChildrenType | Array<ChildrenType>
  style?: React.CSSProperties
  theme?: 'default' | 'black' | 'blue' | 'green'
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
        selectedNames,
        theme
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

      const _children:any = (
          cur: any,
          pre: any = [],
          padding: any = 20
      ) => {
        if(cur instanceof Array){
          cur.forEach((item: any) => {
            if(item.type.name === 'SubMenu'){
              pre.push(
                  React.cloneElement(item,{paddingLeft: padding},_children(item.props.children,[],padding + 20))
              )
            }else if(item.type.name === 'MenuItem'){
              pre.push(React.cloneElement(item,{paddingLeft: padding}))
            }else if(item.type.name === 'ItemGroup'){
              pre.push(
                  React.cloneElement(item,{},_children(item.props.children,[],padding))
              )
            }else{
              pre.push(item)
            }
          });
          return pre
        }else{
          return React.cloneElement(cur,{paddingLeft:padding})
        }
      };

      return (
          <MenuContext.Provider
              value={contextValues}
          >
            <ul className={classes(className, 'menu',theme && `menu-theme-${theme}`)}>
              {_children(children)}
            </ul>
          </MenuContext.Provider>
      )
    };

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;

export default Menu