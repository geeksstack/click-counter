import { Component } from "react";

export default class CounterClass extends Component{
    constructor(){
        super()
        this.state={
            count: 0,
        }
    }

    clickCounter(){
        this.setState({
            count: this.state.count+1
        });
    }
    render(){
        return(
            <div>
                <h2>Counter using Class Component</h2>
                <h3>{this.state.count}</h3>
                <button type="button" className='btnClick' onClick={(e)=>this.clickCounter(e)}>Counter</button>
            </div>
        );
    }
}