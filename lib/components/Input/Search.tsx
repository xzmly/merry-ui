import * as React from 'react';
import {useState,useEffect} from "react";
import Input,{TotalProps}from "./Input";
import classes from '../../helpers/classes';
import Icon from "../Icon/Icon"
import "./Search.styl"

type DefaultValueType = string | number | string[] | undefined

type onChangeType = (event:React.ChangeEvent<HTMLInputElement>) => void

export interface SearchProps extends TotalProps{
  onSearch?: (value: DefaultValueType,e:React.MouseEvent) => void
  enterButton?: boolean | React.ReactNode
}

const Search: React.FC<SearchProps> =
  props => {

    const {className,children,onSearch,...restProps} = props;

    const [defaultValue,setDefaultValue] = useState<DefaultValueType>(restProps?.defaultValue);

    useEffect(()=>{
      setDefaultValue(restProps?.defaultValue)
    },[props.defaultValue]);

    const _onSearch = (e:React.MouseEvent):void => {
      onSearch && onSearch(restProps.value || defaultValue,e)
    };

    const onChange:onChangeType = (e) => {
      restProps.onChange ? restProps.onChange(e) : setDefaultValue(e.target.value)
    };

  return (
      <Input {...restProps}
             className={classes(className,'input-search')}
             onChange={onChange}
             defaultValue={defaultValue}
             suffix={
               <Icon name={'search'} onClick={_onSearch}/>
             }>
        {children}
      </Input>
  )
};

export default Search