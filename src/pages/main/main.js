// 메인 페이지로 미 로그인시에는 intro.js 로 이동시킨다.
// 사용자 기능 및 기본 레이아웃을 호출한다.
import React, {Component} from "react";
import TitleBodyLayout from "../../components/layouts/title_body_layout";
class HeadSection extends Component{
    render(){ 
        return (
            <>
                <div>
                    <img src="" alt="logo"></img>
                </div>
                <div >
                    <nav>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </nav>
                </div>
            </>
        )
    }
}



class MainSection extends Component{
    render(){ 
        return (
            <>
                <section>
                    
                </section>
                <div>
                    <h2>유형별 모임</h2>
                </div>
                <div className="">
                    <p>여행을 함께 떠나고 싶으신가요</p>
                    <p>일상의 무료함에서</p>
                    <p>벗어나고 싶으신가요</p>
                </div>
                <div className="">
                    <p>자연 바람을 만끽하며</p>
                    <p>함께 땀을 흘리고 싶으신가요</p>
                </div>
                <div className="">
                    <p>함께 식사하는</p>
                    <p>행복함을 찾고 싶으신가요</p>
                </div>
                <div className="">
                    <p>우리가 당신의 부족함을 채워드리겠습니다.</p>
                </div>
            </>
        )
    }
}
export default class Index extends Component{ 
    render(){
        return (
            <>
                {TitleBodyLayout(HeadSection, MainSection)}
            </>
        )
    }
}