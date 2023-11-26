import React, {useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Crew = () => {

    const navigate = useNavigate();
    

    // 초기값 설정
    const [reg, setReg] = React.useState({
        subject: '',
        crewCount : '',
        category : '',
        creationDate : '',
        deadline : '',
        content : '',
    });
    
    //비구조화 할당시키기
    const { subject, crewCount, creationDate, deadline, content } = reg;
    
    //onchange 이벤트 발생시 기능 구현
    const onChange = (e) => {
        setReg({
            // 기존의 reg 라는 뜻 = ... 용법 사용 => 기존 값을 유지하기 위해 추가
            ...reg,
            [e.target.name]: e.target.value,
        });
    };

    //등록하기 버튼을 누르면 axios를 통해 비동기 통신
    const saveCrew =  async () => {
        await axios.post('//localhost:3000/crew', reg ).then(response => {
            console.log(response)
            alert("등록완료");
            navigate('/crew');
        });
        
    };

    //셀렉트 태그시 이벤트 발생을 위한 코드 작성
    const categoryList = [
        {value: "running", name: "러닝"}
        ,{value: "hiking", name: "등산"}
        ,{value: "badminton", name:"배드민턴"}
        ,{value: "fitness", name: "헬스"}
    ];
    const [category, setCategory] = React.useState("러닝");

    const categoryCheck =(e)=>{
        setCategory(e.target.value);
    };

    return (
        <section className="checkout spad">
            <div className="container">
                <div className="checkout__form">
                    <h4 className="text-center">크루 등록</h4>
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
                                            <p>크루명<span>*</span></p>
                                            <input
                                                placeholder="크루명을 입력해주세요."
                                                type="text"
                                                name='subject'
                                                value={subject}
                                                onChange={onChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout__input">
                                    <p>모집 인원<span>*</span></p>
                                    <input
                                        placeholder="숫자만 입력 가능합니다."
                                        type="number"
                                        name='crewCount'
                                        value={crewCount}
                                        onChange={onChange} />
                                </div>
                                <div className="checkout__order__products">
                                    <p>카테고리<span>*</span></p>
                                    <label>
                                        <select 
                                            value={category} onChange={categoryCheck}>
                                            {categoryList.map((item)=>{
                                                return(
                                                <option value={item.value} key={item.value}>
                                                    {item.name}
                                                </option>)
                                            })}
                                        </select>
                                    </label>
                                </div>
                                <div className="checkout__input">
                                    <p>위치<span>*</span></p>
                                    <input type="text" placeholder="Street Address" className="checkout__input__add" />
                                </div>
                                <div className="checkout__input">
                                    <p>모집 기간<span>*</span></p>
                                    <input
                                        type="date"
                                        name='creationDate'
                                        value={creationDate}
                                        onChange={onChange}
                                    />
                                    <input
                                        type="date"
                                        name='deadline'
                                        value={deadline}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="checkout__input">
                                    <p>내용<span>*</span></p>
                                    <textarea
                                        placeholder="크루 소개글을 작성해주세요."
                                        name="content"
                                        cols="30"
                                        rows="10"
                                        value={content}
                                        onChange={onChange}
                                    ></textarea>
                                </div>
                                {/* <div className="checkout__input">
                                    <p>파일 첨부<span>*</span></p>
                                    <input class="checkout__input" type="text" />
                                    <button class="site-btn" onClick={uploadCrew}>파일첨부</button>
                                </div> */}
                                <hr />
                                <button onClick={saveCrew} class="site-btn">등록</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Crew;