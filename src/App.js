import logo from './logo.svg';
import './App.css';
import UseMemoHook from './components/UseMemoHook';
import ParentComponent from './components/UseCallBack/ParentComponent';
import UseReducerHook from './components/UseReducerHook';
import { createContext, useEffect, useState } from 'react';
import UseContextHook from './components/UseContextHook';
import UseTransitionHook from './components/UseTransitionHook';

export const ThemeContext = createContext(null);
function App() {
  // const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   setInterval(()=>{
  //     setCount(prev=>prev+1)
  //   },1000)
  // },[])
  return (
    // <ThemeContext.Provider value={count}>
    <div className="App">
      {/* <UseMemoHook/> */}
      {/* <ParentComponent/> */}
      {/* <UseContextHook /> */}
      {/* <UseReducerHook/> */}
      {/* <UseTransitionHook/> */}
    </div>
    // </ThemeContext.Provider>
  );
}

export default App;
