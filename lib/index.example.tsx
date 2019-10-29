import React from "react"
import ReactDOM from "react-dom"
import "./index.example.styl"
import Icon from "./components/Icon/icon"
import Button from "./components/Button/button"
import Layout from "./components/Layout/layout"

const { Content, Header, Footer} = Layout;

const App = () => {
  return (
      <>
        <div className={'layout-ex-one'}>
          <Layout>
            <Header/>
            <Content>123</Content>
            <Footer/>
          </Layout>
        </div>
        <Icon name={'alipay'}/>
        <Button>1123</Button>
      </>
  )
}

ReactDOM.render(
    <App/>, document.getElementById('app')
)



