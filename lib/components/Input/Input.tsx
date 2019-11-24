import * as React from 'react';
import classes from '../../helpers/classes';
import "./Input.styl";

interface LabelProps {
  className?: string
  children?: React.ReactNode
  htmlFor?: string
  form?: string
  style?: React.CSSProperties
}

type SizeType = {
  size?: "default" | "small" | "big"
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>,"size"> & SizeType


const Input: React.FC<LabelProps & InputProps> =
        props => {

  const {
    className,
    htmlFor,
    form,
    style,
    children,
    size,
    ...inputProps
  } = props;

  const labelProps: LabelProps = { htmlFor, form, style };

  const sizeClass: string = size === "default" ? "" : `input-${size}`;

  return (
      <label className={classes(className,"input-label")}
             {...labelProps}>
        {children}
        <input {...inputProps}
               className={classes('',"input",sizeClass)}
               type="text"/>
      </label>
  )
};

Input.defaultProps = {
  size: "default"
};

export default Input