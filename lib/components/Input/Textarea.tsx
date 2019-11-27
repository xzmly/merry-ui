import * as React from 'react';
import { useState } from "react"
import { LabelProps } from "./Input";
import classes from '../../helpers/classes';
import { computeHeight } from "./computeHeight";
import "./Textarea.styl";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  autoSize?: { minRows?: number,maxRows?: number } | Boolean
  labelPosition?: "top" | "left"
}

export type onChangeType = (event:React.ChangeEvent<HTMLTextAreaElement>) => void

const Textarea: React.FC<TextareaProps & LabelProps> =
    props => {

      const [textareaStyle,setTextareaStyle] = useState<any>({});

      const {
        children,
        className,
        htmlFor,
        form,
        style,
        labelPosition,
        autoSize,
        ...textareaProps
      } = props;

      const labelProps: LabelProps = { htmlFor, form, style };

      const positionClass:string =
          labelPosition === 'left' ? '' : `textarea-${labelPosition}`;

      const onChange:onChangeType = (event) => {
        const res = computeHeight(event.target,autoSize?.minRows,autoSize?.maxRows);
        setTextareaStyle(res)
      };

      return (
          <label
              {...labelProps}
              className={classes(className,"textarea",positionClass)}
          >
            {children && <span>{children}</span>}
            <textarea {...textareaProps}
                      style={...textareaStyle}
                      onChange={onChange}/>
          </label>
      )
    };


Textarea.defaultProps = {
  labelPosition: "left"
};

export default Textarea