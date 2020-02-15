// 메인 페이지로 미 로그인시에는 intro.js 로 이동시킨다.
// 사용자 기능 및 기본 레이아웃을 호출한다.
import React, {Component} from "react";
import { Link } from 'react-router-dom';
import SingleLayout from "../../components/layouts/single_layout";
import LoginBox from "../../components/userModules/loginbox";

import "../../common.css";
class Contents extends Component{
    constructor(props){
        super(props)
    }
    // 회원가입.
    handleClickJoin = (e) => {
        e.preventDefault();
    }
    // 회원가입.
    handleClickFindPw = (e) => {
        e.preventDefault();

    }

    getBgClassName = (theme) =>{
        let className;
        switch(theme){
            default: className = "intro-bg"; 
        }
        return className;
    }

    render(){ 
        const { theme } = this.props;
        return (
            <>
                <div className={this.getBgClassName(theme)}></div>
                <div className="fixed-login-box">
                    <LoginBox></LoginBox>
                    <div>
                        <Link to="">회원가입</Link>
                        <Link to="">비밀번호찾기</Link>
                    </div>
                </div>
            </>
        )
    }
}
export default class Index extends Component{ 
    render(){
        return (
            <>
                {SingleLayout(Contents)}
            </>
        )
    }
}