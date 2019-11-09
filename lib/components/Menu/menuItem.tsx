import * as React from 'react';
import { useContext } from "react"
import classes from '../../helpers/classes';
import MenuContext,{RestDataType}from "./context";

export interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
  _key: string
  restData?: RestDataType
  disabled?: boolean
  paddingLeft?:number
}

const MenuItem: React.FC<MenuItemProps> =
    props => {

      const {
        onSelect,
        selectedKeys,
        defaultSelectedKeys
      } = useContext(MenuContext);

      const {
        className,
        children,
        _key,
        restData,
        disabled,
        paddingLeft
      } = props;

      const names:Array<string> = selectedKeys || defaultSelectedKeys || [];

      const onClick = (e:React.MouseEvent<HTMLElement>):void => {
        if (disabled) return;
        onSelect && onSelect({
          keys: [_key],
          event: e,
          restData
        })
      };

      return (
          <li className={classes(
              className,
              'menu-item',
              names.includes(_key) ? 'active' : "",
              disabled ? "disabled" : ""
          )}
              onClick={onClick}
              style={{paddingLeft: `${paddingLeft}px`}}
          >
            {children}
          </li>
      )
    };

export default MenuItem