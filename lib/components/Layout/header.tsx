import React from "react";
import classes from "../../helpers/classes";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string
}

const Header: React.FC<HeaderProps> =
    props => {

      const {className,children,style} = props

      return (
          <header style={style} className={classes(className, 'layout-header')}>
            {children}</header>
      )
    };

export default Header
