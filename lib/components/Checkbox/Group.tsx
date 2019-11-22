import * as React from 'react';
import {useState, useEffect} from "react"
import classes from '../../helpers/classes';
import Checkbox, {onChangeType} from "./Checkbox";

type ValueType = string | number | boolean

export interface OptionType {
  label: React.ReactNode;
  value: ValueType;
  disabled?: boolean;
  onChange?: onChangeType;
}

export interface GroupProps {
  defaultValue?: Array<ValueType>
  disabled?: boolean

  options?: Array<OptionType | string>
  value?: Array<ValueType>
  onChange?: (checkedValue: Array<ValueType>) => void
  className?: string
}

const Group: React.FC<GroupProps> =
  props => {

    const [defaultValue, setDefaultValue] =
        useState<Array<ValueType> | undefined>(props.defaultValue);

    const {
      value,
      options,
      disabled,
      className,
    } = props;

    useEffect(() => {
      if (value) return;
      setDefaultValue(props.defaultValue);
    }, [props.defaultValue]);

    const valueOrDefaultValue: Array<ValueType> = value || defaultValue || [];

    const onChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        fn?: onChangeType
    ): void => {
      const {checked, value} = event.target;

      const newValue: Array<ValueType> = checked ?
          [...valueOrDefaultValue, value] :
          valueOrDefaultValue.filter(v => !(v === value));

      props.onChange && props.onChange(newValue);
      !props.value && setDefaultValue(newValue);
      fn && fn(event);
    };

    const renderChildren: React.ReactNodeArray | undefined =
        options?.map((v: OptionType | string) =>{
          if(typeof v === 'string'){
            return <Checkbox
                checked={valueOrDefaultValue.includes(v)}
                onChange={(event) => onChange(event)}
                disabled={disabled}
                key={v}
                value={v}
            >
              {v}
            </Checkbox>
          }else{
            return <Checkbox
                checked={valueOrDefaultValue.includes(v.value)}
                onChange={(event) => onChange(event, v.onChange)}
                disabled={'disabled' in v ? v.disabled : disabled}
                key={v.value.toString()}
                value={v.value.toString()}
            >
              {v.label}
            </Checkbox>
          }
        });

    return (
        <div className={classes(className,'checkbox-group')}>
          {renderChildren}
        </div>
    )
  };

export default Group