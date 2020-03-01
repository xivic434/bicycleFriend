import React, {Component} from "react";
/*
import JoinStep, {
    RegistUserInfo,
    ConfirmUserSign,
    CompleteJoin
} from "../../components/memberModules/joinSteps";
*/
import JoinStep from "../../components/memberModules/joinSteps";


export default class Join extends Component {
    state = {
        stepNum : 1
    }
    constructor(props){
        super(props);
    }
    
    goSteps = (step = 1 ) => {
        this.setState({
            stepNum: step
        })
    }

    handleNextStep = (step = 1 ) => {
        this.goSteps(step);
    }
    
    handlePrevStep = (step = 1) => {
        this.goSteps(step * -1 );
    }

    componentWillUpdate(){

    }

    render() {
        const stepNum = this.state.stepNum;
        let stepComponent = null ; 
        switch(stepNum){
            case 1 : 
                stepComponent = <JoinStep.ConfirmUserSign />
                break;
            case 2 : 
                stepComponent = <JoinStep.RegistUserInfo/>
                break;
            case 3 : 
                stepComponent = <JoinStep.CompleteJoin/>
                break;
            default : 
                stepComponent = <JoinStep.ConfirmUserSign/>
                break;
        }
        return (
            <>
                <div >
                    <nav>
                        <a href="#" onClick={this.goSteps(1)}>
                            1단계
                        </a>
                        <a href="#" onClick={this.goSteps(2)}>
                            2단계
                        </a>
                        <a href="#" onClick={this.goSteps(3)}>
                            3단계
                        </a>
                    </nav>
                </div>
                {stepComponent}
            </>
        )
    }
}