import * as React from 'react';
import { useState } from "react"
import Input,{TotalProps}from "./Input";
import Icon from "../Icon/Icon"

const Password: React.FC<TotalProps> =
        props => {

  const [visible,setVisible] = useState<Boolean>(false);

  const { children,...restProps} = props;

  return (
      <Input  {...restProps}
              type={!visible ? 'password':'text'}
              suffix={
                <Icon name={visible ? 'eye' : 'close_eye'}
                      onClick={()=>setVisible(!visible)}
                />
              }>
        {children}
      </Input>
  )
};

export default Password