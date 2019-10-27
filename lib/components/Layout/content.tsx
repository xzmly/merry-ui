import React from "react";
import classes from "../../helpers/classes";

export interface ContentProps {
  className?: string
}

const Content: React.FC<ContentProps> =
    props => {

      const {className} = props

      return (
          <div className={classes(className, 'content')}>x</div>
      )
    }

export default Content
