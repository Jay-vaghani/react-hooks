import React, { useReducer } from "react";

const InitialStage = {
  fName: "",
  lName: "",
};

const reducer = (state, action) => {
  if (action.name === "fname") {
    return { ...state, fName: action.value };
  }
  if (action.name === "lname") {
    return { ...state, lName: action.value };
  }
};

function UseReducerForm() {
  const [state, dispatch] = useReducer(reducer, InitialStage);

  return (
    <div className="container mt-5">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={(e) => dispatch({ name: "fname", value: e.target.value })}
        />
        <label for="floatingInput">First Name</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) => dispatch({ name: "lname", value: e.target.value })}
        />
        <label for="floatingPassword">Last Name</label>
      </div>

      <h1 className="text-center mt-5">First Name: {state.fName}</h1>
      <h1 className="text-center">Last Name: {state.lName}</h1>
    </div>
  );
}

export default UseReducerForm;
