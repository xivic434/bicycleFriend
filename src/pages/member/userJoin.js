import React, {Component} from "react"

class ConfirmUserSign extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>Step 1</div>
        )
    }
}

class RegistUserInfo extends Component {
    constructor(props){
        super(props);
    }

    render () { 
        return (
            <div>Step 2 </div>
        )
    }
}

class CompleteJoin extends Component {
    constructor(props){
        super(props);
    }
    render () { 
        return (
            <div>Step 3 </div>
        )
    }
}


export default class Join extends Component {
    state = {
        joinStep : 1
    }
    constructor(props){
        super(props);
    }
    
    handleNextStep = () => {
        this.setState({
            joinStep:  this.state.joinStep + 1
        })
    }

    componentWillUpdate(){

    }

    render() {
        const stepNum = this.state.joinStep;
        switch(stepNum){
            case 1 : 
                return <ConfirmUserSign />
            case 2 : 
                return <RegistUserInfo/>
            case 3 : 
                return <CompleteJoin/>
            default : 
                return <ConfirmUserSign/>
        }
    }
}