import React, { Component } from "react";


export class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = "Click " + this.state.count
    }

    componentDidUpdate() {
        document.title = "Click " + this.state.count
    }

    render() {
        return (
            <>
                <h1>Counter</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click {this.state.count}</button>
            </>
        )
    }
}