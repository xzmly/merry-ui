import React  from "react";
import classes from "../../helpers/classes";

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string
}

const Content: React.FC<ContentProps> =
    props => {

      const {className,children,style} = props

      return (
          <main style={style} className={classes(className, 'layout-content')}>
            {children}
          </main>
      )
    }

export default Content
