import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../App';
import { Select, Space } from 'antd';

export default function Basket() {
  const { goodInBasket, delFromOrder } = useContext(MyContext);

  const [weight, setWeight] = useState(100);
  const [prices, setPrices] = useState([]);

  const changeWeight = (value, index) => {
    setWeight(value);
    setPrices((prevPrices) => {
      const newPrices = [...prevPrices];
      newPrices[index] = 2 * Number(value);
      return newPrices;
    });
  };

  useEffect(() => {
    setPrices(goodInBasket.map(() => 200));
  }, [goodInBasket]);

  const grams = (index) => (
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
        onChange={(value) => changeWeight(value, index)}
      />
    </Space>
  );

  let text = goodInBasket.map((item, index) => (
    <div className='shop-cart-item' key={index}>
      <div className='shop-cart-item-img'>
        <img src={'./img/goods/' + item.img} alt={item.title} />
      </div>
      <div className='shop-cart-item-info'>
        <div className='shop-cart-item-title'>{item.title}</div>
        <div className='shop-cart-item-weight'>{grams(index)}</div>
        <div className='shop-cart-item-price'>{prices[index]} руб.</div>
        <button onClick={() => delFromOrder(index)}>Удалить</button>
      </div>
    </div>
  ));

  const total = prices.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="basket-container">
  <h2 className="basket-heading">Корзина</h2>
  
  <div className="basket-items-container">
    <div className="basket-item">
      {text}
      <div className="basket-item-remove">
      </div>
    </div>
  </div>
  
  <div className="basket-summary">
    <div className="basket-summary-row">
      <span>Сумма:</span>
      <span>{total} руб</span>
    </div>
    <div className="basket-summary-row">
      <span>Доставка:</span>
      <select>
        <option value="0">Выберите способ доставки</option>
        <option value="1">Доставка курьером</option>
        <option value="2">Самовывоз</option>
      </select>
    </div>
    <div className="basket-summary-row">
      <span>Оплата:</span>
      <select>
        <option value="0">Выберите способ оплаты</option>
        <option value="1">Оплата наличными</option>
        <option value="2">Оплата картой</option>
      </select>
    </div>
    <div className="basket-summary-row">
      <span>Итого:</span>
      <span>{total} руб</span>
    </div>
    <button className="basket-checkout-button">Оформить заказ</button>
  </div>
</div>
  );
}
