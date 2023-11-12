import React from 'react'
import "./About.css"
import aboutImageA from "../../../assets/Mario and Adrian A.jpg"
import aboutImageB from "../../../assets/restaurant chef B.jpg"

const About = () => {
  return (
    <section className='section'>
      <div className='container grid-container about'>
        <div className='aboutTextBox'>
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
            <p>
              We are a family owned Mediterranean restaurant,
              focused on traditional recipes served with a modern twist.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            In, molestias vel. Eius sed illo quod saepe minus dolore, similique soluta quia eligendi atque dolores incidunt deserunt.
            Ipsum vitae impedit tenetur!
            </p>
        </div>
        <div className='aboutImageBox'>
            <img className='aboutImages aboutImageA' src={aboutImageA} alt="error" />
            <img className='aboutImages aboutImageB' src={aboutImageB} alt="error" />
        </div>
      </div>
    </section>
  )
}

export default About