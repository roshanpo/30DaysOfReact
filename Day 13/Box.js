import React from "react"


export default function Box(props) {
   
    const [color, setcolor] = React.useState(props.on)
    
    function changeColor(){
        setcolor(prevColor => !prevColor)
        
    }
    
    
    const styles = {
        backgroundColor: color ? "#222222" : "transparent"
    }
    
    return (
        <div style={styles} className="box" onClick={changeColor}></div>
    )
}