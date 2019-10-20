import renderer from 'react-test-renderer'
import Icon from '../../lib/Icon/icon'
import React from 'react'

describe('icon',()=>{
  it('是一个svg',()=>{
    const json = renderer.create(<Icon/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})