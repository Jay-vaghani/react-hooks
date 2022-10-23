import React, { Component } from "react";

export class CounterWithCondition extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ""
        }
    }

    componentDidMount() {
        document.title = this.state.count
    }

    componentDidUpdate(previousProp, previousState) {
        // console.log(this.state.name);
        // console.log(previousProp);

        console.log(previousState);

        if (previousState.count !== this.state.count) {
            // document.title = this.state.count + 1
            console.log("ok");
        }
        
        document.title = this.state.count

    }

    render() {
        return (
            <>
                <h1>Hello</h1>
                <input type="text" onChange={(e) => { this.setState({ name: e.target.value }) }} />
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>{this.state.count}</button>
            </>
        )
    }
}