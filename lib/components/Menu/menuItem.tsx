import * as React from 'react';
import { useContext } from "react"
import classes from '../../helpers/classes';
import MenuContext,{RestDataType}from "./context";

export interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
  name: string
  itemPaddingLeft?: number
  restData?: RestDataType
  disabled?: boolean
}

const MenuItem: React.FC<MenuItemProps> =
    props => {

      const {
        onSelect,
        selectedNames,
        defaultSelectedNames
      } = useContext(MenuContext);

      const {
        className,
        children,
        name,
        itemPaddingLeft,
        restData,
        disabled
      } = props;

      const names:Array<string> = selectedNames || defaultSelectedNames || [];

      const onClick = (e:React.MouseEvent<HTMLElement>):void => {
        if (disabled) return;
        onSelect && onSelect({
          names: [name],
          event: e,
          restData
        })
      };

      return (
          <li className={classes(
              className,
              'menu-item',
              names.includes(name) ? 'active' : "",
              disabled ? "disabled" : ""
          )}
              onClick={onClick}
              style={{paddingLeft: `${itemPaddingLeft || 20}px`}}
          >
            {children}
          </li>
      )
    };

export default MenuItem