import { useCallback, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const ParentComponent = () => {
    const [age, incrementAge] = useState(0);
    const [salary, incrementSalary] = useState(1000);
    const handleIncrementAge = useCallback(() => {
        incrementAge((prev)=>prev+1)
    },[age])
    
    const handleIncrementSalary = useCallback(() => {
        incrementSalary((prev)=>prev+1000)
    },[salary])
    console.log("parent rendered")
    return(
        <div style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'10px'}}>
            <Child1 value={age} incrementAge={handleIncrementAge}>increment Age</Child1>
            <Child2 value={salary} incrementSalary={handleIncrementSalary}>increment Salary</Child2>
        </div>
    )
}
export default ParentComponent;