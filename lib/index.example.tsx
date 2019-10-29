import React from "react"
import ReactDOM from "react-dom"
import "./index.example.styl"
import Icon from "./components/Icon/icon"
import Button from "./components/Button/button"
import Layout from "./components/Layout/layout"

const { Aside,Content, Header, Footer} = Layout;

const App = () => {
  return (
      <Layout>
        <Header>header</Header>
        <Layout>
          <Aside>aside</Aside>
          <Content>
            <Icon name={'alipay'}/>
            <Button>1123</Button>
          </Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
  )
}

ReactDOM.render(
    <App/>, document.getElementById('app')
)



