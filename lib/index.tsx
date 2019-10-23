import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from './Icon/icon';
import Button from './Button/button';

ReactDOM.render(
    <>
        <Icon name='alipay' className='icon'/>
        <Icon name='icon-2'/>
        <Button onClick={()=>console.log(123123)}>
            Primary
        </Button>
        <Button color={'success'} size={'big'}>
            Success
        </Button>
        <Button color={'danger'}>
            danger
        </Button>
        <Button color={'info'} outline>
            Info
        </Button>
        <Button color={'warning'} outline size={'small'}>
            Warning
        </Button>
        <Button color={'dark'} outline size={'big'}>
            Dark
        </Button>
        <Button color={'danger'} disabled size={'big'} outline>
            danger
        </Button>
    </>,
    document.getElementById('app'));
