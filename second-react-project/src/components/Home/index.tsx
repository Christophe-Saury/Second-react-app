import React from 'react'
import '../Home/index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  const nameArray = [
    'a',
    'u',
    'r',
    'y',
    ' ',
    'C',
    'h',
    'r',
    'i',
    's',
    't',
    'o',
    'p',
    'h',
    'e',
  ]
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={'${letterClass} _12'}>i,</span> <br></br> <br></br>
          <span className={'${letterClass} _13'}>I</span> <br></br>{' '}
          <span className={'${letterClass} _14'}>'m</span> <br></br> Hi,{' '}
          <br></br>I'm
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br></br>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
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
