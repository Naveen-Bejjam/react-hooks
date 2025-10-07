import { useContext } from "react";
import { ThemeContext } from "../App";
const UseContextHook = () => {
    const theme = useContext(ThemeContext);
    console.log(theme)
    return (
        <div>
            {theme}
        </div>
    )
}
export default UseContextHook;