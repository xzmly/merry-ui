import * as React from 'react';
import { LabelProps } from "./Input";
import classes from '../../helpers/classes';
import "./Textarea.styl";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  autoSize?: { minRows?: number,maxRows?: number }
  labelPosition?: "top" | "left"
}

const Textarea: React.FC<TextareaProps & LabelProps> =
    props => {

      const {
        children,
        className,
        htmlFor,
        form,
        style,
        labelPosition,
        ...textareaProps
      } = props;

      const labelProps: LabelProps = { htmlFor, form, style };

      const positionClass:string =
          labelPosition === 'left' ? '' : `textarea-${labelPosition}`;

      return (
          <label
              {...labelProps}
              className={classes(className,"textarea",positionClass)}
          >
            {children && <span>{children}</span>}
            <textarea {...textareaProps}/>
          </label>
      )
    };


Textarea.defaultProps = {
  labelPosition: "left"
};

export default Textarea