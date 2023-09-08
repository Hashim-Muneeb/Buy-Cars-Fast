import React from 'react'
import {Container,Row} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CarItem from '../components/UI/CarItem'
import carData from  '../assest/data/carData' 
import CommonSection from '../components/UI/CommonSection'




const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Car-Listing"></CommonSection>
    <section>
      <Container>
        <Row>
          {
            carData.map((item) =>(
              <CarItem item ={item} key={item.id}
               />
            ))
          }
        </Row>
      </Container>
    </section>

    </Helmet>
  )
}

export default CarListing
