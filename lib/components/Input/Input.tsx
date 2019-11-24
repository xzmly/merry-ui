import * as React from 'react';
import classes from '../../helpers/classes';
import Password,{ PasswordProps } from "./Password";
import Textarea,{ TextareaProps} from "./Textarea";
import "./Input.styl";

interface LabelProps {
  className?: string
  children?: React.ReactNode
  htmlFor?: string
  form?: string
  style?: React.CSSProperties
}

type restProps = {
  size?: "default" | "small" | "big"
  labelPosition?: "top" | "left"
  type?: "text" | "password" | "textarea"
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>,"size" | "type">

interface InputComponent<T> extends React.FC<T>{
  Password: React.FC<PasswordProps>
  Textarea: React.FC<TextareaProps>
}

const Input: InputComponent<LabelProps & InputProps & restProps> =
        props => {

  const {
    className,
    htmlFor,
    form,
    style,
    children,
    size,
    labelPosition,
    type,
    ...inputProps
  } = props;

  const labelProps: LabelProps = { htmlFor, form, style };

  const sizeClass: string =
      size === "default" ? "" : `input-${size}`;

  const labelPsClass: string =
      labelPosition === "left" ? "" : `input-label-${labelPosition}`;

  return (
      <label className={classes(className,"input-label",labelPsClass)}
             {...labelProps}>
        {
          children &&
          <span className={classes("","input-label-text")}>
            {children}
          </span>
        }
        <input {...inputProps}
               className={classes('',"input",sizeClass)}
               type={type}/>
      </label>
  )
};

Input.defaultProps = {
  size: "default",
  type: "text",
  labelPosition: "left"
};

Input.Password = Password;
Input.Textarea = Textarea;

export default Input