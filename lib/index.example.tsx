import React, {useState} from "react"
import ReactDOM from "react-dom"
import "./index.example.styl"
import Icon from "./components/Icon/icon"
import Button from "./components/Button/button"
import Layout from "./components/Layout/layout"
import Menu from "./components/Menu/menu";

const {Aside, Content, Header, Footer} = Layout;
const {MenuItem, SubMenu, ItemGroup} = Menu;
const arr: any = [
  {
    name: "button",
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
            >
              {arr.map((v: any) =>
                  <ItemGroup title={v.name} key={v.name}>
                    <SubMenu
                        restData={
                          {item: v}
                        }
                        title={
                          <span>
                            <Icon name={'table'} style={{marginRight: "2px", fontSize: "18px"}}/>
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
                              {x.items.map((y: any) =>
                                  <ItemGroup title={y.name} key={y.name}>
                                    <MenuItem key={y.name} name={y.name} disabled>{y.name}</MenuItem>
                                  </ItemGroup>
                                    )}
                              </SubMenu>
                        )
                      }
                      {v.items.map((z: any) => <MenuItem restData={{item: z}} key={z.name}
                                                         name={z.name}>{z.name}</MenuItem>)}
                    </SubMenu>
                  </ItemGroup>
              )}
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



