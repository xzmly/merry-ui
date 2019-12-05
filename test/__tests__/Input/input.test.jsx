import renderer from 'react-test-renderer'
import Input from '../../../lib/components/Input/Input'
import React from 'react'
import {mount} from "enzyme/build/index";

const { Password,Search,Textarea } = Input;

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
  it('enterButton',()=>{
    const c = mount(<Search enterButton>Password</Search>);
    expect(c.find('.search-btn').exists()).toBe(true);

    c.setProps({ enterButton: "123" });
    expect(c.find('.search-btn > span').text()).toBe('123')
  });
  it('onChange',()=>{
    const fn = jest.fn();
    const c = mount(<Search onChange={fn}>Password</Search>);
    c.find('.merry-input').simulate('change');
    expect(fn).toHaveBeenCalledTimes(1)
  });
  it('defaultValue',()=>{
    const c = mount(<Search>Password</Search>);
    c.find('.merry-input').simulate('change',{ target: { value: '123' } });
    expect(c.find('.merry-input').props().defaultValue).toBe("123")
  })
});

describe('Textarea',()=>{
  it('render Textarea',()=>{
    const json = renderer.create(<Textarea/>).toJSON();
    expect(json).toMatchSnapshot()
  });
  it('labelPosition',()=>{
    const c = mount(<Textarea labelPosition={'top'}>123</Textarea>);
    expect(c.find('.merry-textarea').hasClass('merry-textarea-top')).toBe(true)
  });
  it('autoSize is boolean',()=>{
    const c = mount(<Textarea autoSize>123</Textarea>);
    expect(document.querySelector('body > textarea')).not.toBe(null);
  });
  it('autoSize is object',()=>{
    const c2 = mount(<Textarea autoSize={{maxRows: 5,minRows: 5}}>123</Textarea>);
    expect(document.querySelector('body > textarea')).not.toBe(null);
  });
  it('autoSize is boolean onChange',()=>{
    const fn = jest.fn();
    const c = mount(<Textarea autoSize={true} onChange={fn}>123</Textarea>);
    c.find('textarea').simulate('change');
    expect(fn).toHaveBeenCalledTimes(1)
  });
  it('autoSize is false onChange',()=>{
    const fn = jest.fn();
    const c = mount(<Textarea onChange={fn}>123</Textarea>);
    c.find('textarea').simulate('change');
    expect(fn).toHaveBeenCalledTimes(1)
  });
  it('box-sizing === border-box',()=>{
    const c = mount(<Textarea/>);
    c.find('textarea').simulate('change');
    // expect(c.find('textarea').props().style.boxSizing).toBe('border-box');
    // c.setProps({ boxSizing: 'content-box' });
    // expect(c.find('textarea').props().style.boxSizing).toBe('content-box')
  })
});
