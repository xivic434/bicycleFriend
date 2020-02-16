// 메인 페이지로 미 로그인시에는 intro.js 로 이동시킨다.
// 사용자 기능 및 기본 레이아웃을 호출한다.
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Main from "./main";
import Intro from "./intro";
import UserFind from "../member/userFind"
import UserJoin from "../member/userJoin"

export default class MainRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}/> 
                    <Route path="/intro" component={Intro} /> 
                    <Route path="/main" component={Main} />
                    <Route path="/join" component={UserJoin} /> 
                    <Route path="/userFind" component={UserFind} /> 
                </Switch>
            </Router>
        )
    }
}
