import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigations () {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <h3>+7354644684</h3>
          <ul className="nav-items">
            <li className="nav-item"><Link to='/' >Главная</Link></li>
            <li className="nav-item"><Link to='/goods'>Наши товары</Link></li>
            <li className="nav-item"><Link to='/about'>О нас</Link></li>
            <li className="nav-item"><Link to='/basket'>Корзина</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}