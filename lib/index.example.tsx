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
            <Menu openNames={names}
                  defaultOpenNames={["icon"]}
                  onSubMenuChange={({names}) => onSubMenuChange(names)}

                  onSelect={({names}) => setItem(names)}
                  defaultSelectedNames={["icon1"]}
                  selectedNames={item}

                  theme={'blue'}
            >
              <MenuItem key={'key1'} name={'key1'}>
                <Icon name={'alipay'} style={{fontSize: '18px',marginRight: '8px'}}/>
                Option1
              </MenuItem>
              <MenuItem key={'key2'} name={'key2'}>
                <Icon name={'email'} style={{fontSize: '18px',marginRight: '8px'}}/>
                Option1
              </MenuItem>
              <SubMenu key={'key3'} name={'common'} title={
                <span>
                  <Icon name={'table'} style={{fontSize: '18px',marginRight: '8px'}}/>
                  <span>组件</span>
                </span>
              }>
                <ItemGroup title={'通用'}>
                  <MenuItem key={'icon'} name={'icon'}>Icon</MenuItem>
                  <MenuItem key={'button'} name={'button'}>button</MenuItem>
                </ItemGroup>
                <ItemGroup title={'布局'}>
                  <MenuItem key={'layout'} name={'layout'}>Layout</MenuItem>
                </ItemGroup>
                <ItemGroup title={'导航'}>
                  <MenuItem key={'menu'} name={'menu'}>Menu</MenuItem>
                </ItemGroup>
              </SubMenu>
              <SubMenu key={'key4'} name={'key4'} title={
                <span>
                  <Icon name={'time'} style={{fontSize: '18px',marginRight: '8px'}}/>
                  <span>时间</span>
                </span>
              }>
                <MenuItem key={'option4'} name={'option4'}>Option4</MenuItem>
                <MenuItem key={'option5'} name={'option5'}>Option5</MenuItem>
                <MenuItem key={'option6'} name={'option6'}>Option6</MenuItem>
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



