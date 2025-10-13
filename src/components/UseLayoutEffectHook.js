import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

function UseLayoutEffectHook() {
    const [ showPopup, setShowPopup] = useState(false);
    const buttonRef = useRef();
    const popupref = useRef();
    useLayoutEffect(()=>{
        if(popupref.current == null || buttonRef.current == null) return;
        const {bottom} = buttonRef.current.getBoundingClientRect();
        console.log(bottom)
        popupref.current.style.top = `${bottom + 100}px`
    }, [showPopup])
  return (
    <div>
        <button ref={buttonRef} onClick={()=>setShowPopup((prev)=>!prev)}>Click Here</button>
        {showPopup &&
            <div style={{position:"absolute"}} ref={popupref}>This is a popup</div>
        }
    </div>
  )
}

export default UseLayoutEffectHook