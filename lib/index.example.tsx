import React from "react"
import ReactDOM from "react-dom"
import Icon from "./components/Icon/icon"
import Button from "./components/Button/button"
import Layout from "./components/Layout/layout"

const { Aside,Content,Header,Footer } = Layout;

const App = () => {
  return(
      <>
        <Layout>
          <Content/>
          <Header/>
          <Aside/>
          <Footer/>
        </Layout>
        <Icon name={'alipay'}/>
        <Button>1123</Button>
      </>
  )
}

ReactDOM.render(
    <App/>,document.getElementById('app')
)



