import { useMemo, useState } from "react"

const UseMemoHook = () => {
    const [ count1, setCount1] = useState(0);
    const [ count2, setCount2] = useState(0);
    const handleIncrementCount1 = () => {
        setCount1(prev=>prev+1);
    }
    const handleIncrementCount2 = () => {
        setCount2(prev=>prev+1);
    }
    const isEven = useMemo(() => {
        console.log("naveen")
        let i= 0;
        while(i<1000000000){
            i++;
        }
        return count1%2 === 0;
    },[count1])
    return (
        <div style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'10px'}}>
            <button onClick={()=>handleIncrementCount1()}>Count1 - {count1}</button>
            {isEven ? "Even" : "Odd"}
            <button onClick={()=>handleIncrementCount2()}>Count2 - {count2}</button>
        </div>
    )
}
export default UseMemoHook;