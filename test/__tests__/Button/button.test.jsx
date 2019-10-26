import renderer from 'react-test-renderer'import Button from '../../../lib/components/Button/button'import Icon from '../../../lib/components/Icon/icon'import { mount } from "enzyme"import React from 'react'const colorType = ['primary','success','warning','danger','info','dark','gray']const sizeType = ['default','small','big']const shapeType = ['rounded','circle']describe('button',()=>{  it('是一个button',()=>{    const json = renderer.create(<Button/>).toJSON()    expect(json).toMatchSnapshot()  })  it('接受一个className',()=>{    const c = mount(<Button className='btn'/>)    expect(c.find('button').hasClass('btn')).toBe(true)  })  it('接受disabled',()=>{    const c = mount(<Button className='btn' disabled/>)    expect(c.props().disabled).toBe(true)    c.setProps({ disabled: false });    expect(c.props().disabled).toBe(false)  })  it('接受children',()=>{    let c = mount(<Button className='btn'>123123</Button>)    expect(c.find('button > span').text()).toBe("123123")    c = mount(<Button className='btn'><span>123123</span></Button>)    expect(c.contains(<span>123123</span>)).toBe(true)    c = mount(<Button className='btn'><Icon/></Button>)    expect(c.find('svg').hasClass('merry-ui-icon')).toBe(true)  })  it('接收color',()=>{    const c = mount(<Button className='btn'/>)    const _expect = (className,props,expected) =>{      expect(c.find('button').hasClass(className)).toBe(expected)      expect(c.props().color).toBe(props)    }    //把color类型全部获取 循环验证    colorType.forEach( item =>{      c.setProps({ color: item });      _expect(`merry-ui-btn-${item}`,item, true)    })  })  it('接受size',()=>{    const c = mount(<Button className='btn'/>)    const _expect = (className,props,expected) =>{      expect(c.find('button').hasClass(className)).toBe(expected)      expect(c.props().size).toBe(props)    }    //把size类型全部获取 循环验证    sizeType.forEach( item =>{      c.setProps({ size: item });      _expect(`merry-ui-btn-${item}`,item, item !== 'default')    })  })  it('接受outline',()=>{    const c = mount(<Button className='btn' outline/>)    expect(c.find('button').hasClass('merry-ui-btn-outline')).toBe(true)    expect(c.props().outline).toBe(true)    c.setProps({ outline: false });    expect(c.find('button').hasClass('merry-ui-btn-outline')).toBe(false)    expect(c.props().outline).toBe(false)  })  it('接受 block',()=>{    const c = mount(<Button className='btn' block/>)    expect(c.find('button').hasClass('merry-ui-btn-block')).toBe(true)    expect(c.props().block).toBe(true)    c.setProps({ block: false });    expect(c.find('button').hasClass('merry-ui-btn-block')).toBe(false)    expect(c.props().block).toBe(false)  })  it('接受 shape',()=>{    const c = mount(<Button className='btn'></Button>)    const _expect = (className,props,expected) =>{      expect(c.find('button').hasClass(className)).toBe(expected)      expect(c.props().shape).toBe(props)    }    //把size类型全部获取 循环验证    shapeType.forEach( item =>{      c.setProps({ shape: item });      _expect(`merry-ui-btn-${item}`,item, true)    })    c.setProps({ shape: 'circle',icon: {name: 'alipay'} });    expect(c.find('span').exists()).toBe(false)    expect(c.find('svg').hasClass('merry-ui-icon')).toBe(true)  })  it('接受 icon',()=>{    const c = mount(<Button className='btn' icon={{position: 'left',name: 'alipay'}}/>)    expect(c.find('svg').hasClass('merry-ui-icon')).toBe(true)    c.setProps({ icon: {position: 'right',name: 'alipay'} });    expect(c.find('svg').hasClass('merry-ui-icon')).toBe(true)    c.setProps({ icon: {position: 'top',name: 'alipay'} });    expect(c.find('svg').exists()).toBe(false)  })  it('点击button',()=>{    const fn = jest.fn()    const c = mount(<Button className='btn' onClick={fn}/>)    c.find('button').simulate('click')    expect(fn).toBeCalled()  })})