import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export const MotorItem = (props) => {
  const history = useHistory()
  return (
    <>
      <Card style={{ margin: '5px', cursor: 'pointer' }}
        onClick={() => history.push('/detail')}>
        <Card.Img variant="top" src="images/19a9ad20ea6e901fc68c15b36404148a.jpg" />
        <Card.Body style={{ padding: '0px', marginTop: '10px', marginBottom: '10px', marginRight: '5px' }}>
          <Card.Title style={{ margin: '0px', paddingLeft: '5px' }}>Honda Wave Alpha Hàn Quốc</Card.Title>
          <Card.Text style={{ padding: '0px', margin: '0', paddingLeft: '5px' }}>
            2011/ Hàn Quốc</Card.Text>
          <Card.Text style={{ padding: '0px', margin: '0', color: '#E71E26', fontWeight: '700', paddingLeft: '5px' }}>
            5.500.000 VNĐ</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted " style={{ backgroundColor: '#EEEEEE', padding: '0px 5px' }}>2 ngày trước</Card.Footer>
      </Card>
    </>
  )
}