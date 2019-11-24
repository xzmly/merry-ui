import * as React from 'react';
import { useState } from "react"
import Input,{TotalProps} from "./Input";
import Icon from "../Icon/Icon"

export interface PasswordProps {
  children?: React.ReactNode
}

type InputProps = Omit<TotalProps,"children">

const Password: React.FC<PasswordProps & InputProps> =
        props => {

  const [visible,setVisible] = useState<Boolean>(false);


  //TODO: 类型合并问题
  const {children,size,...restProps} = props;

  //TODO: 图标更换
  return (
      <Input  {...restProps}
              size={size}
              type={!visible ? 'password':'text'}
              suffix={
                <Icon name={!visible ? 'eye' : 'close-eye'}
                     onClick={()=>setVisible(!visible)}
                />
              }>
        {children}
      </Input>
  )
};

export default Password