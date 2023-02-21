import React, { useState } from 'react'
import Catigories from './GoodsElements/Categories';
import ItemstGoods from './GoodsElements/ItemstGoods'
import { Input } from 'antd';
import { Select, Space } from 'antd';

export default function Goods() {
  const grams = 
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


  const [goodsItems] = useState([
    {
      id: 1,
      title: 'Жевательный мармелад "Клубничка"',
      img: 'good2.jpg',
      desc: 'Жевательный мягкий ароматный Мармелад в форме Клубнички , вкус Клубники . Лето всегда с Вами! Без глютена...',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 2,
      title: 'Бутылочка со вкусом Жвачки',
      img: 'good3.jpg',
      desc: 'Мармеладная Бутылочка со вкусом жвачки , по вкусу как детский Орбит. Доставка по Москве и Московской.',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 3,
      title: 'Мармелад "Атлантические Дельфины',
      img: 'good1.jpg',
      desc: 'Сочный, мягкий мармелад в виде Крупного Дельфина на белой сливочной подложке с фруктово-ягодным вкусом',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 4,
      title: 'Жевательный мармелад "Клубничка"',
      img: '04.jpg',
      desc: 'Жевательный мягкий ароматный Мармелад в форме Клубнички , вкус Клубники . Лето всегда с Вами! Без глютена...',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 5,
      title: 'Бутылочка со вкусом Жвачки',
      img: '05.jpg',
      desc: 'Мармеладная Бутылочка со вкусом жвачки , по вкусу как детский Орбит. Доставка по Москве и Московской.',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 6,
      title: 'Мармелад "Атлантические Дельфины',
      img: '06.jpg',
      desc: 'Сочный, мягкий мармелад в виде Крупного Дельфина на белой сливочной подложке с фруктово-ягодным вкусом',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 7,
      title: 'Жевательный мармелад "Клубничка"',
      img: '07.jpg',
      desc: 'Жевательный мягкий ароматный Мармелад в форме Клубнички , вкус Клубники . Лето всегда с Вами! Без глютена...',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 8,
      title: 'Бутылочка со вкусом Жвачки',
      img: '08.jpg',
      desc: 'Мармеладная Бутылочка со вкусом жвачки , по вкусу как детский Орбит. Доставка по Москве и Московской.',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 9,
      title: 'Мармелад "Атлантические Дельфины',
      img: '09.jpg',
      desc: 'Сочный, мягкий мармелад в виде Крупного Дельфина на белой сливочной подложке с фруктово-ягодным вкусом',
      weight: <span>{grams}</span>,
      categ: 'Драже',
      price: '200р/100гр',
    },
    {
      id: 10,
      title: 'Жевательный мармелад "Клубничка"',
      img: '10.jpg',
      desc: 'Жевательный мягкий ароматный Мармелад в форме Клубнички , вкус Клубники . Лето всегда с Вами! Без глютена...',
      weight: <span>{grams}</span>,
      categ: 'Драже',
      price: '200р/100гр',
    },
    {
      id: 11,
      title: 'Бутылочка со вкусом Жвачки',
      img: '11.jpg',
      desc: 'Мармеладная Бутылочка со вкусом жвачки , по вкусу как детский Орбит. Доставка по Москве и Московской.',
      weight: <span>{grams}</span>,
      categ: 'Драже',
      price: '200р/100гр',
    },
    {
      id: 12,
      title: 'Мармелад "Атлантические Дельфины',
      img: '12.jpg',
      desc: 'Сочный, мягкий мармелад в виде Крупного Дельфина на белой сливочной подложке с фруктово-ягодным вкусом',
      weight: <span>{grams}</span>,
      categ: 'Драже',
      price: '200р/100гр',
    },
    {
      id: 13,
      title: 'Жевательный мармелад "Клубничка"',
      img: 'good2.jpg',
      desc: 'Жевательный мягкий ароматный Мармелад в форме Клубнички , вкус Клубники . Лето всегда с Вами! Без глютена...',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 14,
      title: 'Бутылочка со вкусом Жвачки',
      img: 'good3.jpg',
      desc: 'Мармеладная Бутылочка со вкусом жвачки , по вкусу как детский Орбит. Доставка по Москве и Московской.',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 15,
      title: 'Мармелад "Атлантические Дельфины',
      img: 'good1.jpg',
      desc: 'Сочный, мягкий мармелад в виде Крупного Дельфина на белой сливочной подложке с фруктово-ягодным вкусом',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 16,
      title: 'Жевательный мармелад "Клубничка"',
      img: 'good2.jpg',
      desc: 'Жевательный мягкий ароматный Мармелад в форме Клубнички , вкус Клубники . Лето всегда с Вами! Без глютена...',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 17,
      title: 'Бутылочка со вкусом Жвачки',
      img: 'good3.jpg',
      desc: 'Мармеладная Бутылочка со вкусом жвачки , по вкусу как детский Орбит. Доставка по Москве и Московской.',
      weight: <span>{grams}</span>,
      categ: 'Драже',
      price: '200р/100гр',
    },
    {
      id: 18,
      title: 'Мармелад "Атлантические Дельфины',
      img: 'good1.jpg',
      desc: 'Сочный, мягкий мармелад в виде Крупного Дельфина на белой сливочной подложке с фруктово-ягодным вкусом',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 19,
      title: 'Жевательный мармелад "Клубничка"',
      img: 'good2.jpg',
      desc: 'Жевательный мягкий ароматный Мармелад в форме Клубнички , вкус Клубники . Лето всегда с Вами! Без глютена...',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 20,
      title: 'Бутылочка со вкусом Жвачки',
      img: 'good3.jpg',
      desc: 'Мармеладная Бутылочка со вкусом жвачки , по вкусу как детский Орбит. Доставка по Москве и Московской.',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
    {
      id: 21,
      title: 'Мармелад "Атлантические Дельфины',
      img: 'good1.jpg',
      desc: 'Сочный, мягкий мармелад в виде Крупного Дельфина на белой сливочной подложке с фруктово-ягодным вкусом',
      weight: <span>{grams}</span>,
      categ: 'Мармелад',
      price: '200р/100гр',
    },
  ]);

//  const [goodInBasket, setGoodInBasket] = useState([]);
 
 
//  const addToOrder = (item) => {
//   setGoodInBasket([...goodInBasket, item])
//   console.log(goodInBasket);
//   }
  const [find, setFind] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const inputFind = (e) => {
    setFind(e.target.value);
  };

  const getCategory = (categ) => {
    setSelectedCategory(categ);
  };

  const filteredGoods = goodsItems.filter((good) => {
    const isMatched = good.title.toLowerCase().includes(find.toLowerCase());
    const isCategoryMatched =
      selectedCategory === 'all' || good.categ === selectedCategory;
    return isMatched && isCategoryMatched;
  });

  return (
    <div>
      <h1 className='titul'>Наша продукция</h1>
      <Input className='input-find' placeholder="Поиск по названию товара" allowClear value={find} onChange={inputFind} style={{ width: 200 }} />
      <Catigories getCategory={getCategory} />
      <ItemstGoods filteredGoods={filteredGoods} />
    </div>
  );
}