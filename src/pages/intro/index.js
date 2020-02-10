// 메인 페이지로 미 로그인시에는 intro.js 로 이동시킨다.
// 사용자 기능 및 기본 레이아웃을 호출한다.
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Main from "./main";
import Intro from "./intro";


export default class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" > 
                        <Redirect from='/' to='/main' />
                    </Route>
                    <Route path="/intro" > 
                        <Intro></Intro>
                    </Route>
                    <Route  path="/main" > 
                        <Main></Main>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
