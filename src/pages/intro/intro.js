// 메인 페이지로 미 로그인시에는 intro.js 로 이동시킨다.
// 사용자 기능 및 기본 레이아웃을 호출한다.
import React, {Component} from "react";
import SingleLayout from "../../components/layouts/single_layout";
import LoginBox from "../../components/userModules/loginbox"
class Contents extends Component{

    // 회원가입.
    handleClickJoin = (e) => {
        e.preventDefault();
    }
    // 회원가입.
    handleClickFindPw = (e) => {
        e.preventDefault();

    }

    render(){ 
        return (
            <>
                <div className="bg-intro">draw bg</div>
                <div >
                    <LoginBox></LoginBox>
                    <div>
                        <button type="button" onClick={this.handleClickJoin}>회원가입</button>
                        <button type="button" onClick={this.handleClickFindPw}>비밀번호찾기</button>
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