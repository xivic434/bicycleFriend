import React, {Component} from "react";


/**
 * 회원가입 1단계 - 개인정보 취급방침 관련 . 사용자의 승인을 받는다.
 */
export default class ConfirmUserSign extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <>
            <div>Step 1</div>
            <section>
                <dl>
                    <dt>개인정보 취급방침</dt>
                    <dd>우리는 어쩌구저쩌구 다 허용할꺼야</dd>
                </dl>
                <label >
                    허용 한다.
                    <input type="checkbox"></input>
                </label>
            </section>
            </>
        )
    }
}