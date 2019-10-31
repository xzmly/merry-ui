import * as React from 'react';
import { useContext } from "react"
import { MenuItemProps } from "./menuItem"
import classes from '../../helpers/classes';
import Icon from "../Icon/icon";
import Context from "./context";

type ChildrenType = React.ReactElement<MenuItemProps> | React.ReactElement<SubMenuProps>

export interface SubMenuProps {
  title?: React.ReactNode
  className?: string
  children?: ChildrenType | Array<ChildrenType>
  name: string | number
}

const SubMenu: React.FC<SubMenuProps> =
    props => {

      const context = useContext(Context);
      const { className,children,title,name } = props;

      const visible:boolean = context.openNames.includes(name);

      const toggleVisible = ():void => {
        const newKeys = visible ?
            context.openNames.filter(v => v !== name) :
            [name,...context.openNames];

        context.onSubMenuChange(newKeys);
      };

      const childrenClass = (postfix:string,...names: Array<string>):string =>
          classes("",`sub-menu-${postfix}`,...names);

      return (
          <li className={classes(className,'sub-menu')}
              onClick={() => toggleVisible()}>
            <div className={childrenClass('title')}>
              {title}
              <Icon name={'arrow'}
                    className={childrenClass('arrow',visible ? 'active':'')}/>
            </div>
            {visible &&
            <div className={childrenClass('content')}>
              {children}
            </div>}
          </li>
      )
    };

export default SubMenu