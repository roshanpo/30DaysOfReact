import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [counter, setCounter]= React.useState(0)
    function increment(){
        return setCounter(counter+1)
    }
    function decrement(){
        return setCounter(counter-1)
    }
    return (
        <div className="counter">
            <button onClick={decrement} className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{counter}</h1>
            </div>
            <button onClick={increment} className="counter--plus">+</button>
        </div>
    )
}
