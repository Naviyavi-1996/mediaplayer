import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
        <Row className='mt-5 d-flex justify-content-center align-items-center'>
          <Col md={6}>
            <h2 className='mt-md-5'>Welcome to <span className='text-warning'>Media Player</span></h2>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab cupiditate quibusdam corrupti blanditiis maxime adipisci delectus culpa deserunt amet, sit nobis voluptate molestias ad perspiciatis distinctio natus accusantium? Ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident ipsam cupiditate eveniet maxime obcaecati, voluptatem tenetur odit optio repellat ab reiciendis in delectus, neque laboriosam possimus sunt inventore distinctio!</p>
            <Link to={"/Home"}><button className='btn btn-warning mt-5'>Get Started</button></Link>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-75' /></Col>
        </Row>
      </Container>
      <Container className='mt-5'>
        <h1 className='text-center'>Features</h1>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row className='mt-5 d-flex justify-content-center align-items-center'>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }}className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/3e/fe/1c/3efe1cb845954233246f60d5d8395dd0.gif" height={'300px'} width={'100%'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }}className='p-3'>
                  <Card.Img variant="top" src="https://media.tenor.com/b8o4QL3NxV4AAAAC/sound-wave-waves.gif"height={'300px'} width={'100%'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }}className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/95/a1/cc/95a1cc12bd2f0d180312f9c347eef010.gif" height={'300px'} width={'100%'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
      
      <div className="container">
        <div className="row p-5">
         <div className='col border border-secondary border-2 rounded p-5'>
            <div className='row'>
              <div className="col-md-6">
                <h2 className='text-warning'>Simple fast and Powerful</h2>
                <p className='mt-2'><span className='fs-4'>Play Everthing : </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem commodi, ipsum quod eum quos odit ipsam pariatur consequatur labore itaque ratione id amet. Incidunt praesentium ab rem. Cupiditate, laborum rem!</p>
                <p className='mt-2'><span className='fs-4'>Play Everthing : </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem commodi, ipsum quod eum quos odit ipsam pariatur consequatur labore itaque ratione id amet. Incidunt praesentium ab rem. Cupiditate, laborum rem!</p>
                <p className='mt-2'><span className='fs-4'>Play Everthing : </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem commodi, ipsum quod eum quos odit ipsam pariatur consequatur labore itaque ratione id amet. Incidunt praesentium ab rem. Cupiditate, laborum rem!</p>
              </div>
              <div className="col-md-6">
              <iframe width="100%" height="414" src="https://www.youtube.com/embed/B2UBMTA57JI" title="Kiliye (Malayalam) |ARM | Tovino Thomas |Krithi Shetty |Jithin Laal |Dhibu Ninan Thomas|Magic Frames" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Landing