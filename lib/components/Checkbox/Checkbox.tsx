import * as React from 'react';
import classes from '../../helpers/classes';
import './Checkbox.styl';

interface CheckboxProps extends React.HTMLAttributes<HTMLLabelElement>{
}

const Checkbox: React.FC<CheckboxProps> =
        props => {

  const { className,children,...restProps } = props;

  const restClass = (name:string):string =>
      classes('',`checkbox-${name}`);

  return(
      <label className={classes(className,'checkbox')}
             {...restProps}>
        <span className={restClass('input-wrap')}>
          <input type="checkbox"
                 className={restClass('input')}/>
           <span className={restClass('input-inner')}/>
        </span>
        <span className={restClass('text')}>
          {children}
        </span>
      </label>
  )
};

export default Checkbox