import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from './components/Icon/icon';
import Button from './components/Button/button';

ReactDOM.render(
    <>
      <Icon name='alipay' className='icon'/>
      <Icon name='icon-2'/>
      <Button size={'small'} shape={'rounded'}>更新</Button>
    </>,
    document.getElementById('app'));

