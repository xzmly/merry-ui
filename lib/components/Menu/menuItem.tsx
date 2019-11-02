import * as React from 'react';
import { useContext } from "react"
import classes from '../../helpers/classes';
import MenuContext from "./context";

export interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
  name: string
}

const MenuItem: React.FC<MenuItemProps> =
    props => {

      const { onClick } = useContext(MenuContext)
      const { className,children,name } = props;

      return (
          <li className={classes(className,'menu-item')}
              onClick={()=>onClick && onClick(name)}>
            {children}
          </li>
      )
    };

export default MenuItem