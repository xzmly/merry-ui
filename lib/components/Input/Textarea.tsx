import * as React from 'react';
import Input from "./Input";

export interface TextareaProps {
  children?: React.ReactNode
}

const Textarea: React.FC<TextareaProps> =
    props => {

      const {children} = props;

      return (<Input type={'textarea'}>{children}</Input>)
    };

export default Textarea