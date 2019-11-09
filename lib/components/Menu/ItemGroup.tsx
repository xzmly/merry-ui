import * as React from 'react';
import classes from '../../helpers/classes';
import {MenuItemProps} from "./Item";
import {SubMenuProps} from "./subMenu";

type ChildrenType = React.ReactElement<MenuItemProps> | React.ReactElement<SubMenuProps>

export interface ItemGroupProps {
  children?: ChildrenType | Array<ChildrenType>
  className?: string
  title: React.ReactNode
}

const ItemGroup: React.FC<ItemGroupProps> =
        props => {

  const { children,className,title } = props;

  return (
      <li className={classes(className,'menu-item-group')}>
        <div className={classes(undefined,'menu-item-group-title')}
        >
          {title}
        </div>
        <ul>
          {children}
        </ul>
      </li>
  )
};

export default ItemGroup