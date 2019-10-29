import React from "react"
import ReactDOM from "react-dom"
import "./index.example.styl"
import Icon from "./components/Icon/icon"
import Button from "./components/Button/button"
import Layout from "./components/Layout/layout"

const { Aside,Content, Header, Footer} = Layout;

const App = () => {
  return (
      <>
        <div className={'layout-ex-one'}>
          <Layout>
            <Header/>
            <Content/>
            <Footer/>
          </Layout>
        </div>

        <div className={'layout-ex-one'}>
          <Layout>
            <Header/>
            <Layout>
              <Aside/>
              <Content/>
            </Layout>
          </Layout>
        </div>


        <div className={'layout-ex-one'}>
          <Layout>
            <Layout>
              <Header/>
              <Content/>
              <Footer/>
            </Layout>
            <Aside/>
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



