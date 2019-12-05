import * as React from 'react';
import { useState,useEffect } from "react"
import { LabelProps } from "./Input";
import classes from '../../helpers/classes';
import { computeHeight } from "./computeHeight";
import "./Textarea.styl";

export interface AutoSizeType {
  minRows?: number,
  maxRows?: number
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  autoSize?: AutoSizeType | boolean
  labelPosition?: "top" | "left"
}

export type onChangeType = (event:React.ChangeEvent<HTMLTextAreaElement>) => void

const Textarea: React.FC<TextareaProps & LabelProps> =
    props => {

      const [textareaStyle,setTextareaStyle] = useState<any>({});
      const ref = React.createRef<HTMLTextAreaElement>();

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

      useEffect(()=>{
        updateStyle()
      },[]);

      const updateStyle = ():void => {
        const style = autoSize ? computeHeight(ref.current as HTMLTextAreaElement,{
          minRows: _autoSize('minRows'),
          maxRows: _autoSize('maxRows')
        }) : {};

        setTextareaStyle(style);
      };

      const labelProps: LabelProps = { htmlFor, form, style };

      const positionClass:string =
          labelPosition === 'left' ? '' : `textarea-${labelPosition}`;

      const _autoSize = (key: string): undefined | number =>
          typeof autoSize === 'boolean' ? undefined : (autoSize as any)[key];


      const onChange:onChangeType = (event) => {

        updateStyle();
        textareaProps.onChange && textareaProps.onChange(event)
      };

      return (
          <label
              {...labelProps}
              className={classes(className,"textarea",positionClass)}
          >
            {children && <span>{children}</span>}
            <textarea ref={ref}
                      {...textareaProps}
                      style={...textareaStyle}
                      onChange={onChange}/>
          </label>
      )
    };


Textarea.defaultProps = {
  labelPosition: "left"
};

export default Textarea