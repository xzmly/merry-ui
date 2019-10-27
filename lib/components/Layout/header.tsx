import React from "react";
import classes from "../../helpers/classes";

export interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> =
    props => {

      const {className} = props

      return (
          <div className={classes(className, 'x')}>x</div>
      )
    };

export default Header
