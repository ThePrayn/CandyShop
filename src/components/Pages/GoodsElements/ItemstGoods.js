import React from 'react'
import ItemGoods from './ItemGoods'
export default function ItemstGoods(props) {

  
  return (
    <div>
      <main id='goods'>
       {props.filteredGoods.map(item => <ItemGoods key={item.id} item={item} />)}
      </main>
</div>
  )
}

