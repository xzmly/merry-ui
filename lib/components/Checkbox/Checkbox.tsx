import * as React from 'react';
import classes from '../../helpers/classes';
import './Checkbox.styl';

interface LabelProps {
  className?: string
  children?: React.ReactNode
  htmlFor?: string
  form?: string
  style?: React.CSSProperties
}

type onChangeType = (event:React.ChangeEvent<HTMLInputElement>) => void

interface InputCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>{}

const Checkbox: React.FC<LabelProps & InputCheckboxProps> =
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
    event.stopPropagation();
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

export default Checkbox