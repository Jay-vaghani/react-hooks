import React, { Component } from "react"

export class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    CounterFun = () => {

        // this.setState( {
        //     count: this.state.count + 1
        // })

        this.setState((previous) => {
            return {
                count: previous.count + 1
            }
        })
    }

    render() {
        return (
            <>
                <button onClick={this.CounterFun}>Count {this.state.count}</button>
            </>
        )
    }
}
