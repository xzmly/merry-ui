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

type CloneType = (e: React.ReactElement, props: { paddingLeft: number }, children: React.ReactNode[])
    => React.ReactElement

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
        onSubMenuChange: ({names, ...restParams}: OnChangeType) =>
            openNames ?
                onSubMenuChange && onSubMenuChange({names, ...restParams}) :
                setDefaultValues(names),

        defaultSelectedNames: defaultSelectedValue,
        selectedNames: selectedNames,
        onSelect: ({names, ...restParams}: OnChangeType) =>
            selectedNames ?
                onSelect && onSelect({names, ...restParams}) :
                setDefaultSelectedValue(names)
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

      type childrenNameType = 'SubMenu' | 'MenuItem' | 'ItemGroup'

      const _children = (
          cur?: ChildrenType | Array<ChildrenType>,
          pre: any = [],
          padding: number = 20
      ): ChildrenType | Array<ChildrenType> => {

        if (!(cur instanceof Array)) return React.cloneElement(cur as React.ReactElement, {paddingLeft: padding});

        cur.forEach((item: ChildrenType) => {
          const _padding: number = (item?.type as any)?.name === 'SubMenu' ? padding + 20 : padding;

          // @ts-ignore
          childrenMaps[item?.type?.name as childrenNameType] ?
              pre.push(
                  childrenMaps[(item?.type as any)?.name as childrenNameType](
                      item,
                      {paddingLeft: padding},
                      _children(item.props.children, [], _padding)
                  )) :
              pre.push(item);
        });
        return pre
      };

      return (
          <MenuContext.Provider
              value={contextValues}
          >
            <ul className={classes(className, 'menu', theme && `menu-theme-${theme}`)}>
              {_children(children as ChildrenType | Array<ChildrenType>)}
            </ul>
          </MenuContext.Provider>
      )
    };

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;

export default Menu