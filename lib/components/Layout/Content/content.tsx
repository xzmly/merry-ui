import React  from "react";
import classes from "../../../helpers/classes";

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string
}

const Content: React.FC<ContentProps> =
    props => {

      const {className,children} = props

      return (
          <main className={classes(className, 'layout-content')}>
            content
            {children}
          </main>
      )
    }

export default Content
