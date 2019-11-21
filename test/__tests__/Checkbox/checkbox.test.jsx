import React from 'react'
import Checkbox from '../../../lib/components/Checkbox/Checkbox'
import renderer from "react-test-renderer";
import {mount} from "enzyme";

const { Group } = Checkbox;

describe('Checkbox',()=>{
  it('render Checkbox',()=>{
    const json = renderer.create(<Checkbox/>).toJSON();
    expect(json).toMatchSnapshot()
  });
  it('render Group',()=>{
    const json = renderer.create(<Group/>).toJSON();
    expect(json).toMatchSnapshot()
  });
  it('受控组件',()=>{
    const fn = jest.fn();
    const c = mount(<Checkbox checked={true} onChange={fn}/>);
    expect(c.find('.merry-checkbox-input').props().checked).toBe(true);
    c.setProps({ checked: false });
    expect(c.find('.merry-checkbox-input').props().checked).toBe(false);
    c.find('.merry-checkbox-input').simulate('change');
    expect(fn).toHaveBeenCalledTimes(1)
  });
  it('非受控组件',()=>{
    const fn = jest.fn();
    const c = mount(<Checkbox defaultChecked={true} onChange={fn}/>);
    c.setProps({ defaultChecked: false });
    expect(c.find('.merry-checkbox-input').props().defaultChecked).toBe(false);
    c.find('.merry-checkbox-input').simulate('change');
    expect(fn).toHaveBeenCalledTimes(1)
  });
  it('disabled',()=>{
    const c = mount(<Checkbox disabled/>);
    c.find('.merry-checkbox-input').props().disabled;
    expect(c.find('.merry-checkbox-input').props().disabled).toBe(true)
  })
});
