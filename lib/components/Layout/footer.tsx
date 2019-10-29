import React from "react";
import classes from "../../helpers/classes";

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string
}

const Footer: React.FC<FooterProps> =
    props => {

      const {className,children} = props

      return (
          <footer className={classes(className, 'layout-footer')}>
            {children}</footer>
      )
    };

export default Footer
