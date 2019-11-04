import * as React from 'react';
import { useContext } from "react"
import classes from '../../helpers/classes';
import Icon from "../Icon/icon";
import {ChildrenType} from "./menu"
import MenuContext,{RestDataType}from "./context";

export interface SubMenuProps {
  title?: React.ReactNode
  className?: string
  children?: ChildrenType | Array<ChildrenType>
  name: string
  subMenuIndex?: number
  style?: React.CSSProperties
  restData?: RestDataType
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
        subMenuIndex,
        restData
      } = props;

      const defaultNamesOrNames:Array<string> = openNames || defaultOpenNames || [];

      const visible:boolean = defaultNamesOrNames.includes(name);

      const toggleVisible = (e:React.MouseEvent<HTMLElement>):void => {
        const newKeys = visible ?
            defaultNamesOrNames.filter(v => v !== name) :
            [name,...defaultNamesOrNames];

        onSubMenuChange && onSubMenuChange({
          names: newKeys,
          event: e,
          restData
        });
      };

      const childrenClass = (postfix:string,...names: Array<string>):string =>
          classes("",`sub-menu-${postfix}`,...names);

      const _children: any =
          (
              curArray: any,
              preArray: any = []
          ) => {
            curArray && curArray.forEach((item: any) =>
              item instanceof Array ?
                  _children(item,preArray) :
                  item.type.name === 'SubMenu' ?
                      preArray.push(React.cloneElement(item, { subMenuIndex: (subMenuIndex || 1) + 1 })) :
                  item.type.name === 'MenuItem' ?
                      preArray.push(React.cloneElement(item, { itemIndex: subMenuIndex || 1 })) :
                  preArray.push(item)
            );
            return preArray
      };

      return (
          <li className={classes(className,'sub-menu',visible ? 'active':'')}>
            <div className={childrenClass('title')}
                 onClick={toggleVisible}
                 style={{paddingLeft: `${(subMenuIndex || 1)*20}px`}}
            >
              {title}
              <Icon name={'arrow'}
                    className={childrenClass('arrow')}/>
            </div>
            {visible &&
            <ul className={childrenClass('content')}>
              {_children(children)}
            </ul>}
          </li>
      )
    };

export default SubMenu