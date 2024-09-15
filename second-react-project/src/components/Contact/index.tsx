import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (refForm.current) {
      emailjs
        .sendForm(
          'service_oqjjm1c',
          'template_dnrfddn',
          refForm.current,
          '2Vut_z2Spxgm6tpkQ'
        )
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload() // check if i need this
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    } else {
      console.error('Form ref is null')
    }
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>Feel Free to contact me, i am open to new opportunities.</p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                  <input
                    type="text"
                    name="to_name"
                    value={'Christophe Saury'}
                    placeholder="Subject"
                    hidden={true}
                    required
                    readOnly={true}
                  />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Christophe SAURY,
          <br />
          FRANCE
          <br />
          1 rue Rene Jacques 92130 <br />
          Issy les Moulineaux <br />
          <span>christophesaury23@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[48.839, 2.379]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[48.839, 2.379]}>
              <Popup>Christophe lives here ...</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" active={true} />
    </>
  )
}

export default Contact
