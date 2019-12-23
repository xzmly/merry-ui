import * as React from 'react';
import {useRef} from 'react'
import classes from '../../helpers/classes';
import {LabelProps} from "../Input/Input"
import Icon from "../Icon/Icon"
import "./InputNumber.styl"

type restProps = {
  size?: "default" | "small" | "big"
  labelPosition?: "top" | "left"
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">

const InputNumber: React.FC<LabelProps & InputProps & restProps> =
    props => {

      const inputEl = useRef<HTMLInputElement>(null);

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
          size === "default" ? "" : `inputNumber-${size}`;

      const labelPsClass: string =
          labelPosition === "left" ? "" : `inputNumber-label-${labelPosition}`;

      const restClass = (name: string): string =>
          classes('', `inputNumber-${name}`);

      //TODO:按钮增加 1 和 减 1 都必须使用 value 去改变
      const renderInput = (): React.ReactElement =>
          <input  {...inputProps}
                  ref={inputEl}
                  type="number"
                  className={classes("", 'inputNumber')}
          />;

      const onAdd = (e: React.MouseEvent<HTMLSpanElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        console.log(12312313);
      };

      const onMinus = (e: React.MouseEvent<HTMLSpanElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        console.log(12312313);
      };

      return (
          <label
              className={classes(className, 'inputNumber-label', labelPsClass, sizeClass)}
              htmlFor={htmlFor}
              form={form}
              style={style}
          >
            {children &&
            <span className={restClass("label-text")}>
              {children}
            </span>}
            <div className={restClass("wrap")}>
              <div className={restClass("action-wrap")}>
                <span onClick={onAdd}>
                  <Icon name={'arrow_up'}/>
                </span>
                <span onClick={onMinus}>
                  <Icon name={'arrow_down'}/>
                </span>
              </div>
              {renderInput()}
            </div>
          </label>
      )
    };

InputNumber.defaultProps = {
  labelPosition: "left",
  size: "default"
};

export default InputNumber
