import React from 'react';

function Footer () {
    return (
        <div>
        <footer className="footer">
            <div className="container-fluid">
                <div className="footer__instagram">
                    <div className="footer__instagram__avatar">
                        <div className="footer__instagram__avatar--pic">
                            <img src="img/footer/instagram-avatar.jpg" alt=""/>
                        </div>
                        <div className="footer__instagram__avatar--text">
                            <h5>@ foodieblog</h5>
                            <span>23,7k follower</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                            <div className="footer__instagram__item set-bg"
                                 style={{backgroundImage:"url(img/footer/ip-1.jpg)"}}></div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                            <div className="footer__instagram__item set-bg"
                                 style={{backgroundImage:"url(img/footer/ip-2.jpg)"}}></div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                            <div className="footer__instagram__item set-bg"
                                 style={{backgroundImage:"url(img/footer/ip-3.jpg)"}}></div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                            <div className="footer__instagram__item set-bg"
                                 style={{backgroundImage:"url(img/footer/ip-4.jpg)"}}></div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                            <div className="footer__instagram__item set-bg"
                                 style={{backgroundImage:"url(img/footer/ip-5.jpg)"}}></div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                            <div className="footer__instagram__item set-bg"
                                 style={{backgroundImage:"url(img/footer/ip-6.jpg)"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__text">
                            <div className="footer__logo">
                                <a href="#"><img src="img/logo.png" alt=""/></a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut<br/> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                commodo viverra<br/> maecenas accumsan lacus vel facilisis. </p>
                            <div className="footer__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                                <a href="#"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                        <div className="footer__copyright">
                            <p>
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script>
                                All rights reserved | This template is made with <i className="fa fa-heart"
                                                                                    aria-hidden="true"></i> by <a
                                    href="https://colorlib.com" target="_blank">Colorlib</a>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="search-close-switch">+</div>
            <form className="search-model-form">
                <input type="text" id="search-input" placeholder="Search here....."/>
            </form>
        </div>
    </div>
    </div>
    );
}
export default Footer;