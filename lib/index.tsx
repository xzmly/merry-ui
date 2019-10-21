import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from './Icon/icon';
import Button from './Button/button';

ReactDOM.render(
    <>
        <Icon name='alipay' className='icon'/>
        <Icon name='icon-game'/>
        <Button/>
    </>,
    document.getElementById('app'));
