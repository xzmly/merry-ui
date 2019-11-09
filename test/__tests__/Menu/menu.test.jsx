import Menu from '../../../lib/components/Menu/Menu'
import {mount} from "enzyme/build/index";
import React from 'react'
import renderer from "react-test-renderer";

const { Item,SubMenu,ItemGroup } = Menu;

const example =
    <Menu>
      <Item key={'1'} _key={'1'}>option1</Item>
      <SubMenu _key={'2'} key={'2'}>
        <Item key={'3'} _key={'3'}>option2</Item>
        <SubMenu _key={'8'} key={'8'}>
          <Item key={'9'} _key={'9'}>option2</Item>
        </SubMenu>
      </SubMenu>
      <ItemGroup title={'通用'} key={'5'}>
        <Item key={'4'} _key={'4'}>option3</Item>
        <SubMenu _key={'6'} key={'6'}>
          <Item key={'7'} _key={'7'}>option2</Item>
        </SubMenu>
      </ItemGroup>
    </Menu>
;

describe('Menu',()=> {
  it('menu 是个 ul',()=>{
    const json = renderer.create(<Menu/>).toJSON();
    expect(json).toMatchSnapshot()
  })
  it('menu 接受 className', () => {
    const c = mount(<Menu className='menu'/>);
    expect(c.find('ul').hasClass('menu')).toBe(true)
  });
  it('menu 接受 theme', () => {
    const c = mount(<Menu theme='dark'/>);
    expect(c.find('ul').hasClass('merry-menu-theme-dark')).toBe(true)
    c.setProps({ theme: 'blue' });
    expect(c.find('ul').hasClass('merry-menu-theme-blue')).toBe(true)
    c.setProps({ theme: 'default' });
    expect(c.find('ul').hasClass('merry-menu-theme-default')).toBe(false)
  });
  it('menu 接受 style', () => {
    const c = mount(<Menu style={{margin: "10px"}}/>);
    const style = c.props().style
    expect(style.hasOwnProperty('margin')).toBe(true)
  });
  it('menu 的 children', () => {
    const json = renderer.create(example)
    expect(json).toMatchSnapshot();
  });
  it('children 是其他元素',()=>{
    const json = renderer.create(<Menu>
      <div>123123</div>
      <div>123123</div>
    </Menu>);
    expect(json).toMatchSnapshot();
  });
  it('不受控组件 defaultOpenKeys',()=>{
    const fn = jest.fn();
    const c = mount(<Menu defaultOpenKeys={["2","8"]} onSubMenuChange={fn}>
      <SubMenu _key={'2'} key={'2'}>
        <SubMenu _key={'8'} key={'8'}>
          <Item key={'9'} _key={'9'}>option2</Item>
        </SubMenu>
      </SubMenu>
    </Menu>);
    expect(c.find('.merry-menu').children().find('.merry-active').length).toBe(2)
    const subMenu = c.find('.merry-sub-menu').first().children().find('.merry-sub-menu-title').first();
    subMenu.simulate('click');
    expect(fn).toHaveBeenCalledTimes(0)
  })
  it('受控组件 openKeys',()=>{
    const c = mount(<Menu openKeys={["2","8"]}>
      <SubMenu _key={'2'} key={'2'}>
        <SubMenu _key={'8'} key={'8'}>
          <Item key={'9'} _key={'9'}>option2</Item>
        </SubMenu>
      </SubMenu>
    </Menu>);
    expect(c.find('.merry-menu').children().find('.merry-active').length).toBe(2);
    c.setProps({ openKeys: [] })
    expect(c.find('.merry-menu').children().find('.merry-active').length).toBe(0);
    c.setProps({ defaultOpenKeys: ["2"] })
    expect(c.find('.merry-menu').children().find('.merry-active').length).toBe(0)
  })
  it("onSubMenuChange",()=>{
    const fn = jest.fn();
    const c = mount(<Menu openKeys={["2"]} onSubMenuChange={fn}>
      <SubMenu _key={'2'} key={'2'}>
        <SubMenu _key={'8'} key={'8'}>
          <Item key={'9'} _key={'9'}>option2</Item>
        </SubMenu>
      </SubMenu>
    </Menu>);
    const subMenu = c.find('.merry-sub-menu').first().children().first().find('.merry-sub-menu-title');
    subMenu.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1)
  });
  it('onSelect',()=>{
    const fn = jest.fn();
    const c = mount(<Menu selectedKeys={[]} onSelect={fn}>
      <Item key={'9'} _key={'9'}>option2</Item>
      <Item key={'10'} _key={'10'} disabled>option3</Item>
    </Menu>);
    const items = c.find('.merry-menu-item');
    items.first().simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
    expect(items.last().hasClass('merry-disabled')).toBe(true)
    items.last().simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  })
  it('default',()=>{
    const fn = jest.fn();
    const c = mount(<Menu defaultSelectedKeys={["9"]} onSelect={fn}>
      <Item key={'9'} _key={'9'}>option2</Item>
    </Menu>);
    const item = c.find('.merry-menu-item');
    item.simulate('click');
    expect(fn).toHaveBeenCalledTimes(0);
    expect(item.hasClass('merry-active')).toBe(true)
  })
});