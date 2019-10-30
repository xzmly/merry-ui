import React from "react";
import classes from "../../helpers/classes";

export interface AsideProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string
}

const Aside: React.FC<AsideProps> =
    props => {

      const {className,children,style} = props

      return (
          <aside style={style} className={classes(className, 'layout-aside')}>{children}</aside>
      )
    }

export default Aside
