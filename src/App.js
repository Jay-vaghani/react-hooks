import React from 'react';
// import {useReducer} from 'react';
// import {useContext} from 'react';
import './App.css';
import DocTitleOne from './components/Custom Hooks/titleHook/docTitleOne';
import DocTitleTwo from './components/Custom Hooks/titleHook/docTitleTwo';



// (*) Advance Javascript 

// import Advancejs from './components/advance javascript/advancejs(1)';


// (1) Use State 

// import { Counter } from './components/useState/ClassUseState'; // Class Base Use State
// import FunctionUseState from './components/useState/FunctionUseState'; // useState in Function
// import FunctionUseStateWithPreviousState from './components/useState/FunctionUseStateWithPreviousState'; // useState with previous state
// import FunctionUseStateWithObject from './components/useState/FunctionUseStateWithObject'; // useState with Object
// import FunctionUseStateWithArray from './components/useState/FunctionUseStateWithArray';

// (2) Use Effect 

// import { Counter } from './components/useEffect/useEffectInClass';
// import UseEffectInFunction from './components/useEffect/useEffectInFunction';
// import { CounterWithCondition } from './components/useEffect/useEffectWithConditionInClass';
// import UseEffectWithConditionInFunction from './components/useEffect/useEffectWithConditionInFunction';
// import UseEffectRunOnesInFunction from './components/useEffect/useEffectRunOnesInFunction';
// import UseEffectinCleanupComponent from './components/useEffect/useEffectinCleanupComponent';
// import UseEffectToFetchData from './components/useEffect/useEffectToFetchData';



// (3) Use Context 

// import ComponentA from './components/useContext/ComponentA';
// import ComponentB from './components/useContext/ComponentB';
// import ComponentC from './components/useContext/ComponentC';
// import ComponentD from './components/useContext/ComponentD';

// export const UserContext = React.createContext()
// export const ChanelContext = React.createContext()

// (4) Use Reducer 
// import UseReducer from './components/useReducer/useReducerSimple';
// import UseReducerComplex from './components/useReducer/useReducerComplex';
// import UseReducerForm from './components/useReducer/useReducerForm';

//  ************************** useReducer Width useContext **************************  

// import ComponentA from './components/useReducer/ComponentA';
// import ComponentC from './components/useReducer/ComponentC';
// import ComponentE from './components/useReducer/ComponentE';

// export const CountText = React.createContext()

// const initialStage = 0

// const reducer = (state, action) => {
//   if (action === 'increment') {
//     return state + 1
//   } else if (action === 'decrement') {
//     return state - 1
//   } else if (action === 'reset') {
//     return initialStage
//   } else {
//     return initialStage
//   }
// }


//  ************************** useReducer Width useEffect to fetch data **************************  


// import UseReducerToFetchData from './components/useReducer/useReducerToFetchData';



// (5) Use Callback 


// import ParentComponent from './components/useCallback/parentComponent';


// (6) Use Memo 


// import UseMemo from './components/useMemo/usememo';


// (7) Use Ref 


// import UseRefOne from './components/useRef/useRefOne';
// import UseRefTwo from './components/useRef/useRefTwo';



function App() {

  // const [count, dispatch] = useReducer(reducer, initialStage)


  return (
    <div className="App">


      {/* ******************************* Advance Javascript *******************************  */}


      {/* <Advancejs /> */}

      {/* ******************************* Use State ******************************* */}

      {/* <Counter /> */}
      {/* <FunctionUseState /> */}
      {/* <FunctionUseStateWithPreviousState /> */}
      {/* <FunctionUseStateWithObject /> */}
      {/* <FunctionUseStateWithArray /> */}
      {/* <Counter /> */}

      {/* ******************************* Use Effect ******************************* */}

      {/* <UseEffectInFunction /> */}
      {/* <CounterWithCondition /> */}
      {/* <UseEffectWithConditionInFunction /> */}
      {/* <UseEffectRunOnesInFunction /> */}
      {/* <UseEffectinCleanupComponent /> */}
      {/* <UseEffectToFetchData /> */}

      {/* ******************************* Use Context ******************************* */}

      {/* <UserContext.Provider value={'Jay Vaghani'}>
        <ComponentA />

        <ChanelContext.Provider value={'Hello'}>
          <ComponentB />
          <ComponentC />

        </ChanelContext.Provider>

      </UserContext.Provider> */}


      {/* ****************************** Use Reducer ****************************** */}


      {/* <UseReducer /> */}
      {/* <UseReducerComplex /> */}
      {/* <UseReducerForm /> */}


      {/* *************** useReducer Width useContext *************** */}

      {/* <CountText.Provider value={{ CountState: count, CountDispatch: dispatch }} >
        <h1>{count}</h1>
        <ComponentA />
        <ComponentC />
        <ComponentE />
      </CountText.Provider> */}

      {/* *************** useReducer Width useEffect *************** */}
      {/* <UseReducerToFetchData /> */}



      {/* ****************************** Use Callback ****************************** */}

      {/* <ParentComponent /> */}


      {/* ****************************** Use Callback ****************************** */}


      {/* <UseMemo /> */}


      {/* ****************************** Use Ref ****************************** */}

      {/* <UseRefOne /> */}
      {/* <UseRefTwo /> */}


      <DocTitleOne />
      <DocTitleTwo />

    </div>
  );
}

export default App;
