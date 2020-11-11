import React, { useState, useEffect } from 'react';
import { Header } from '../Header/pages/Header'
import { Footer } from '../Footer/Footer';
import { Button, Card, Image, Table, InputGroup, FormControl } from 'react-bootstrap';

export const CartPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div style={{ background: '#E0E0E0' }}>
      <Header />
      <div className="d-flex flex-row">
        <div style={{ background: '#fff', margin: '5rem 2rem', borderRadius: '5px', width: '70%' }}>
          <div className="d-flex flex-row"><h2 style={{ fontSize: '20px', margin: '1rem', float: 'left', marginLeft: '20px', fontWeight: '700' }}>Giỏ hàng của tôi</h2>
            <span style={{ margin: '1rem', marginLeft: '10px' }}>(1 sản phẩm)</span></div>
          <div className="d-flex flex-row m-1">
            <Table striped bordered hover style={{ marginRight: '1rem' }}>
              <thead style={{ background: '#f2f2f2' }}>
                <tr>
                  <th style={{ width: '60%', marginRight: '1rem' }}>Chi tiết mặt hàng</th>
                  <th style={{ width: '15%' }}>Giá</th>
                  <th style={{ width: '10%' }}>Số lượng</th>
                  <th style={{ width: '15%' }}>Tổng cộng</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#fff' }}>
                  <td className="d-flex flex-row">
                    <div style={{ width: '150px', display: 'flex', marginRight: '1rem', flexDirection: 'column' }}>
                      <a style={{ border: '1px solid #CCC ', width: '130px', height: '150px' }} className="d-flex align-items-center">
                        <Image
                          style={{ width: '130px', height: '130px' }}
                          src="/images/23fe90dfb4f0333129fe786448925bf9.jpg"></Image>
                      </a>
                      <span style={{ marginTop: '5px', color: '#999999', fontWeight: 'bold', textAlign: 'center' }}>Mã sản phẩm: MKSKU-0364</span>
                    </div>

                    <div>
                      <h2 style={{ marginTop: '20px', color: '#e61e25', fontSize: '13px', fontWeight: '700', fontFamily: 'Roboto, Helvetica, Arial, sans-serif !important' }}>
                        Evotech Performance : Stand Hook</h2>
                      <div>
                        <Button variant="link" style={{ color: '#0160ad', padding: '0', marginTop: '10px' }}>Xóa</Button>
                      </div>
                    </div>
                  </td>
                  <td>27.000.000 (VND)</td>
                  <td>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </td>
                  <td>27.000.000</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div style={{ margin: '5rem 2rem', width: '30%' }}>
          <Card style={{margin: '5px', padding: '0px'}}>
            <Card.Body style={{padding: '5px', paddingLeft: '10px', paddingTop: '10px'}}>
              <Card.Title style={{marginBottom: '10px'}}>Thành tiền</Card.Title>
              <Card.Text>27.000.000 VND</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{margin: '5px', padding: '0px'}}>
            <Card.Body style={{padding: '5px', paddingLeft: '10px', paddingTop: '10px'}}>
              <Card.Title style={{marginBottom: '10px'}}>Phí vận chuyển</Card.Title>
              <Card.Text>30.000 VND</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{margin: '5px', padding: '0px'}}>
            <Card.Body style={{padding: '5px', paddingLeft: '10px', paddingTop: '10px'}}>
              <Card.Title style={{marginBottom: '10px'}}>Địa chỉ nhận hàng</Card.Title>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Nhập địa chỉ"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>

            </Card.Body>
          </Card>
          <Card style={{margin: '5px', padding: '0px'}}>
            <Card.Body style={{padding: '5px', paddingLeft: '10px', paddingTop: '10px'}}>
              <Card.Title style={{marginBottom: '10px'}}>Thành tiền</Card.Title>
              <Card.Text>27.030.000 VND</Card.Text>
            </Card.Body>
          </Card>
          <Button variant="danger">Thanh toán</Button>
        </div>
      </div>

      <Footer />
    </div >
  )
}