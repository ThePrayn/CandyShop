import React, { useState } from 'react';
import Header from '../Header';
import Items from '../Items';
import Map from '../Map';
import Video from '../Video';

export default function Home() {
  const [items] = useState([
    {
      id: 1,
      title: 'Жевательный мармелад "Клубничка"',
      img: 'good2.jpg',
      desc: 'Жевательный мягкий ароматный Мармелад в форме Клубнички , вкус Клубники . Лето всегда с Вами! Без глютена...',
      weight: ' grams',
      categ: 'Мармелад',
      price: ' руб',
    },
    {
      id: 2,
      title: 'Бутылочка со вкусом Жвачки',
      img: 'good3.jpg',
      desc: 'Мармеладная Бутылочка со вкусом жвачки , по вкусу как детский Орбит. Доставка по Москве и Московской.',
      weight: ' grams',
      categ: 'Мармелад',
      price: ' руб',
    },
    {
      id: 3,
      title: 'Мармелад "Атлантические Дельфины',
      img: 'good1.jpg',
      desc: 'Сочный, мягкий мармелад в виде Крупного Дельфина на белой сливочной подложке с фруктово-ягодным вкусом',
      weight: ' grams',
      categ: 'Мармелад',
      price: ' руб',
    },
  ]);

  return (
    <div>
      <Header />
      <Items items={items} />
      <Video />
      <Map />
    </div>
  );
}