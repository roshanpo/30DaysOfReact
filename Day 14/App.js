import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState([])
    
    return (
        <div>
            {messages.length===0 ? <h1>You're all caught up </h1> : <h1>You have {messages.length} unread {messages.length>1 ? "Messages" : "Message"}!</h1> }
        </div>
    )
}
