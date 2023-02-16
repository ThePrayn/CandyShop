import React from 'react'

export default function Footer() {
  return (
    <div>
         <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
            <ul className="nav-items">
                        <li className="nav-item">Главная</li>
                        <li className="nav-item">Наши товары</li>
                        <li className="nav-item">О нас</li>
                        <li className="nav-item">Корзина</li>
                    </ul>
                    <ul className="nav-items">
                        <li className="nav-item">Электронная почта</li>
                        <li className="nav-item"> <p>Адресс магазина</p> <p>Адресс производства</p>  </li>
                        <li className="nav-item">+795654633863</li>
                    </ul>
                <ul className="social">
                    <li className="social__item"><a href="sss"><img src="./img/icons/inst.png" alt="insta"/></a></li>
                    <li className="social__item"><a href="sss"><img src="./img/icons/vk.png" alt="vk"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 Power by ThePrayn</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
