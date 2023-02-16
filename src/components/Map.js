import React, { useEffect, useRef} from 'react'
import IMask from "imask";
import TextArea from 'antd/es/input/TextArea';
import { Button, Space } from 'antd';
export default function Map() {
  
  const phoneRef = useRef(null);

useEffect (() => {
    if (phoneRef.current) {
      const maskOptions = {
        mask: "+7(000)000-00-00",
        lazy: false,
      };
      const mask = IMask(phoneRef.current, maskOptions);
      return () => mask.destroy();
    }
  }, [phoneRef]);

  



  return (
    <div className='map'>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2228.162629916412!2d92.9015344!3d56.0504863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7af1c7702c0d9%3A0xd16c41edd317fc66!2z0KLQoNCmINCf0LvQsNC90LXRgtCw!5e0!3m2!1sru!2sru!4v1676457006100!5m2!1sru!2sru"        
        width="1000px"
        height="500px"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      <div className='before-map'>
        <h3 className='map-item'>Адрес: г.Красноярск, Ул 9го Мая, ТРЦ ПЛАНЕТА</h3>
        <h3 className='map-item'>Телефон: +7865654654</h3>
        <h3 className='map-item'>E-mail: topMarmelad@gmail.com</h3>
        <h3 className='map-item lasth3'>Остались вопросы? </h3>
        <div className='user-data'>
          <input type='text' placeholder='Имя' />
          <input type="tel" id="phone" ref={phoneRef} />
        </div>
        <div className='text-area'><TextArea/></div>
        <div className='mian-button'>
      <Space wrap>
    <Button>Отправить вопрос</Button>
  </Space>
  </div>
      </div>
    </div>
  )
}
