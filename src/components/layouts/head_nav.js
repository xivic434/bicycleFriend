import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { logo } from "../../assets/images"

export default class HeadNav extends Component {

    handleSearch = (e) =>{
        const {value} = e.target;
        this.setState({
            input:value
        })
    }
    render() {
        return (
            <div className="menubar-main">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="searchtext">
                    <form>
                        <input type="text" name="search" value="" onChange={this.handleSearch}></input>
                    </form>
                </div>
                <div className="menunav">
                    <nav>
                        <Link to="">이벤트</Link>
                        <Link to="">후기작성</Link>
                        <Link to="">모임개설</Link>
                    </nav>
                    <div className="menuicon">
                        <a role="button" >
                            <FontAwesomeIcon icon={faBars} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
