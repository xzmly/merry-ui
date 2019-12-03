import renderer from 'react-test-renderer'
import Input from '../../../lib/components/Input/Input'
import React from 'react'
import {mount} from "enzyme/build/index";


describe('input',()=>{
  it('render input',()=>{
    const json = renderer.create(<Input/>).toJSON();
    expect(json).toMatchSnapshot()
  })
});