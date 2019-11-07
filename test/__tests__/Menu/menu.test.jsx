import Menu from '../../../lib/components/Menu/menu'
import {mount,shallow} from "enzyme/build/index";
import React from 'react'
import renderer from "react-test-renderer";

const { MenuItem,SubMenu,ItemGroup } = Menu;

const example =
    <Menu>
      <MenuItem key={'1'} _key={'1'}>option1</MenuItem>
      <SubMenu _key={'2'} key={'2'}>
        <MenuItem key={'3'} _key={'3'}>option2</MenuItem>
        <SubMenu _key={'8'} key={'8'}>
          <MenuItem key={'9'} _key={'9'}>option2</MenuItem>
        </SubMenu>
      </SubMenu>
      <ItemGroup title={'通用'} key={'5'}>
        <MenuItem key={'4'} _key={'4'}>option3</MenuItem>
        <SubMenu _key={'6'} key={'6'}>
          <MenuItem key={'7'} _key={'7'}>option2</MenuItem>
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
    expect(json).toMatchSnapshot()
  });
  it('不受控组件 defaultOpenKeys',()=>{
    const c = mount(<Menu defaultOpenKeys={["2","8"]}>
      <SubMenu _key={'2'} key={'2'}>
        <SubMenu _key={'8'} key={'8'}>
          <MenuItem key={'9'} _key={'9'}>option2</MenuItem>
        </SubMenu>
      </SubMenu>
    </Menu>);
    expect(c.find('.merry-menu').children().find('.merry-active').length).toBe(2)
  })
  it('受控组件 openKeys',()=>{
    const openKeys = []
    const onSubMenuChange = (e) => console.log(123123123)
    const c = shallow(<Menu openKeys={openKeys} onSubMenuChange={onSubMenuChange}>
      <SubMenu _key={'2'} key={'2'}>
        <SubMenu _key={'8'} key={'8'}>
          <MenuItem key={'9'} _key={'9'}>option2</MenuItem>
        </SubMenu>
      </SubMenu>
    </Menu>);
    c.find('.merry-menu').children().simulate('click',()=>console.log(123123123));
  })
})