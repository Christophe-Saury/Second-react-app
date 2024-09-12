import React from 'react'
import '../Home/index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br></br>I'm
          <img src={LogoTitle} alt="developer" />
          Lobodan
          <br></br>
          web developer
        </h1>
        <h2>Frontend developer / Javascript developer</h2>
        <Link to="/contact" className="flat-button">
          Contact me
        </Link>
      </div>
    </div>
  )
}

export default Home
