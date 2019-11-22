import React from 'react'
import Checkbox from '../../../lib/components/Checkbox/Checkbox'
import renderer from "react-test-renderer";
import {mount} from "enzyme";

const { Group } = Checkbox;

const options = [{
  label: "AAA",value: "AAA"
},{
  label: "BBB",value: "BBB"
},{
  label: "CCC",value: "CCC",disabled: true
}];

describe('Checkbox',()=>{
  it('render Checkbox',()=>{
    const json = renderer.create(<Checkbox/>).toJSON();
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

describe('Group',()=>{
  it('render Group',()=>{
    const json = renderer.create(<Group/>).toJSON();
    expect(json).toMatchSnapshot()
  });
  it('options 和 disabled',()=>{
    const c = mount(<Group options={options}/>);
    expect(c.find('.merry-checkbox-input').at(0).props().value).toBe('AAA');
    expect(c.find('.merry-checkbox').length).toBe(3);
    expect(c.find('.merry-checkbox-disabled').length).toBe(1);
    c.setProps({ disabled: true });
    expect(c.find('.merry-checkbox-disabled').length).toBe(3);
  });
  it('受控组件',()=>{
    const fn = jest.fn();
    const c = mount(<Group options={["AAA","BBB","CCC"]} value={["AAA","BBB","CCC"]} onChange={fn}/>);
    const inputs = c.find('.merry-checkbox-input');
    expect(inputs.length).toBe(3);

    inputs.at(0).simulate('change');
    expect(fn).toHaveBeenCalledWith([])
  })
});
