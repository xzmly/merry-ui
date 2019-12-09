import * as React from 'react';
import classes from '../../helpers/classes';
import {LabelProps} from "../Input/Input"
import "./InputNumber.styl"

type restProps = {
  size?: "default" | "small" | "big"
  labelPosition?: "top" | "left"
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">

const InputNumber: React.FC<LabelProps & InputProps & restProps> =
    props => {

    const {
      className,
      htmlFor,
      form,
      style,
      size,
      labelPosition,
      children,
      ...inputProps
    } = props;

    const sizeClass: string =
        size === "default" ? "" : `input-${size}`;

    const labelPsClass: string =
        labelPosition === "left" ? "" : `inputNumber-label-${labelPosition}`;

    const restClass = (name: string): string =>
        classes('', `inputNumber-${name}`);

    const renderInput = (): React.ReactElement =>
        <input  {...inputProps}
                type="number"
                className={classes("", 'inputNumber', sizeClass)}
        />;

    return (
        <label
            className={classes(className, 'inputNumber-label', labelPsClass)}
            htmlFor={htmlFor}
            form={form}
            style={style}
        >
          {children &&
            <span className={restClass("label-text")}>
              {children}
            </span>}
          {renderInput()}
        </label>
    )
  };

export default InputNumber
