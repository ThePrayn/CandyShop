import React, { useContext } from 'react'

import { MyContext } from '../../../App';
export default function ItemGoods(props) {
    const { item } = props
    const {addToOrder} = useContext(MyContext);
  return (
    <div className='item'>
        <img alt='coffee' src={'./img/goods/' + item.img} onClick={() => props.onShowItem(props.item)}/>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <p></p>
        <b>{item.price}</b>
        {item.weight}

<button className='add-to-card' onClick={() => addToOrder(item)} >+</button>
</div>
  )
}
