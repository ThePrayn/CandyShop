import React, { useContext } from 'react'
import { MyContext } from '../../App';
export default function Basket() {
 
  const {goodInBasket} = useContext(MyContext);

  let text = goodInBasket.map((item, index) => (
    <div className="shop-cart-item" key={index}>
      <div className="shop-cart-item-img">
        <img src={'./img/goods/' + item.img} alt={item.title} />
      </div>
      <div className="shop-cart-item-info">
        <div className="shop-cart-item-title">{item.title}</div>
        <div className="shop-cart-item-weight">{item.weight}</div>
        <div className="shop-cart-item-price">{item.price}</div>
      </div>
    </div>
  ));

  return (
    <div class="basket-container">
  <h2 class="basket-heading">Корзина</h2>
  
  <div class="basket-items-container">
    <div class="basket-item">
      {text}
      <div class="basket-item-remove">
        <button>Удалить</button>
      </div>
    </div>
  </div>
  
  <div class="basket-summary">
    <div class="basket-summary-row">
      <span>Сумма:</span>
      <span>$15</span>
    </div>
    <div class="basket-summary-row">
      <span>Доставка:</span>
      <select>
        <option value="0">Выберите способ доставки</option>
        <option value="1">Доставка курьером</option>
        <option value="2">Самовывоз</option>
      </select>
    </div>
    <div class="basket-summary-row">
      <span>Оплата:</span>
      <select>
        <option value="0">Выберите способ оплаты</option>
        <option value="1">Оплата наличными</option>
        <option value="2">Оплата картой</option>
      </select>
    </div>
    <div class="basket-summary-row">
      <span>Итого:</span>
      <span>$15</span>
    </div>
    <button class="basket-checkout-button">Оформить заказ</button>
  </div>
</div>
  );
}
