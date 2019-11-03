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
  name: string
  subMenuIndex?: number
}

const SubMenu: React.FC<SubMenuProps> =
    props => {

      const {
        openNames,
        onSubMenuChange,
        defaultOpenNames,
      } = useContext(MenuContext);

      const {
        className,
        children,
        title,
        name,
        subMenuIndex
      } = props;

      const defaultNamesOrNames:Array<string> = defaultOpenNames || openNames || [];

      const visible:boolean = defaultNamesOrNames.includes(name);

      const toggleVisible = ():void => {
        const newKeys = visible ?
            defaultNamesOrNames.filter(v => v !== name) :
            [name,...defaultNamesOrNames];

        onSubMenuChange && onSubMenuChange(newKeys);
      };

      const childrenClass = (postfix:string,...names: Array<string>):string =>
          classes("",`sub-menu-${postfix}`,...names);

      const childrens: any =
          (
              curArray: any,
              preArray: any = []
          ) => {
            curArray && curArray.forEach((item: any) =>
              item instanceof Array ?
                  childrens(item,preArray) :
                  item.type.name === 'SubMenu' ?
                      preArray.push(React.cloneElement(item, { subMenuIndex: (subMenuIndex || 1) + 1 })) :
                  item.type.name == 'MenuItem' ?
                      preArray.push(React.cloneElement(item, { itemIndex: subMenuIndex || 1 })) :
                      preArray.push(item)
            );
            return preArray
      };

      return (
          <li className={classes(className,'sub-menu',visible ? 'active':'')}>
            <div className={childrenClass('title')}
                 onClick={() => toggleVisible()}
                 style={{paddingLeft: `${(subMenuIndex || 1)*24}px`}}
            >
              {title}
              <Icon name={'arrow'}
                    className={childrenClass('arrow')}/>
            </div>
            {visible &&
            <ul className={childrenClass('content')}>
              {childrens(children)}
            </ul>}
          </li>
      )
    };

export default SubMenu