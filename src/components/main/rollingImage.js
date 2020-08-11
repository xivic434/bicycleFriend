import React, { Component } from "react";

export default class RollingImage extends Component{

    constructor(props){
        super(props);
    }

    render() {
        const rolling = this.props.images;
        return (
            <>
                <div className="container">
                    {rolling.map(src=>(
                        <div key={src}
                            className="card"
                            style={{
                                backgroundImage: `url(${src})`
                            }}
                        />
                    ))}
                </div>
            </>
        )
    }
}
