import React from 'react';
import Item from './Item';
import { Button, Space } from 'antd';
export default function Items(props) {
  return (
<div><h1 className='titul'>Наша продукция</h1>
<main id='home-goods'>
{props.items.map(item => <Item key={item.id} item={item}/>)}
</main>
<div className='mian-button'>
<Space wrap>
    <Button href='/goods'>Посмотреть все товары</Button>
  </Space>
  </div>
</div> 
);

}
