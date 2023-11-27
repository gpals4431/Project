import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../styles/css/bootstrap.min.css';
//import '../styles/css/elegant-icons.css';
import '../styles/css/font-awesome.min.css';
//import '../styles/css/jquery-ui.min.css';
//import '../styles/css/nice-select.css';
// import '../styles/css/owl.carousel.min.css';
//import '../styles/css/slicknav.min.css';
import '../styles/css/style.css';
import { Link, useNavigate } from 'react-router-dom';

const JoinForm = () => {
    return (
        <>
            {/* Breadcrumb Section Begin */}
            <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="breadcrumb__text">
                                <h2>회원가입</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}

            {/* Checkout Section Begin */}
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">
                        <form action="#">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="checkout__input">
                                        <p>아이디 &nbsp;<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div class="checkout__input">
                                        <p>비밀번호&nbsp;<span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div class="checkout__input">
                                        <p>비밀번호 확인&nbsp;<span>*</span></p>
                                        <input type="text" placeholder="Street Address" class="checkout__input__add" />
                                    </div>
                                    <div class="checkout__input">
                                        <p>이 름 <span>*</span></p>
                                        <input type="text" />
                                    </div>
                                    <div class="checkout__input">
                                        <p>위 치<span>*</span></p>
                                        <input type="text" />
                                    </div>

                                    <div>
                                        <p style={{color: 'black'}}>성 별<span style={{color: 'red'}}>*</span></p>
                                        남<input style={{textAlign: 'left'}} type="radio" checked />&nbsp;&nbsp;&nbsp;
                                        여<input style={{textAlign: 'left'}} type="radio" />
                                    </div>
                                    <br>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="checkout__input">
                                                    <p>핸드폰 번호<span>*</span></p>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="checkout__input">
                                                    <p>Email<span>*</span></p>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{width: '100%', text-align: 'center'}}>

                                            <button type="submit" class="site-btn" style="text-align: center;">회원가입</button>
                                        </div>
                                    </br>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* Checkout Section End */}
        </>
    );
};

export default JoinForm;