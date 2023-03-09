import React from 'react'

const About = () => {
  return (
    <section className='about-section'>
      <div className='wrap-title'>
        <h2>About</h2>
        <p className='content-Subtitle'>I am a hacker</p>
        <img src={require("../img/laugh.gif")} alt="laughing" className='img-haker' />
      </div>
    </section>
  )
}

export default About