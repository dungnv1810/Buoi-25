import React, { Component } from 'react'

export default class A extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    
    render() {
        console.log("counter===", this.props)
        const {counter} = this.props
        return (
        <div>
            <h2>A Counter: {counter}</h2>
        </div>
        )
    }
}
