import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Icon from "./Icon/icon"
import Button from "./Button/button"

ReactDOM.render(
    <div className='app'>
              <Icon name='icon'/>
              <Button/>
            </div>,
    document.getElementById('app'))