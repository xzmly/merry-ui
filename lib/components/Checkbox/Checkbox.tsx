import * as React from 'react';
import classes from '../../helpers/classes';
import Group, { GroupProps } from "./Group"
import './Checkbox.styl';

export interface LabelProps {
  className?: string
  children?: React.ReactNode
  htmlFor?: string
  form?: string
  style?: React.CSSProperties
}

export type onChangeType = (event:React.ChangeEvent<HTMLInputElement>) => void

export interface InputCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>{}

interface CheckboxComponent<P> extends React.FC<P>{
  Group: React.FC<GroupProps>
}

const Checkbox: CheckboxComponent<LabelProps & InputCheckboxProps> =
        props => {

  const { 
    className,
    children,
    htmlFor,
    form,
    style,
    ...checkboxProps
  } = props;

  const restClass = (name:string):string =>
      classes('',`checkbox-${name}`);
  
  const onChange:onChangeType = (event):void => {
    checkboxProps.onChange && checkboxProps.onChange(event);
  };

  return(
      <label className={classes(
          className,
          'checkbox',
          checkboxProps.disabled ? 'checkbox-disabled' : ''
      )}
             htmlFor={htmlFor}
             form={form}
             style={style}
      >
        <span className={restClass('input-wrap')}>
          <input {...checkboxProps}
                 type="checkbox"
                 onChange={onChange}
                 className={restClass('input')}
          />
           <span className={restClass('input-inner')}/>
        </span>
        <span className={restClass(`text`)}>
          {children}
        </span>
      </label>
  )
};

Checkbox.Group = Group;

export default Checkbox