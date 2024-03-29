import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import "./index.example.styl"
import Icon from "./components/Icon/Icon"
import Button from "./components/Button/Button"
import Layout from "./components/Layout/Layout"
import Menu from "./components/Menu/Menu";
import Row from "./components/Grid/Row"
import Checkbox from "./components/Checkbox/Checkbox";
//@ts-ignore
import Input from "./components/Input/Input"
import InputNumber from "./components/InputNumber/InputNumber"

const {Aside, Content, Header } = Layout;
const {Item, SubMenu, ItemGroup} = Menu;
const { Col } = Row;


const App = () => {

  const [names, setName] = useState<Array<string>>(["key4","common"]);
  const [item, setItem] = useState<Array<string>>([]);
  //@ts-ignore
  const [checked, setChecked] = useState<boolean>(false);
  //@ts-ignore
  const [value,setValue] = useState<any[]>([]);

  useEffect(()=>{
    setTimeout(()=>{
      setValue(["AAA"]);
    },3000);
  },[]);

  const onSubMenuChange = (keys: any,event: any) => {
    console.log(event);
    setName(keys)
  };

  return (
      <Layout>
        <Header className={'header'}>
          <Row type={'flex'}>
            <Col span={4}>logo</Col>
            <Col span={20}>search</Col>
          </Row>
        </Header>
        <Layout className={'warp'}>
          <Aside style={{borderRight: "1px solid #ddd", width: "256px",overflowY: "scroll"}}>
            <Menu openKeys={names}
                  defaultOpenKeys={["icon"]}
                  onSubMenuChange={({keys,event}) => onSubMenuChange(keys,event)}

                  onSelect={({keys,event}) => setItem(keys)}
                  defaultSelectedKeys={["icon1"]}
                  selectedKeys={item}

                  theme={'default'}
            >
              <Item key={'key1'} _key={'key1'}>
                <Icon name={'alipay'} style={{fontSize: '18px',marginRight: '8px'}}/>
                Option1
              </Item>
              <Item key={'key2'} _key={'key2'}>
                <Icon name={'email'} style={{fontSize: '18px',marginRight: '8px'}}/>
                Option1
              </Item>
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
                  <Item key={'footer'} _key={'footer'}>Footer</Item>
                </SubMenu>
                <ItemGroup title={'通用'} key={1}>
                  <Item key={'icon'} _key={'icon'}>Icon</Item>
                  <Item key={'button'} _key={'button'}>button</Item>
                  <SubMenu key={'key5'} _key={'common1'} title={
                    <span>
                      <Icon name={'download'} style={{fontSize: '18px',marginRight: '8px'}}/>
                      <span>头部</span>
                    </span>
                  }>
                    <Item key={'navBar'} _key={'navBar'}>NavBar</Item>
                  </SubMenu>
                </ItemGroup>
                <ItemGroup title={'布局'} key={2}>
                  <Item key={'layout'} _key={'layout'}>Layout</Item>
                </ItemGroup>
                <ItemGroup title={'导航'} key={3}>
                  <Item key={'menu'} _key={'menu'}>Menu</Item>
                </ItemGroup>
              </SubMenu>
              <SubMenu key={'key4'} _key={'key4'} title={
                <span>
                  <Icon name={'time'} style={{fontSize: '18px',marginRight: '8px'}}/>
                  <span>时间</span>
                </span>
              }>
                <Item key={'option4'} disabled _key={'option4'}>Option4</Item>
                <Item key={'option5'} _key={'option5'}>Option5</Item>
                <Item key={'option6'} _key={'option6'}>Option6</Item>
              </SubMenu>

            </Menu>
          </Aside>
          <Content>
            <Icon name={'alipay'}/>
            <Button>按钮</Button>
            <Checkbox.Group options={[
              {value: "AAA",label: "AAA"},
              {value: "BBB",label: "BBB"},
              {value: "CCC",label: "CCC"}
            ]} onChange={(e)=>console.log(e)}/>
            <Checkbox.Group options={[
             "DDD","EEE","FFF"
            ]} onChange={(e)=>console.log(e)}/>
            <Checkbox
                disabled={true}
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => console.log(event)}>
              Checkbox123
            </Checkbox>
            <div style={{width: "350px"}}>
              <Input placeholder={"default"} defaultValue={'123'}>Email</Input>
              {/*<br/>*/}
              {/*<Input.Password className={"password"} placeholder={"password"} size={'big'}>Email</Input.Password>*/}
              {/*<br/>*/}
              {/*<Input placeholder={"small"} labelPosition={'top'}><span>Password</span></Input>*/}
              {/*<br/>*/}
              {/*<Input placeholder={"big"}*/}
              {/*       prefix={"$"}*/}
              {/*       suffix={"RMB"}*/}
              {/*       labelPosition={'top'}>Name</Input>*/}
              {/*<br/>*/}
              {/*<Input.Textarea autoSize={{ maxRows: 3,minRows: 3}} onChange={()=>console.log(123123)}>autoSize</Input.Textarea>*/}
              {/*<Input.Textarea autoSize={{minRows: 3,maxRows: 4}} labelPosition={'top'} placeholder={"Textarea"}>123</Input.Textarea>*/}
              {/*<Input.Search labelPosition={'left'}*/}
              {/*              enterButton={'search'}*/}
              {/*              defaultValue={123}*/}
              {/*              onChange={(e) => console.log(e.target.value)}*/}
              {/*              onSearch={(e,v) => console.log(e,v)}*/}
              {/*              size={'small'}*/}
              {/*>Search</Input.Search>*/}
              <InputNumber max={10} min={1} labelPosition={'left'} size={'big'}>增加数量</InputNumber>
              <br/>
              <InputNumber max={10} min={1} style={{margin: '20px 0'}}/>
              <br/>
              <InputNumber max={10} min={1} labelPosition={'top'} size={'small'}>增加数量</InputNumber>
            </div>
          </Content>
        </Layout>
      </Layout>
  )
};

ReactDOM.render(
    <App/>, document.getElementById('app')
);



