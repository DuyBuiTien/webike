import React, { useState, useEffect } from 'react';
import { Header } from '../Header/pages/Header'
import { Footer } from '../Footer/Footer';
import { Row, Card, Image, Nav } from 'react-bootstrap';
import { DetailDescription } from './component/DetailDescription';
import { DetailSpecification } from './component/DetailSpecification';

import './index.scss'

export const DetailPage = () => {
  const [selected, setSelected] = useState('home')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Header />
      <Row className="d-flex justify-content-center">
        <Card className="col-10">
          <Card.Header style={{ padding: '0px', margin: '35px 0 0 0', borderBottom: '2px solid #e61e25', fontWeight: '700', fontSize: '20px' }}>
            <div>
              <p>Bán Kawasaki Z800 ABS BSTP</p>
            </div>
          </Card.Header>
          <Card.Body className="d-flex flex-row" style={{ padding: '30px 00px' }}>
            <Image style={{ width: '445px ', height: '334px !important' }} src="/images/23fe90dfb4f0333129fe786448925bf9.jpg"></Image>

            <div style={{ width: '100%', marginLeft: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ color: '#e61e25', fontWeight: 'bold' }}>170.500.000đ</p>

                <a className="btn-border">
                  <i class="far fa-heart" style={{ color: '#e61e25', marginRight: '5px', fontSize: '14px' }}></i>
                  <p className='theodoi'>Theo dõi</p>
                </a>
              </div>
              <div style={{ width: '100%', marginBottom: '10px', backgroundColor: '#f4f4f4', lineHeight: '20px' }}>
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td width={"18%"}>
                        <label>Dòng xe</label>
                      </td>
                      <td width={"30%"}>
                        Kawasaki Z800 ABS 2015
                  </td>
                      <td width={"15%"}>
                        <label>Đã đi</label>
                      </td>
                      <td width={"37%"}>
                        10.000 - 14.999 km
                    </td>
                    </tr>

                    <tr>
                      <td width={"18%"}>
                        <label>Xuất xứ</label>
                      </td>
                      <td width={"30%"}>
                        -
                  </td>
                      <td width={"15%"}>
                        <label>Đời xe</label>
                      </td>
                      <td width={"37%"}>
                        2015
                    </td>
                    </tr>

                    <tr>
                      <td width={"18%"}>
                        <label >Phân khối</label>
                      </td>
                      <td width={"30%"}>
                        800cc
                  </td>
                      <td width={"15%"}>
                        <label >Loại xe</label>
                      </td>
                      <td width={"37%"}>
                        Naked bike
                    </td>
                    </tr>

                    <tr>
                      <td width={"18%"}>
                        <label  >Màu</label>
                      </td>
                      <td width={"30%"}>
                        Đen đậm Xanh lá
                  </td>
                      <td width={"15%"}>
                        <label  >Địa điểm</label>
                      </td>
                      <td width={"37%"}>
                        Quận 8, Hồ Chí Minh
                    </td>
                    </tr>

                    <tr>
                      <td width={"18%"}>
                        <label  >Ngày đăng</label>
                      </td>
                      <td width={"30%"}>
                        14 giờ trước
                  </td>
                    </tr>
                  </tbody>
                </table>

                <div className="customer-back">
                  <p style={{ margin: '0px 0px 5px 10px' }}>Liên hệ mua xe:</p>
                  <div className="customer d-flex flex-row" style={{ margin: '0px 0px 5px 10px' }}>
                    <i class="fas fa-phone-alt customer-info" style={{ color: '#fff', display: 'flex', margin: '0px', justifyContent: 'center', alignItems: 'center' }}>
                      0903271402</i>
                    <div style={{ width: '230px', marginLeft: '10px' }}><p className="note-contact">*Vui lòng cho người bán biết bạn đã tìm thấy xe của họ tại Webike</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Row>

      <Row className="d-flex justify-content-center mt-5">
        <Nav
          className="col-10"
          defaultActiveKey="/home"
        >
          <Nav.Item className="tab-link">
            <Nav.Link eventKey="/home" onSelect={() => setSelected('home')}>MÔ TẢ XE</Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab-link">
            <Nav.Link eventKey="link-1" onSelect={() => setSelected('link-1')}>THÔNG SỐ KỸ THUẬT</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>

      <Row className="d-flex justify-content-center mb-5">
        {(selected === 'home' && <DetailDescription className="col-10" />) ||
          (selected === 'link-1' && <DetailSpecification className="col-10" />)}
      </Row>
      <Footer />
    </>
  )
}