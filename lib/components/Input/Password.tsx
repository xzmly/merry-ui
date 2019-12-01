import * as React from 'react';
import { useState } from "react"
import Input,{TotalProps}from "./Input";
import Icon from "../Icon/Icon"
import classes from "../../helpers/classes";

const Password: React.FC<TotalProps> =
        props => {

  const [visible,setVisible] = useState<Boolean>(false);

  const { children,className,...restProps} = props;

  return (
      <Input {...restProps}
             className={classes(className,'input-password')}
             type={!visible ? 'password':'text'}
             suffix={
                <Icon name={visible ? 'eye' : 'close_eye'}
                      onClick={()=>setVisible(!visible)}
                />
              }
      >
        {children}
      </Input>
  )
};

export default Password