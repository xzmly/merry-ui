import React from "react";
import classes from "../../helpers/classes";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string
}

const Header: React.FC<HeaderProps> =
    props => {

      const {className,children} = props

      return (
          <header className={classes(className, 'layout-header')}>
            {children}</header>
      )
    };

export default Header
