import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a"])
    
    const noOfMessages = messages.length
    return (
        <div>
            {noOfMessages > 0 && <h1>You have {noOfMessages} unread messages!</h1>}
        </div>
    )
}
