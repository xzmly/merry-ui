import renderer from 'react-test-renderer'
import Layout from '../../../lib/components/Layout/Layout'
import React from 'react'
import {mount} from "enzyme/build/index";

const { Aside,Content, Header, Footer} = Layout;

describe('layout',()=> {
  it('layout 里如果有 aside 就会增加一个has-aside className,当只存在一个aside时候',()=>{
    const c = mount(<Layout>
      <Aside/>
    </Layout>);
    expect(c.find('section').hasClass('merry-layout-has-aside')).toBe(true)
  })
  it('layout 里如果有 aside 就会增加一个has-aside className，当有其他元素和aside一起存在时候',()=>{
    const c = mount(<Layout>
      <div>1123</div>
      <Aside/>
    </Layout>);
    expect(c.find('section').hasClass('merry-layout-has-aside')).toBe(true)
  })
  it('是一个section', () => {
    const json = renderer.create(<Layout/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('是一个header',()=>{
    const json = renderer.create(<Header/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('是一个footer',()=>{
    const json = renderer.create(<Footer/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('是一个main',()=>{
    const json = renderer.create(<Content/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('是一个aside',()=>{
    const json = renderer.create(<Aside/>).toJSON()
    expect(json).toMatchSnapshot()
  })
});
