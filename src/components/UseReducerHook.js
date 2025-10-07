import { useReducer } from "react";

const initialState = {
    count : 0
}
const reducer = (state, action) => {
    switch(action){
        case "increment" : return {...state, count : state.count + 1};
        case "decrement" : return {...state, count : state.count - 1};
        case "reset" : return initialState
        default : return state;
    }
}
const UseReducerHook = () => {
    const [newState, dispatch] = useReducer(reducer,initialState)
    return(
        <div>
            <div>Count - {newState.count}</div>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}
export default UseReducerHook;