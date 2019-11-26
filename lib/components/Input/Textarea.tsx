import * as React from 'react';
import { LabelProps } from "./Input";
import classes from '../../helpers/classes';
import "./Textarea.styl";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  autoSize?: { minRows?: number,maxRows?: number }
  labelPosition?: "top" | "left"
}

export type onChangeType = (event:React.ChangeEvent<HTMLTextAreaElement>) => void

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

      const onChange:onChangeType = (event) => {
        const { target } = event;
        console.log(target.clientHeight,target.scrollHeight);

        if(target.scrollHeight > target.clientHeight) {
          //target.rows += 1
          target.setAttribute("style",`height: ${(target.scrollHeight+8).toString()}px`);
        }
      };

      return (
          <label
              {...labelProps}
              className={classes(className,"textarea",positionClass)}
          >
            {children && <span>{children}</span>}
            <textarea {...textareaProps}
                      onChange={onChange}/>
          </label>
      )
    };


Textarea.defaultProps = {
  labelPosition: "left"
};

export default Textarea