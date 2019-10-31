import * as React from 'react';
import { useContext } from "react"
import { MenuItemProps } from "./menuItem"
import classes from '../../helpers/classes';
import Icon from "../Icon/icon";
import MenuContext from "./context";

type ChildrenType = React.ReactElement<MenuItemProps> | React.ReactElement<SubMenuProps>

export interface SubMenuProps {
  title?: React.ReactNode
  className?: string
  children?: ChildrenType | Array<ChildrenType>
  name: string | number
}

const SubMenu: React.FC<SubMenuProps> =
    props => {

      const { openNames,onSubMenuChange,defaultOpenNames } = useContext(MenuContext);
      const { className,children,title,name } = props;

      const defaultNamesOrNames:Array<string | number> = defaultOpenNames || openNames || [];

      const visible:boolean = defaultNamesOrNames.includes(name);

      const toggleVisible = ():void => {
        const newKeys = visible ?
            defaultNamesOrNames.filter(v => v !== name) :
            [name,...defaultNamesOrNames];

        onSubMenuChange && onSubMenuChange(newKeys);
      };

      const childrenClass = (postfix:string,...names: Array<string>):string =>
          classes("",`sub-menu-${postfix}`,...names);

      return (
          <li className={classes(className,'sub-menu')}
              onClick={() => defaultOpenNames || toggleVisible()}>
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