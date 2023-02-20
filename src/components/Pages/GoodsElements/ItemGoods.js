import React from 'react'
import { Select, Space } from 'antd';
export default function ItemGoods(props) {
    const { item } = props
  return (
    <div className='item'>
        <img alt='coffee' src={'./img/goods/' + item.img} onClick={() => props.onShowItem(props.item)}/>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <p></p>
        <b>{item.price}</b>
        <Space wrap className='select'>
    <Select
      defaultValue="100 гр"
      style={{
        width: 120,
      }}
      options={[
        {
          value: '100 гр',
          label: '100 гр',
        },
        {
          value: '200 гр',
          label: '200 гр',
        },
        {
          value: '500 гр',
          label: '500 гр',
        },
      ]}
    />
  </Space>

<button className='add-to-card' onClick={() => props.onAdd(item)} >+</button>
</div>
  )
}
