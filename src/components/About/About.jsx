import './index.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters.jsx'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hey there! I'm a passionate self-taught junior frontend developer on
            a perpetual quest for knowledge. My coding journey began as a solo
            adventure, and now I'm weaving through the digital landscape,
            crafting seamless and visually appealing user experiences.
          </p>
          <p>
            Eager to embrace the ever-evolving tech realm, I thrive on
            challenges and believe that continuous learning is the key to
            unlocking endless possibilities in the world of web development.
          </p>
          <p>
            Whether I'm deciphering complex code or diving into the latest
            frameworks, you can find me fueled by curiosity and a genuine love
            for turning lines of code into captivating digital experiences.
          </p>
        </div>

        <div className="stage-cub-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
