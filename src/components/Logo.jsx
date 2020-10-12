import React from 'react';
import NavLink from "react-router-dom/modules/NavLink";

function Logo () {
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3">
                    <div className="header__social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="header__logo">
                        <NavLink to="/"><img src="img/logo.png" alt=""/></NavLink>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3">
                    <div className="header__btn">
                        <a href="./signin.html" className="primary-btn">Вход/Регистрация</a>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Logo;