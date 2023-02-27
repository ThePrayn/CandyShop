import React, { useContext, useState } from 'react'
import { Select, Space } from 'antd';

import { MyContext } from '../../../App';
export default function ItemGoods(props) {
    const { item } = props
    const {addToOrder} = useContext(MyContext);

    const [weight, setWeight] = useState(100);
    const [Price, setPrice] = useState(200);
   
    
    const changeWeight = (value) => {
      setWeight(value);
      setPrice(2 * Number(value));
    };
    const grams = (
      <Space wrap className='select'>
        <Select
          defaultValue={weight}
          style={{
            width: 120,
          }}
          options={[
            {
              value: 100,
              label: '100 гр',
            },
            {
              value: 200,
              label: '200 гр',
            },
            {
              value: 500,
              label: '500 гр',
            },
            {
              value: 1000,
              label: '1 кг',
            },
            {
              value: 2000,
              label: '2 кг',
            }
          ]}
          onChange={changeWeight}
        />
      </Space>
    );
  return (
    <div className='item'>
        <img alt='coffee' src={'./img/goods/' + item.img} onClick={() => props.onShowItem(props.item)}/>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        {grams}
        <p></p>
        <b>{Price}{item.price}</b>

<button className='add-to-card' onClick={() => addToOrder(item)} >+</button>
</div>
  )
}
