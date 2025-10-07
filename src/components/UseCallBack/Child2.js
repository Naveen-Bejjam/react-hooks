import React from "react";
const Child2 = ({value,incrementSalary,children}) => {
    console.log("child2 called")
    return(
        <button onClick={incrementSalary}>{children}-{value}</button>
    )
}
export default React.memo(Child2);