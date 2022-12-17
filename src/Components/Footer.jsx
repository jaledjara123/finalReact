import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faWhatsapp, faTiktok} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
        
        <p className='redlineFooter'></p>
        <div className='flexFooter'>
          <article className='dhFooter'>
            <img src="./images/DH.png" alt="imgDH" />
          </article>
          
          <article className='redesFooter'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faTiktok}/>
          </article>
        </div>

    </footer>
  )
}

export default Footer
