import React,{ useState }from "react"
import ReactDOM from "react-dom"
import "./index.example.styl"
import Icon from "./components/Icon/icon"
import Button from "./components/Button/button"
import Layout from "./components/Layout/layout"
import Menu from "./components/Menu/menu";

const { Aside,Content, Header, Footer} = Layout;
const { MenuItem,SubMenu } = Menu;

const App = () => {

  const [names,setName] = useState<Array<number | string>>([]);

  const onSubMenuChange = (e:any) =>{
    setName(e)
  };

  return (
      <Layout>
        <Header className={'header'}>header</Header>
        <Layout>
          <Aside style={{borderRight: "1px solid #ddd"}}>
            <Menu openNames={names} onSubMenuChange={(e)=>onSubMenuChange(e)}>
              {[1,2,3].map(v => <SubMenu
                title={
                  <span>button</span>
                }
                key={v}
                name={v}
              >
                {[1,2,3].map((v:number) => <MenuItem key={v}>123</MenuItem>)}
              </SubMenu>)}
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



