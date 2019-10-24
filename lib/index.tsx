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
        <Button color={'success'} size={'big'} shape={'rounded'}>
            Success
        </Button>
        <Button color={'danger'}>
            danger
        </Button>
        <Button color={'info'} shape={'circle'} size={'big'} icon={{position: 'left',name: 'alipay'}}>
            Info
        </Button>
        <Button color={'warning'} block outline size={'big'}>
            Warning
        </Button>
        <Button color={'dark'} shape={'circle'} size={'big'} icon={{position: 'right',name: 'alipay'}}>
            支付宝
        </Button>
        <Button color={'danger'} disabled size={'big'}
                shape={'circle'}
                icon={{position: 'left',name: 'alipay'}}>
            danger
        </Button>
        <Button color={'gray'} size={'small'}
                shape={'circle'}
                >
            danger
        </Button>
    </>,
    document.getElementById('app'));

