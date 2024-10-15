import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVideo} from '@fortawesome/free-solid-svg-icons'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <Navbar className="bg-body-transparent">
        <Container>
         <Link to={"/"} style={{textDecoration:"none"}}>
            <Navbar.Brand className='text-warning fs-3'>
            <FontAwesomeIcon icon={faVideo} beat style={{color: "#eeeff2",}} />{' '}
              React Bootstrap
            </Navbar.Brand>
         </Link>
        </Container>
      </Navbar></>
  )
}

export default Header