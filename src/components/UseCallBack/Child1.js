import React from "react";
const Child1 = ({value,incrementAge,children}) => {
    console.log("child1 called")
    return(
        <button onClick={incrementAge}>{children}-{value}</button>
    )
}
export default React.memo(Child1);