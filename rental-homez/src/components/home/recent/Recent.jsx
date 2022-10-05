import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

function  Recent () {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Currently available and listed for viewing and renting.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
