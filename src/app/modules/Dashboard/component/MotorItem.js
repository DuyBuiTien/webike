import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

export const MotorItem = (props) => {
  return (
    <>
      <Card style={{margin: '5px'}}>
        <Card.Img variant="top" src="images/19a9ad20ea6e901fc68c15b36404148a.jpg" />
        <Card.Body style={{ padding: '0px' }}>
          <Card.Title style={{ margin: '0px' }}>{props.name!==undefined?'adsf':'Honda Wave Alpha Hàn Quốc'}</Card.Title>
          <Card.Text style={{ padding: '0px', margin: '0' }}>
            2011/ Hàn Quốc</Card.Text>
          <Card.Text style={{ padding: '0px', margin: '0' }}>
            5.500.000 VNĐ</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted p-0" style={{ backgroundColor: '#EEEEEE'}}>2 days ago</Card.Footer>
      </Card>
    </>
  )
}