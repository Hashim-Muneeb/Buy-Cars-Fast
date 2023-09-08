import React from 'react'
import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import {Container ,Row,Col} from 'reactstrap'
import carData from '../assest/data/carData'
import CarItem from '../components/UI/CarItem'


const Home = () => {
  return <Helmet title='Home'>

    <section className="p-0 hero__slider-section">
      <HeroSlider/>
    
      <div className="hero__form">
        <Container>
          <Row className="form__row">
          </Row>
        </Container>
      </div>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
           
            <h2 className="section__title">Choose Your Dream Car</h2>
          </Col>

          {
            carData.slice(0,6).map(item=>(
              <CarItem item={item} ket={item.id}/>
            ))
          }
        </Row>
      </Container>
    </section>


  </Helmet>
}

export default Home
