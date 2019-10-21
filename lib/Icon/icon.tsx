import * as React from 'react'
import classes from "../helpers/classes"
import "./icon.styl"
import '../helpers/importIcons';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =
    ({className,name,...restProps}) => {
  return (
      <svg className={`${classes(className,'icon')}`}
           {...restProps} >
        <use xlinkHref={`#${name}`}/>
      </svg>
  )
}

export default Icon
