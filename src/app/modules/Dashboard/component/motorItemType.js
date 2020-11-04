import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

export const MotorItemType = (props) => {
  return (
    <>
      <Card style={{ margin: '5px' }}>
        <Card.Img variant="top" src="images/364_airblade-110.jpg"/>
        <Card.Body style={{ padding: '0px' }}>
          <Card.Title style={{ margin: '0px' }}>{props.name !== undefined ? 'adsf' : 'Honda Sh 150i'}</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}