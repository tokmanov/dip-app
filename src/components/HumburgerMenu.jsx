import React from 'react';
import {NavLink} from "react-router-dom";

function HumburgerMenu () {
    return (
        <div>
            <div className="humberger__menu__overlay"></div>
            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <NavLink to="/"><img src="img/humberger/humberger-logo.png" alt=""/></NavLink>
                </div>
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li><NavLink to="/">Главная</NavLink></li>
                        <li><NavLink to="/recipes">Рецепты</NavLink></li>
                        <li><NavLink to="/news">Вкусные новости</NavLink></li>
                        <li><NavLink to="/singl-post">Новый рецепт</NavLink></li>
                        <li><NavLink to="/about">О проекте</NavLink></li>
                        <li><NavLink to="/contact">Контакты</NavLink></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div className="humberger__menu__about">
                    <div className="humberger__menu__title sidebar__item__title">
                        <h6>О проекте</h6>
                    </div>
                    <img src="img/humberger/humberger-about.jpg" alt=""/>
                        <h6>Привет! Это сайт мои рецепты!</h6>
                        <p>Сайт создан для всех женщин, девушек и девочек, которые хотят научиться быстро и вкусно готовить. Готовьте с любовью и легко!</p>
                        <div className="humberger__menu__about__social sidebar__item__follow__links">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-envelope-o"></i></a>
                        </div>
                </div>
                <div className="humberger__menu__subscribe">
                    <div className="humberger__menu__title sidebar__item__title">
                        <h6>Подписывайтесь!</h6>
                    </div>
                    <p>Подпишитесь на нашу рассылку и получайте наши самые свежие обновления прямо на свой почтовый ящик.</p>
                    <form action="#">
                        <input type="text" className="email-input" placeholder="Your email"/>
                            <label htmlFor="agree-check">
                                Я согласен с правилами и условиями
                                <input type="checkbox" id="agree-check"/>
                                    <span className="checkmark"></span>
                            </label>
                            <button type="submit" className="site-btn">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
    }
export default HumburgerMenu;