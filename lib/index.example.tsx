import React,{ useState }from "react"
import ReactDOM from "react-dom"
import "./index.example.styl"
import Icon from "./components/Icon/icon"
import Button from "./components/Button/button"
import Layout from "./components/Layout/layout"
import Menu from "./components/Menu/menu";

const { Aside,Content, Header, Footer} = Layout;
const { MenuItem,SubMenu } = Menu;
const arr: any = [
    {
      name: "我是一个button，我超出以后会换行，并且会现实点点点",
      items: [{name: "button1"}],
      children: [{
        name: "buttonChildren",
        items: [{name: "buttonChildren1"}],
      }]
    },
    {
      name: "icon",
      items: [{name: "icon1"}],
      children: [{
        name: "iconChildren",
        items: [{name: "iconChildren1"}],
      }]
    },
    {
      name: "menu",
      items: [{name: "menu1"}],
      children: [{
        name: "menuChildren",
        items: [{name: "menuChildren1"}],
      }]
    }
  ];


const App = () => {

  const [names,setName] = useState<Array<string>>([]);

  const onSubMenuChange = (e:string[],x:any) =>{
    console.log(e,x);
    setName(e)
  };

  return (
      <Layout>
        <Header className={'header'}>header</Header>
        <Layout>
          <Aside style={{borderRight: "1px solid #ddd",width: "256px"}}>
            <Menu openNames={names}
                  onSelect={(e,x)=>console.log(e,x)}
                  onSubMenuChange={(e:string[],x:any)=>onSubMenuChange(e,x)}>
              {arr.map((v:any) => <SubMenu
                restData={
                  {item: v}
                }
                title={
                  <span>
                    <Icon name={'table'} style={{marginRight: "2px",fontSize: "18px"}}/>
                    <span>{v.name}</span>
                  </span>
                }
                key={v.name}
                name={v.name}
              >
                {
                  v.children.map((x: any) =>
                      <SubMenu
                          restData={
                            {item: x}
                          }
                          title={
                             <span>{x.name}</span>
                          }
                          key={x.name}
                          name={x.name}>
                        {x.items.map((y:any) => <MenuItem key={y.name} name={y.name}>{y.name}</MenuItem>)}
                      </SubMenu>
                  )
                }
                {v.items.map((z:any) => <MenuItem restData={{item: z}} key={z.name} name={z.name}>{z.name}</MenuItem>)}
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



