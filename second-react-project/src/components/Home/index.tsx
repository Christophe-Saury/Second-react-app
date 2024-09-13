import React, { useEffect } from 'react'
import '../Home/index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={'${letterClass} _12'}>i, </span>
            <br />
            <span className={'${letterClass} _13'}>I</span>{' '}
            <span className={'${letterClass} _14'}>'m </span>
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
        <Logo />
      </div>
      <Loader type="pacman" active={true} />
    </>
  )
}

export default Home
