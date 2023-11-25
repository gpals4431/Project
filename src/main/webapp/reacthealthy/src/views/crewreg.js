const React = require('react');

const Crew = () => {
    return(
        <section className="checkout spad">
            <div className="container">
                <div className="checkout__form">
                    <h4 className ="text-center">크루 등록</h4>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>등록자 아이디</p>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>크루 이름<span>*</span></p>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout__input">
                                    <p>모집 인원<span>*</span></p>
                                    <input type="number"/>
                                </div>
                                <div className="checkout__order__products">
                                    <p>카테고리<span>*</span></p>
                                    <label>
                                        <select>
                                            <option>러닝</option>
                                            <option>등산</option>
                                            <option>배드민턴</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="checkout__input">
                                    <p>위치<span>*</span></p>
                                    <input type="text" placeholder="Street Address" className="checkout__input__add"/>
                                </div>
                                <div className="checkout__input">
                                    <p>모집 기간<span>*</span></p>
                                    <input type="date"/>
                                        <input type="date"/>
                                </div>
                                <div className="checkout__input">
                                    <p>내용<span>*</span></p>
                                    <textarea type="text"></textarea>
                                </div>
                                <div className="checkout__input">
                                    <p>파일 첨부<span>*</span></p>
                                    <input class="checkout__input" type="text"/>
                                        <button class="site-btn">등록</button>
                                </div>
                                <hr/>
                                    <button type="submit" class="site-btn">PLACE ORDER</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Crew;