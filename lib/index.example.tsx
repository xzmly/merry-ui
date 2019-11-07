import React, {useState} from "react"
import ReactDOM from "react-dom"
import "./index.example.styl"
import Icon from "./components/Icon/icon"
import Button from "./components/Button/button"
import Layout from "./components/Layout/layout"
import Menu from "./components/Menu/menu";

const {Aside, Content, Header, Footer} = Layout;
const {MenuItem, SubMenu, ItemGroup} = Menu;


const App = () => {

  const [names, setName] = useState<Array<string>>([]);
  const [item, setItem] = useState<Array<string>>([]);

  const onSubMenuChange = (names: any) => {
    setName(names)
  };

  return (
      <Layout>
        <Header className={'header'}>header</Header>
        <Layout>
          <Aside style={{borderRight: "1px solid #ddd", width: "256px"}}>
            <Menu openKeys={names}
                  defaultOpenKeys={["icon"]}
                  onSubMenuChange={({names}) => onSubMenuChange(names)}

                  onSelect={({names}) => setItem(names)}
                  defaultSelectedKeys={["icon1"]}
                  selectedKeys={item}

                  theme={'blue'}
            >
              <MenuItem key={'key1'} _key={'key1'}>
                <Icon name={'alipay'} style={{fontSize: '18px',marginRight: '8px'}}/>
                Option1
              </MenuItem>
              <MenuItem key={'key2'} _key={'key2'}>
                <Icon name={'email'} style={{fontSize: '18px',marginRight: '8px'}}/>
                Option1
              </MenuItem>
              <SubMenu key={'key3'} _key={'common'} title={
                <span>
                  <Icon name={'table'} style={{fontSize: '18px',marginRight: '8px'}}/>
                  <span>组件</span>
                </span>
              }>
                <SubMenu key={'key6'} _key={'nav'} title={
                  <span>
                    <Icon name={'nav'} style={{fontSize: '18px',marginRight: '8px'}}/>
                    <span>脚步</span>
                  </span>
                }>
                  <MenuItem key={'footer'} _key={'footer'}>Footer</MenuItem>
                </SubMenu>
                <ItemGroup title={'通用'} key={1}>
                  <MenuItem key={'icon'} _key={'icon'}>Icon</MenuItem>
                  <MenuItem key={'button'} _key={'button'}>button</MenuItem>
                  <SubMenu key={'key5'} _key={'common1'} title={
                    <span>
                      <Icon name={'download'} style={{fontSize: '18px',marginRight: '8px'}}/>
                      <span>头部</span>
                    </span>
                  }>
                    <MenuItem key={'navBar'} _key={'navBar'}>NavBar</MenuItem>
                  </SubMenu>
                </ItemGroup>
                <ItemGroup title={'布局'} key={2}>
                  <MenuItem key={'layout'} _key={'layout'}>Layout</MenuItem>
                </ItemGroup>
                <ItemGroup title={'导航'} key={3}>
                  <MenuItem key={'menu'} _key={'menu'}>Menu</MenuItem>
                </ItemGroup>
              </SubMenu>
              <SubMenu key={'key4'} _key={'key4'} title={
                <span>
                  <Icon name={'time'} style={{fontSize: '18px',marginRight: '8px'}}/>
                  <span>时间</span>
                </span>
              }>
                <MenuItem key={'option4'} _key={'option4'}>Option4</MenuItem>
                <MenuItem key={'option5'} _key={'option5'}>Option5</MenuItem>
                <MenuItem key={'option6'} _key={'option6'}>Option6</MenuItem>
              </SubMenu>

            </Menu>
          </Aside>
          <Content>
            <Icon name={'alipay'}/>
            <Button>按钮</Button>
          </Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
  )
};

ReactDOM.render(
    <App/>, document.getElementById('app')
);



