import React, { Component } from "react";

import basicCodes from "../../api/local/basicCodes";

class SnsLoginService extends Component{
    constructor(props){
        super(props);

    }
    isSnsAuthLogin = () => {
        const {link} = this.props;
    }

    render() {
        const {name, code} = this.props
        const itemClass = "btn-snslogin " + code;
        return (
            <li className={itemClass}>
                <button onClick={this.isSnsAuthLogin}>
                    <span className="sp_login kakao">{name}</span>
                </button>
            </li>
        )
    }
}

export default class LoginBox extends Component {
    
    render() {
        const snsServiceList = basicCodes.snsServices;
        return (
            <>
                <form >
                    <div >
                        <label className="hide">아이디</label>
                        <input name="user_name" type="text" placeholder="아이디"></input>
                        <label className="hide" >비밀번호</label>
                        <input name="user_pass" type="password" placeholder="비밀번호"></input>
                        <button type="submit">로그인</button>
                    </div>
                </form>
                <div>
                    <ul className="login_sns_list">
                        {
                            snsServiceList.map((service,i)=>{
                                return (
                                    <SnsLoginService key={i} 
                                        name={service.name} 
                                        link={service.link}
                                        code={service.code} />
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        );
    }
}