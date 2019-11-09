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
  _key: string
  style?: React.CSSProperties
  restData?: RestDataType
  paddingLeft?: number
}

const SubMenu: React.FC<SubMenuProps> =
    props => {

      const {
        openKeys,
        onSubMenuChange,
        defaultOpenKeys,
      } = useContext(MenuContext);

      const {
        className,
        children,
        title,
        _key,
        restData,
        paddingLeft
      } = props;

      const defaultNamesOrNames:Array<string> = openKeys || defaultOpenKeys || [];

      const visible:boolean = defaultNamesOrNames.includes(_key);

      const toggleVisible = (e:React.MouseEvent<HTMLElement>):void => {
        const newKeys = visible ?
            defaultNamesOrNames.filter(v => v !== _key) :
            [_key,...defaultNamesOrNames];

        onSubMenuChange && onSubMenuChange({
          keys: newKeys,
          event: e,
          restData
        });
      };

      const childrenClass = (postfix:string,...names: Array<string>):string =>
          classes("",`sub-menu-${postfix}`,...names);


      return (
          <li className={classes(className,'sub-menu',visible ? 'active':'')}>
            <div className={childrenClass('title')}
                 onClick={toggleVisible}
                 style={{paddingLeft: `${paddingLeft}px`}}
            >
              {title}
              <Icon name={'arrow'}
                    className={childrenClass('arrow')}/>
            </div>
            {visible &&
            <ul className={childrenClass('content')}>
              {children}
            </ul>}
          </li>
      )
    };

export default SubMenu