import React from "react"

export default function App() {
    const [formData, setFormData] = React.useState({
        "email" : "",
        "password" : "",
        "confirmPassword" : "",
        "wannaJoin" : true
    })
    
    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value})
            
    }
    
    
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password===formData.confirmPassword){
                console.log("passwords match")
            }
            else{
                console.log("Passwords did not match")
                return
            }
        if(formData.wannaJoin===true){
            console.log("Thank you for joining our newsletter")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="wannaJoin"
                        //onChange={handleChange}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
