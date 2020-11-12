import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';


export const ItemType = (props) => {
  const history = useHistory()
  return (
    <a
      style={{ padding: '4px 8px 8px', display: 'block', borderRadius: '12px', textAlign: 'center', height: '130px' }} 
      className="div-item-para">
      <figure style={{ width: '90px', height: '90px', margin: '0px auto' }}>
        <img src={`images/${props.img}`} style={{ width: '100%', height: '100%', objectFit: 'scale-down' }}></img>
        <p style={{ borderRadius: '25px', border: '1px solid #d6d6d6', fontSize: '0.75rem', lineHeight: '23px' }} className="item-para">
          {props.name}</p>
      </figure>
    </a>
  )
}