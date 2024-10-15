import { text } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className='container-fluid p-3'>
        <div className='row'>
          <div className='col-md-4'>
            <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} className='me-2' />Media Player</h4>
            <p style={{textAlign:'justify'}}className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corporis eos, nostrum nihil suscipit sapiente quos dolorem provident. Blanditiis et totam, quisquam ducimus impedit doloremque temporibus cum? Error, nam tenetur?</p>
          </div>
          <div className='col-md-2 d-md-flex justify-content-center'>
            <div>
              <h4>Links</h4>
              <Link to={"/"}><p className='mt-4'>Landing Page</p></Link>
              <Link to={"/Home"}><p>Home page</p></Link>
              <Link to={"/Watchhistory"}><p>Watch History</p></Link>
            </div>
          </div>
          <div className='col-md-2 d-md-flex justify-content-center'>
          <div>
              <h4>Guides</h4>
              <p className='mt-4'>React</p>
              <p>React Bootstrap</p>
              <p>Bootswatch</p>
            </div>
          </div>
          <div className='col-md-4 px-md-5'>
            <h4>Contact Us</h4>
            <div className='d-flex mt-4'>
              <input type="text" placeholder='E-mail id' className='form-control'/>
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-between mt-4'>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer