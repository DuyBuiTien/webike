import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

export const ItemType = (props) => {
  return (
    <>
      <Card style={{ margin: '5px' }}>
        <Card.Img variant="top" src="images/honda.jpg" />
        <Card.Body style={{ padding: '0px' }}>
         <Button>Honda</Button>
        </Card.Body>
      </Card>
    </>
  )
}