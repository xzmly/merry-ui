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
  children: ChildrenType | Array<ChildrenType>
  style?: React.CSSProperties
  theme?: 'default' | 'dark' | 'blue'
}

interface MenuComponent<P> extends React.FC<P> {
  MenuItem: React.FC<MenuItemProps>
  SubMenu: React.FC<SubMenuProps>
  ItemGroup: React.FC<ItemGroupProps>
}

type CloneType = (e: React.ReactElement, props: { paddingLeft: number }, children: React.ReactNode[])
    => React.ReactElement

type childrenNameType = 'SubMenu' | 'MenuItem' | 'ItemGroup'

const Menu: MenuComponent<MenuProps & MenuContextProps> =
    props => {

      const {
        className,
        children,
        onSubMenuChange,
        openKeys,
        defaultOpenKeys,
        onSelect,
        defaultSelectedKeys,
        selectedKeys,
        theme,
        ...restProps
      } = props;

      const [defaultValues, setDefaultValues] =
          useState<Array<string> | undefined>(defaultOpenKeys);

      const [defaultSelectedValue, setDefaultSelectedValue] =
          useState<Array<string> | undefined>(defaultSelectedKeys);

      const contextValues: MenuContextProps = {
        defaultOpenKeys: defaultValues,
        openKeys: openKeys,
        onSubMenuChange: ({keys, ...restParams}: OnChangeType) =>
            openKeys ?
                onSubMenuChange && onSubMenuChange({keys, ...restParams}) :
                setDefaultValues(keys),

        defaultSelectedKeys: defaultSelectedValue,
        selectedKeys: selectedKeys,
        onSelect: ({keys, ...restParams}: OnChangeType) =>
            selectedKeys ?
                onSelect && onSelect({keys, ...restParams}) :
                setDefaultSelectedValue(keys)
      };

      const childrenMaps: {
        SubMenu: CloneType
        MenuItem: CloneType
        ItemGroup: CloneType
      } = {
        'SubMenu': (e, props, children) => React.cloneElement(e, props, children),
        'MenuItem': (e, props) => React.cloneElement(e, props),
        'ItemGroup': (e, props, children) => React.cloneElement(e, {}, children)
      };

      const _children = (
          cur: any,
          pre: any = [],
          padding: number = 20
      ): any => {
        if(!cur) return;
        if (!(cur instanceof Array)) {
          return React.cloneElement(cur as React.ReactElement, {paddingLeft: padding});
        }

        cur.forEach((item: ChildrenType) => {
          const typeName: childrenNameType =  (item?.type as any)?.name;
          const _padding: number = typeName === 'SubMenu' ? padding + 22 : padding;

          childrenMaps[typeName] ?
              pre.push(
                  childrenMaps[typeName](
                      item,
                      {paddingLeft: padding},
                      _children(item.props.children, [], _padding)
                  )) :
              pre.push(item);
        });
        return pre
      };

      const _theme:string = !theme || theme === 'default' ? '' : `menu-theme-${theme}`

      return (
          <MenuContext.Provider
              value={contextValues}
          >
            <ul className={classes(className, 'menu', _theme)} {...restProps}>
              {_children(children)}
            </ul>
          </MenuContext.Provider>
      )
    };

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;

export default Menu