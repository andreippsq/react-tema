import React from 'react'
import './style.css'

export default function Navigation() {
    return (
        <div className='container'>
            <nav className="nav">
                <ul className="nav__container">
                    <li className="nav__item">
                        <a href="" className="nav__link">TRAVEL UPDATES</a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">REVIEWS</a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">ABOUT</a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}