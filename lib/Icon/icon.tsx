import * as React from 'react'
import "./icon.styl"

interface IconProps extends React.HTMLAttributes<HTMLDivElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =
    ({name}) => {
  return (
      <div className='icon'>
        {name}
      </div>
  )
}

export default Icon
