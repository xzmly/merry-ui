import * as React from 'react';
import classes from '../../helpers/classes';
import './menu.styl';
import {HTMLAttributes} from "react";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {

}


const Menu: React.FC<MenuProps> =
        props => {

  const { className,children } = props;
  return (
      <div className={classes(className,'menu')}>
        {children}
      </div>
  )
};

export default Menu