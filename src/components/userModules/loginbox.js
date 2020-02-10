import React, { Component } from "react";

export default class LoginBox extends Component {
    render() {
        return (
            <>
                <div >
                    <label >
                        <input name="user_name" type="text" placeholder="아이디"></input>
                    </label>
                    <label >
                        <input name="user_pass" type="password" placeholder="비밀번호"></input>
                    </label>
                </div>
                <div>
                    <ul>
                        <li><img src="#" alt="kakao login"></img></li>
                        <li><img src="#" alt="google login"></img></li>
                        <li><img src="#" alt="naver login"></img></li>
                    </ul>
                </div>
            </>
        );
    }
}