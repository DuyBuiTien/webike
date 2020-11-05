import React, { useEffect, useState } from 'react';
import { Row, Col, Carousel, Button, Accordion } from 'react-bootstrap';
import { AutoComplete, Input } from 'antd';
import { ShoppingCartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';

const { Option } = AutoComplete;
const { Search } = Input;

export function Header() {
  const history = useHistory();
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 100) {
      setSticky(true)
    }
    else {
      setSticky(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [isSticky]);
  return (
    <>
      <header className={`row mx-0 fixed-top ${isSticky ? 'fixed' : ''}`}>
        <nav class="container px-0 navbar-light navbar navbar-expand-lg">
          <Row style={{ width: '100%' }}>
            <Col lg={3} md={3} sm={3} xl={3} xs={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a class="navbar-brand" onClick={() => history.push('/')}>
                <img src="images/logo.png" alt="Tripbricks" class="img-fluid head-logo" style={{ fontSize: '0.87rem', width: '15rem', height: 'auto' }} />
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </Col>

            <Col lg={6} md={6} sm={6} xl={6} xs={6} style={{ display: 'flex', flexDirection: 'column', padding: '0px' }}>
              <ul class="navbar-nav nav px-md-4 mr-auto p-0" style={{ padding: '0px !important' }}>
                <li><a>Trang chủ</a></li>
                <li><a>Phụ tùng</a></li>
                <li><a>Chợ xe máy</a></li>
                <li><a>Dịch vụ xe</a></li>
                <li><a>Tin tức</a></li>
                <li><a>Đại lý</a></li>
              </ul>
              <div class="input-group input-group-sm" style={{ width: '30rem', marginBottom: '1rem', marginLeft:'27px' }}>
                <input type="text" class="form-control" placeholder="Nhập tên xe tìm kiếm" aria-label="Dollar amount (with dot and two decimal places)" />
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-search"></i></span>
                </div>
              </div>
            </Col>

            <Col lg={3 } md={3} sm={3} xl={3} xs={3} className="d-flex flex-column">
              <div style={{marginLeft: '1rem'}}>
                <i class="fab fa-facebook-f" style={{margin: '1rem', cursor: 'pointer'}}></i>
                <i class="fab fa-youtube" style={{ margin: '1rem', cursor: 'pointer' }}></i>
                <Accordion.Toggle as={Button} variant="link" color="#fff">Đăng nhập</Accordion.Toggle>
              </div>
              <div className="d-flex flex-row">
                <a
                  onClick={() => history.push('/detail')}
                 style={{height: '38px', width: '100px', background: '#fff', borderRadius: '3px', fontWeight: '600', display :'flex', padding: '0 6px', alignItems: 'center', marginLeft: '1rem'}}>
                  <ShoppingCartOutlined style={{fontSize: '22px', marginRight: '4px'}}/>
                  Giỏ hàng
                </a>
                <a style={{ height: '38px', width: '38px', background: '#FFA726', borderRadius: '3px', fontWeight: '600', display: 'flex', padding: '0 6px', alignItems: 'center', marginLeft:'1rem' }}>
                  <QuestionCircleOutlined style={{ fontSize: '22px', color: '#fff'}}/>
                </a>
              </div>
            </Col>
          </Row>
        </nav>
      </header>
      <div style={{ height: '12vh', backgroundColor: 'black' }}></div>
    </>
  )
}
