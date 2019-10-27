import React from "react";
import classes from "../../helpers/classes";

export interface AsideProps {
  className?: string
}

const Aside: React.FC<AsideProps> =
    props => {

      const {className} = props

      return (
          <div className={classes(className, 'aside')}>x</div>
      )
    }

export default Aside
