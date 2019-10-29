import React, {HTMLAttributes} from "react";
import classes from "../../../helpers/classes";

export interface ContentProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
}

const Content: React.FC<ContentProps> =
    props => {

      const {className,children} = props

      return (
          <div className={classes(className, 'content')}>
            {children}
          </div>
      )
    }

export default Content
