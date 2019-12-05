import renderer from 'react-test-renderer'
import Input from '../../../lib/components/Input/Input'
import React from 'react'
import {mount} from "enzyme/build/index";

const { Password,Search } = Input;

describe('Input',()=>{
  it('render input',()=>{
    const json = renderer.create(<Input/>).toJSON();
    expect(json).toMatchSnapshot()
  });
  it('size labelPosition',()=>{
    const c = mount(<Input size={'big'}>123</Input>);
    expect(c.find('.merry-input').props().className).toBe('merry-input merry-input-big')
    expect(c.find('.merry-input-label-text').text()).toBe('123');
    c.setProps({ labelPosition: "top" });
    expect(c.find('.merry-input-label').hasClass('merry-input-label-top')).toBe(true)
  });
  it('prefix suffix',()=>{
    const c = mount(<Input prefix={'big'} suffix={'small'}>123</Input>);
    expect(c.find('.merry-input-affix-wrap').exists()).toBe(true);

    expect(c.find('.merry-input-affix-prefix').text()).toBe('big');
    expect(c.find('.merry-input-affix-suffix').text()).toBe('small');
  });
});

describe('Password',()=>{
  it('render Password',()=>{
    const json = renderer.create(<Password/>).toJSON();
    expect(json).toMatchSnapshot()
  });
  it('click icon',()=>{
    const c = mount(<Password>Password</Password>);
    expect(c.find('.merry-input').props().type).toBe('password');
    c.find('.merry-icon').simulate('click');
    expect(c.find('.merry-input').props().type).toBe('text');
  });
});

describe('Search',()=>{
  it('render Search',()=>{
    const json = renderer.create(<Search/>).toJSON();
    expect(json).toMatchSnapshot()
  });
  it('onSearch',()=>{
    const fn = jest.fn();
    const c = mount(<Search onSearch={fn}>Password</Search>);
    c.find('.merry-icon').simulate('click');
    expect(fn).toHaveBeenCalledTimes(1)
  });
});


