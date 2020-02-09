// 메인 페이지로 미 로그인시에는 intro.js 로 이동시킨다.
// 사용자 기능 및 기본 레이아웃을 호출한다.
import React, {Component} from "react";
import SingleLayout from "../../components/layouts/single_layout";

class Contents extends Component{
    render(){ 
        return (
            <>
                <div > Contents load Success!!</div>
            </>
        )
    }
}
export default class Index extends Component{ 
    render(){
        const contentsWrap = document.getElementById("contents-wrap");
        return (
            <>
                <SingleLayout></SingleLayout>
            </>
        )
    }
}