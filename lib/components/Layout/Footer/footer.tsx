import React from "react";
import classes from "../../../helpers/classes";

export interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> =
    props => {

      const {className} = props

      return (
          <div className={classes(className, 'footer')}>x</div>
      )
    };

export default Footer
