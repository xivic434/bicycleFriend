// 메인 페이지로 미 로그인시에는 intro.js 로 이동시킨다.
// 사용자 기능 및 기본 레이아웃을 호출한다.
import React, {Component} from "react";
import {Link} from "react-router-dom";
import TitleBodyLayout from "../../components/layouts/title_body_layout";
import HeadNav from "../../components/layouts/head_nav";
import RollingImage from "../../components/main/rollingImage";
import AwesomeSlider from 'react-awesome-slider';

import { mainRolling, mainBanner } from "../../assets/images";

import 'react-awesome-slider/dist/styles.css';


const slider = (
    <AwesomeSlider className="banner-main">
        <div data-src={mainBanner[0]} />
        <div data-src={mainBanner[1]} />
        <div data-src={mainBanner[2]} />
    </AwesomeSlider>
);
class MainSection extends Component{
    render(){ 
        return (
            <>
               <section >
                    <ul >
                        {slider}
                    </ul>
                </section>
                <section >
                        <RollingImage images={mainRolling} /> 
                </section>
                <section className="promotion-main">
                    <div>
                        <h2>유형별 모임</h2>
                        <div >
                            <ul className="main">
                                <li>
                                    <Link to="/" >
                                        <img src="" alt="샤방 라이딩2" />
                                        <p>샤방 라이딩</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" >
                                        <img src="" alt="질주 라이딩" />
                                        <p>질주 라이딩</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" >
                                        <img src="" alt="묘기 라이딩" />
                                        <p>묘기 라이딩</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="promotion-main">
                    <div className="banner banner-1st" >
                        <div className="title" >
                            <h2>
                                여행을 함께 떠나고 싶으신가요<br/>
                                일상의 무료함에서<br/>
                                벗어나고 싶으신가요
                            </h2>
                        </div>
                    </div>
                    <div className="banner banner-2nd" >
                        <div className="title">
                            <h2>
                                자연 바람을 만끽하며<br/>
                                함께 땀을 흘리고 싶으신가요
                            </h2>
                        </div>
                    </div>
                    <div className="banner banner-3rd" >
                        <div className="title">
                            <h2>
                                함께 식사하는<br/>
                                행복함을 찾고 싶으신가요
                            </h2>
                        </div>
                    </div>
                    <div className="banner banner-4th" >
                        <div className="title">
                            <h2>우리가 당신의 부족함을 채워드리겠습니다.</h2>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default class Index extends Component{ 
    render(){
        return (
            <>
                {TitleBodyLayout(HeadNav, MainSection)}
            </>
        )
    }
}