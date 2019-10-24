import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from './Icon/icon';
import Button from './Button/button';

ReactDOM.render(
    <>
        <Icon name='alipay' className='icon'/>
        <Icon name='icon-2'/>
        <Button size={'default'}><span>123123</span></Button>
    </>,
    document.getElementById('app'));

