import * as React from 'react';
import { LabelProps } from "./Input";
import classes from '../../helpers/classes';
import "./Textarea.styl";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  autoSize?: { minRows?: number,maxRows?: number }
}

const Textarea: React.FC<TextareaProps & LabelProps> =
    props => {

      const {
        children,
        className,
        htmlFor,
        form,
        style,
        ...textareaProps
      } = props;

      const labelProps: LabelProps = { htmlFor, form, style };

      return (
          <label
              {...labelProps}
              className={classes(className,"textarea")}
          >
            <span>{children}</span>
            <textarea {...textareaProps}/>
          </label>
      )
    };

export default Textarea