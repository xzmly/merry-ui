import * as React from 'react';
import classes from '../../helpers/classes';
import Password from "./Password";
import Textarea,{TextareaProps}from "./Textarea";
import "./Input.styl";

export interface LabelProps {
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
  prefix?: string | React.ReactNode
  suffix?: React.ReactNode
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>,"size" | "type" | "prefix" | "suffix">

interface InputComponent<T> extends React.FC<T>{
  Password: React.FC<TotalProps>
  Textarea: React.FC<TextareaProps & LabelProps>
}

export type TotalProps = LabelProps & InputProps & restProps;

const Input: InputComponent<TotalProps> =
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
    prefix,
    suffix,
    ...inputProps
  } = props;

  const labelProps: LabelProps = { htmlFor, form, style };

  const sizeClass: string =
      size === "default" ? "" : `input-${size}`;

  const labelPsClass: string =
      labelPosition === "left" ? "" : `input-label-${labelPosition}`;

  const restClass = (name:string):string =>
      classes('',`input-${name}`);

  const renderInput = ():React.ReactElement =>
      <input {...inputProps}
             className={classes('',"input",sizeClass)}
             type={type}/>;

  return (
      <label className={classes(className,"input-label",labelPsClass)}
             {...labelProps}>
        {children &&
          <span className={restClass("label-text")}>
            {children}
          </span>}
        {prefix || suffix ?
          <span className={restClass("affix-wrap")}>
            {prefix && <span className={restClass("affix-prefix")}>{prefix}</span>}
            {renderInput()}
            {suffix && <span className={restClass("affix-suffix")}>{suffix}</span>}
          </span> :
          renderInput()
        }
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