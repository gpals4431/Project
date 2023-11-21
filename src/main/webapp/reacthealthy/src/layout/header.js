import React from 'react';

const Header = () => {
    return (
//Header Section Begin
        /*
        //Humberger Begin
        <div className="humberger__menu__overlay"></div>
    <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
            <a href="#"><img src="img/logo.png" alt=""></a>
        </div>
        <div className="humberger__menu__cart">
            <ul>
                <li><a href="#"><i className="fa-regular fa-comment-dots"></i>> <span>3</span></a></li>
                <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
            </ul>
        </div>
        <div className="humberger__menu__widget">
            <div className="header__top__right__language">
                <a href="#">마이페이지</a>
            </div>
            <div className="header__top__right__auth">
                <a href="#"><i className="fa fa-user"></i> 로그인/회원가입</a>
            </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
            <ul>
                <li className="active"><a href="../../public/index.html">Home</a></li>
                <li><a href="shop-grid.html">운동</a></li>
                <li><a href="#">식단</a>
                    <ul className="header__menu__dropdown">
                        <li><a href="shop-details.html">Shop Details</a></li>
                        <li><a href="shoping-cart.html">Shoping Cart</a></li>
                        <li><a href="checkout.html">Check Out</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="blog.html">크루모집</a></li>
                <li><a href="contact.html">문의게시판</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="header__top__right__social">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-pinterest-p"></i></a>
        </div>
    </div>
         */
    //Humberger End
        <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            <div className="header__top__right__language">
                                <div>마이페이지</div>
                            </div>
                            <div className="header__top__right__auth">
                                <a href="#">로그인/회원가입</a>
                            </div>
                            <div className="header__top__right__auth">
                                <a href="#">로그아웃</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href="../../public/index.html"><img src="img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><a href="../../public/index.html">Home</a></li>
                            <li><a href="shop-grid.html">운동</a></li>
                            <li><a href="#">식단</a>
                                <ul className="header__menu__dropdown">
                                    <li><a href="shop-details.html">Shop Details</a></li>
                                    <li><a href="shoping-cart.html">Shoping Cart</a></li>
                                    <li><a href="checkout.html">Check Out</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html">크루모집</a></li>
                            <li><a href="contact.html">문의게시판</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__cart">
                        <ul>
                            <li><a href="#">구독중</a></li>
                            <li><a href="#">구독하기</a></li>
                            <li><a href="#"><i class="fa fa-comment-dots"></i> <span>3</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
);
};

export default Header;