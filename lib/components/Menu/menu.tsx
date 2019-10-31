import * as React from 'react';
import classes from '../../helpers/classes';
import './menu.styl';

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "vertical" | "horizontal"

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