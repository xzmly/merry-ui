import React from "react"
import ReactDOM from "react-dom"
import "./index.example.styl"
import Icon from "./components/Icon/icon"
import Button from "./components/Button/button"
import Layout from "./components/Layout/layout"
import Menu from "./components/Menu/menu";

const { Aside,Content, Header, Footer} = Layout;

const App = () => {
  return (
      <Layout>
        <Header className={'header'}>header</Header>
        <Layout>
          <Aside>
            <Menu>123</Menu>
          </Aside>
          <Content>
            <Icon name={'alipay'}/>
            <Button>按钮</Button>
          </Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
  )
}

ReactDOM.render(
    <App/>, document.getElementById('app')
)



