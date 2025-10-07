import { useEffect, useState, useTransition } from "react";

const UseTransitionHook = () => {
    const [inputValue, setInput] = useState('');
    const [list, setList] = useState([]);
    const [isPending, startTransition] = useTransition();

    const handleChange = (value) => {
        setInput(value);
        let list1 =[];
        startTransition(()=>{
            for(let i=0;i<20000;i++){
                list1.push(inputValue);
            }
            setList(list1)
        })
    }
    return (
        <div>
            <input onChange={(e)=>handleChange(e.target.value)} value={inputValue}></input>
            {isPending ? <div>Pending</div> : list.map((item,index)=><div key={index}>{item}</div>)}
        </div>
    )
}
export default UseTransitionHook;