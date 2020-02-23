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
            case 2 : 
                stepComponent = <JoinStep.RegistUserInfo/>
            case 3 : 
                stepComponent = <JoinStep.CompleteJoin/>
            default : 
                stepComponent = <JoinStep.ConfirmUserSign/>
        }
        return (
            <>
                <div >
                    <nav>
                        <a href="#" onClick={this.goSteps(1)}></a>
                        <a href="#" onClick={this.goSteps(2)}></a>
                        <a href="#" onClick={this.goSteps(3)}></a>
                    </nav>
                </div>
                {stepComponent}
            </>
        )
    }
}