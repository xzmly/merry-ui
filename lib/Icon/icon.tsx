import * as React from 'react'
import "./icon.styl"

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = () => {
  return (
      <div className='icon'>
        icon!
      </div>
  )
}

export default Icon
