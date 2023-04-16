import React from "react"

export default function Meme(){
    return(
        <div className="body">
            <form className="form" method="GET">
                <input type="text"/>
                <input type="text"/>
                <button className="button" type="submit">Get a new meme image</button>
            </form>
        </div>
    )
}