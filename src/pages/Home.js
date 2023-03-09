import React from 'react'

const Home = () => {
  return (
    <>
      <section className='nav-background'>
        <div className='nav-container'>
          <p className='dling'>Dling's Portfolio</p>
          <p className='font-title'>Welcome to my <span className="purple"> Portfolio</span> </p>
          <p className='dling'>Fronted Dev</p>
        </div>
      </section>

      <section className='second-home'>
        <div className='wrap-title'>
          <h1>About My Self</h1>
          <p className='content-Subtitle'>introduction</p>
        </div>
        <div className='container-grid'>
          <img src={require("../img/1.jpg")} alt="haker" />
            <div>
              <p className='position-content'>I am person with goals and dreams, I admire every lasting experiences. The reality that can't be change, A reality that every person fear. Lmao I don't have words to say xD</p>
              <div class="about-info">
                  <div>
                      <span class="about-info-title">18+</span>
                      <span class="about-info-name">Year <br/> experience</span>
                  </div>
                  <div>
                      <span class="about-info-title">200+</span>
                      <span class="about-info-name">Hacking <br/> Tools</span>
                  </div>
                  <div>
                      <span class="about-info-title">69+</span>
                      <span class="about-info-name">Companies <br/> hacked</span>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home