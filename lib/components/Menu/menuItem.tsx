import * as React from 'react';
import { useContext } from "react"
import classes from '../../helpers/classes';
import MenuContext from "./context";
import {RestDataType} from "./menu";

export interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
  name: string
  itemIndex?: number
  restData?: RestDataType
}

const defaultIndex:number = 1;

const MenuItem: React.FC<MenuItemProps> =
    props => {

      const {
        onSelect,
        selectedName
      } = useContext(MenuContext);

      const {
        className,
        children,
        name,
        itemIndex,
        restData
      } = props;

      const paddingLeft:number = ((itemIndex || defaultIndex) - 1)*24 + 48;

      return (
          <li className={classes(className,'menu-item',selectedName === name ? 'active' : "")}
              onClick={()=>onSelect && onSelect(name,restData)}
              style={{paddingLeft: `${paddingLeft}px`}}
          >
            {children}
          </li>
      )
    };

export default MenuItem