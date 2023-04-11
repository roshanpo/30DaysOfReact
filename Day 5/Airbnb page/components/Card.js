import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
    return (
        <div className="card">
            <img className="katie" src="../images/katie-zaferes.png"/>
                <div className="data">
                    <img className="star" src="../images/star.png"/>
                    <p>5.0 (6) . USA</p>
                </div>
            
            <p> Life lessons from Katie Zaferes </p>
            <p className="price"><strong>From $136</strong>/person</p>
        </div>
    )
}