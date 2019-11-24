import * as React from 'react';
import Input from "./Input";

export interface PasswordProps {
  children?: React.ReactNode
}

const Password: React.FC<PasswordProps> =
        props => {

  const {children} = props;

  return (<Input type={'password'}>{children}</Input>)
};

export default Password