import renderer from 'react-test-renderer'
import Icon from '../../../lib/components/Icon/icon'
import React from 'react'
import {mount} from "enzyme/build/index";

describe('icon',()=>{
  it('是一个svg',()=>{
    const json = renderer.create(<Icon/>).toJSON()
    expect(json).toMatchSnapshot()
  })

  it('点击icon',()=>{
    const fn = jest.fn()
    const c = mount(<Icon onClick={fn}/>)
    c.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})
