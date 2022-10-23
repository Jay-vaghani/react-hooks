import React, { useReducer } from "react";

const initialStage = {
    firstValue: 0,
    secondValue: 10
};

const reducer = (state, action) => {

    // First Value 

    if (action.type === "Increment") {
        return { ...state, firstValue: state.firstValue + action.value };
    }
    if (action.type === "Decrement") {
        return { ...state, firstValue: state.firstValue - action.value };
    }
    if (action.type === "Increment5") {
        return { ...state, firstValue: state.firstValue + action.value };
    }
    if (action.type === "Decrement5") {
        return { ...state, firstValue: state.firstValue - action.value };
    }

    // Second Value 

    if (action.type === "SecondIncrement") {
        return { ...state, secondValue: state.secondValue + action.value };
    }
    if (action.type === "SecondDecrement") {
        return { ...state, secondValue: state.secondValue - action.value };
    }
    if (action.type === "SecondIncrement5") {
        return { ...state, secondValue: state.secondValue + action.value };
    }
    if (action.type === "SecondDecrement5") {
        return { ...state, secondValue: state.secondValue - action.value };
    }
    else {
        return { firstValue: initialStage.firstValue, secondValue: initialStage.secondValue };
    }
};

function UseReducerComplex() {
    const [state, dispatch] = useReducer(reducer, initialStage);

    return (
        <>
            <div>
                <h1>First Value : {state.firstValue}</h1>
                <h1>Second Value : {state.secondValue}</h1>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => dispatch({ type: "Increment", value: 1 })}
                >
                    First Value Increment
                </button>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => dispatch({ type: "Decrement", value: 1 })}
                >
                    First Value Decrement
                </button>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => dispatch({ type: "Increment5", value: 5 })}
                >
                    First Value Increment 5
                </button>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => dispatch({ type: "Decrement5", value: 5 })}
                >
                    First Value Decrement 5
                </button>

            </div>
            <div>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => dispatch({ type: "SecondIncrement", value: 1 })}
                >
                    Second Value Increment
                </button>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => dispatch({ type: "SecondDecrement", value: 1 })}
                >
                    Second Value Decrement
                </button>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => dispatch({ type: "SecondIncrement5", value: 5 })}
                >
                    Second Value Increment 5
                </button>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => dispatch({ type: "SecondDecrement5", value: 5 })}
                >
                    Second Value Decrement 5
                </button>
            </div>
            <button
                className="btn btn-primary m-1"
                onClick={() => dispatch({ type: "reset" })}
            >
                Reset
            </button>
        </>
    );
}

export default UseReducerComplex;
