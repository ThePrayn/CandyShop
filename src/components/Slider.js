import React from 'react'
import { Carousel } from 'antd';

     
export default function Slider() {
    
      
        return (
          <div className='slider'>
          
            <Carousel autoplay className='slider-item'>
              <div >
                <div className="carousel-text">
                  <h1>Выбор аудитории по версии Forbes Россия.</h1>
                  <p>В июне 2020 года русское издание Forbes, главного журнала для предпринимателей присвоило нашей компании звание "Выбор аудитории" среди малых производителей России. Эта награда в большей степени посвящается вам, а мы только коптим и радуем вас вкусностями.</p>
                </div>
                <img src="./img/01.png" alt="I 1" className="carousel-image" />
              </div>
              <div >
                <div className="carousel-text"> 
                <h1>Никаких компромиссов с качеством
Мы глубоко убеждены, что качество товара всегда должно идти на первом месте.</h1>
                <p>Благодарны каждому из вас, кто все эти годы поддерживал нас и покупал наши сладости.</p>
                </div>
                <img src="./img/02.png" alt="I 2" className="carousel-image" />
              </div>
              <div >
                <div className="carousel-text">
                <h1>Несколько лет мы искали поставщиков лучшего сырья. Подбирали специи друг к другу так, чтобы при всем вы чувствовали прежде всего вкус идеального мармелада. </h1>
                <p>Благодарны каждому из вас, кто все эти годы поддерживал нас и покупал наши сладости.</p>
                </div>
                <img src="./img/03.png" alt="I 3" className="carousel-image" />
              </div>
            </Carousel>
            </div>
          );
        
      
      }
