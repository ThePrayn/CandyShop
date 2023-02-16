import React from 'react'


export default function Navigations () {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <h3>+7354644684</h3>
          <ul className="nav-items">
            <li className="nav-item"><a href='/'>Главная</a></li>
            <li className="nav-item"><a href='/goods'>Наши товары</a></li>
            <li className="nav-item"><a href='/about'>О нас</a></li>
            <li className="nav-item"><a href='/basket'>Корзина</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}