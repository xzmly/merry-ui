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

type InputProps =  React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<LabelProps & InputProps> =
        props => {

  const {
    className,
    htmlFor,
    form,
    style,
    children,
    ...inputProps
  } = props;

  const labelProps: LabelProps = { htmlFor, form, style };

  return (
      <label className={classes(className,"input-label")}
             {...labelProps}>
        {children}
        <input {...inputProps} type="text"/>
      </label>
  )
};

export default Input