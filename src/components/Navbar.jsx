import React, { useState } from 'react'

function ConditionalRendering() {
    const [isShow, setIsShow] = useState(false);

    const show = () => {
        setIsShow(!isShow)
    }

  return (

    // ---------------------------- This is Style Render -----------------------------------
    // <div>
    //     <p>To see infomation Please click on the show button</p>
    //     <button onClick={show}>{!isShow ? "Show" : "Hide"}</button>
    // <p style={!isShow ? {display:"none"} : {display:"block"}}>This is showing because you clicked on show button</p>
    // </div>


    // ---------------------------- This is Conditional Rendering -----------------------------------
    <div>
        <p>To see infomation Please click on the show button</p>
        <button onClick={show}>{!isShow ? "Show" : "Hide"}</button>
   {isShow ?  <p >This is showing because you clicked on show button</p> : null}
    </div>
    
  )
}

export default ConditionalRendering
