import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = ()=> {
    return (
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-1 col-6 order-md-1 order-1">
                            <div className="header__humberger">
                                <i className="fa fa-bars humberger__open"></i>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-10 order-md-2 order-3">
                            <nav className="header__menu">
                                <ul>
                                    <li><NavLink to="">Главная</NavLink></li>
                                    <li><NavLink to="/recipes">Рецепты</NavLink>
                                        <div className="header__megamenu__wrapper">
                                            <div className="header__megamenu">
                                                <div className="header__megamenu__item">
                                                    <div className="header__megamenu__item--pic set-bg"
                                                         style={{backgroundImage:"url(img/megamenu/p-5.jpg)"}}>
                                                        <div className="label">Десерты</div>
                                                    </div>
                                                    <div className="header__megamenu__item--text">
                                                        <h5><a href="#">How to Make a Milkshake With Any Ice Cream
                                                            ...</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="header__megamenu__item">
                                                    <div className="header__megamenu__item--pic set-bg"
                                                         style={{backgroundImage:"url(img/megamenu/p-4.jpg)"}}>
                                                        <div className="label">Завтрак</div>
                                                    </div>
                                                    <div className="header__megamenu__item--text">
                                                        <h5><a href="#">How to Make a Milkshake With Any Ice Cream
                                                            ...</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="header__megamenu__item">
                                                    <div className="header__megamenu__item--pic set-bg"
                                                         style={{backgroundImage:"url(img/megamenu/p-3.jpg)"}}>
                                                        <div className="label">Полдник</div>
                                                    </div>
                                                    <div className="header__megamenu__item--text">
                                                        <h5><a href="#">How to Make a Milkshake With Any Ice Cream
                                                            ...</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="header__megamenu__item">
                                                    <div className="header__megamenu__item--pic set-bg"
                                                         style={{backgroundImage:"url(img/megamenu/p-4.jpg)"}}>
                                                        <div className="label">Обед</div>
                                                    </div>
                                                    <div className="header__megamenu__item--text">
                                                        <h5><a href="#">How to Make a Milkshake With Any Ice Cream
                                                            ...</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="header__megamenu__item">
                                                    <div className="header__megamenu__item--pic set-bg"
                                                         style={{backgroundImage:"url(img/megamenu/p-1.jpg)"}}>
                                                        <div className="label">Ужин</div>
                                                    </div>
                                                    <div className="header__megamenu__item--text">
                                                        <h5><a href="#">How to Make a Milkshake With Any Ice Cream
                                                            ...</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><NavLink to="/news">Вкусные новости</NavLink></li>
                                    <li><NavLink to="/singl-post">Новый рецепт</NavLink></li>
                                    <li><NavLink to="/about">О проекте</NavLink></li>
                                    <li><NavLink to="/contact">Контакты</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-2 col-md-1 col-6 order-md-3 order-2">
                            <div className="header__search">
                                <i className="fa fa-search search-switch"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Menu;