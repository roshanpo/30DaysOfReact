import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode]= React.useState(false)
    function changeLight(currentLight){
        setDarkMode(currentLight=>!currentLight)
    }
    return (
        <div className="container">
            <Navbar darkMode = {darkMode} toggleDarkMode={changeLight}/>
            <Main darkMode = {darkMode} toggleDarkMode={changeLight}/>
        </div>
    )
}