import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data.js"

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
            // <Hero />
            const pathToImage="./images/"
            const pageData = Data.map(data=> {
                return (<Card img={data.coverImg} rating={data.stats.rating} reviewCount={data.stats.reviewCount} location={data.location} title={data.title}  description={data.description} price= {data.price} />)
            })
    return (
        <div>
            <Navbar />
            {pageData}
        </div>
    )
}