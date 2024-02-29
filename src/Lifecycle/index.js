import React, {Component} from "react";
import A from "./A/A";
export default class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    componentWillMount(){
        // Component được gọi trước khi render thực thi
        this.state={
            ...this.state,
            counter: 0
        }
        console.log("===Call lần ComponentWillMount 01===")
    }

    componentDidMount(){
        // Được gọi sau khi render chạy xong được thược hiện
        console.log("===Call ComponentDidMount 03===") 
    }

    handleIncrement = () => {
        this.setState({
            ...this.state,
            counter: this.state.counter + 1
        })
    }
    handleDecrement = () => {
        this.setState({
            ...this.state,
            counter: this.state.counter - 1
        })
    }

    render() {
        console.log("===Call Render lần 02===")
        return (
        <div>
            <h2>Counter: {this.state.counter}</h2>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <A counter={this.state.counter}/>
        </div>
        )
    }
}
