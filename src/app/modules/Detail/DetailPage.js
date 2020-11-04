import React from 'react';
import { HeaderPage } from '../Header/pages/HeaderPage'
import { Footer } from '../Footer/Footer';
import { Row, Card, Image } from 'react-bootstrap';

export const DetailPage = () => {
  return (
    <>
      <HeaderPage />
      <Row className="col-10">
        <Card>
          <Card.Header>
            <div>
              <p>Bán Kawasaki Z800 ABS BSTP</p>
            </div>
          </Card.Header>
          <Card.Body>
          <Image src="/images/23fe90dfb4f0333129fe786448925bf9.jpg"></Image>
          <div>

          </div>
          </Card.Body>
        </Card>
      </Row>
      <Footer />
    </>
  )
}