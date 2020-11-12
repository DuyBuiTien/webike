import React, { useEffect, useState } from 'react';
import { Row, Col, Carousel, Button, Accordion, Card } from 'react-bootstrap';
import { ShoppingCartOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { requestGET, GLOBAL_URL } from '../../../pages/api/basicApi';
import './style.scss';
import { imageMotorItem } from '../../Dashboard/component/Image'


export function HeaderPage() {
  const history = useHistory();
  const [isSticky, setSticky] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [item, setItem] = useState();

  const fetchItem = async () => {
    var data = await requestGET(`http://localhost:4000/motor`)
    setItem(data)
  }

  useEffect(() => {
    fetchItem();
    var data = localStorage.getItem('login')
    setIsLogin(data)
  }, [isLogin])

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

  const handleClick = () => {
    history.push('/cart')
  }

  const handleSearch = (value) => {
    var arr = []
    item && item.map((i, index) => {
      if (i.motorName === value) {
        arr.push(i)
        history.push('/detail', { data: i, img: imageMotorItem[index % 5] })
      }
    })
  }
  return (
    <>
      <header className={`row mx-0 fixed-top ${isSticky ? 'fixed' : ''}`}>
        <nav className="container px-0 navbar-light navbar navbar-expand-lg">
          <Row style={{ width: '100%' }}>
            <Col lg={3} md={3} sm={3} xl={3} xs={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a className="navbar-brand" onClick={() => history.push('/')}>
                <img src="images/logo.png" alt="Tripbricks" className="img-fluid head-logo" style={{ fontSize: '0.87rem', width: '15rem', height: 'auto' }} />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </Col>

            <Col lg={6} md={6} sm={6} xl={6} xs={6} style={{ display: 'flex', flexDirection: 'column', padding: '0px' }}>
              <ul className="navbar-nav nav px-md-4 mr-auto p-0" style={{ padding: '0px !important' }}>
                <li><a>Trang chủ</a></li>
                <li><a>Phụ tùng</a></li>
                <li><a>Chợ xe máy</a></li>
                <li><a>Dịch vụ xe</a></li>
                <li><a>Tin tức</a></li>
                <li><a>Đại lý</a></li>
              </ul>
              <div className="input-group input-group-sm" style={{ width: '30rem', marginBottom: '1rem', marginLeft: '27px' }}>
                <Autocomplete
                  id="free-solo-demo"
                  style={{ width: '30rem', height: '2rem', position: 'relative' }}
                  freeSolo
                  options={item && item.map((option) => option.motorName)}
                  renderInput={(params) => (
                    <TextField {...params} label="Nhập tên xe cần tìm" margin="normal" variant="outlined" style={{ position: 'absolute', top: '-1rem', backgroundColor: '#fff', borderRadius: '5px' }} />
                  )}
                  onChange={(event, value, reason) => handleSearch(value)}
                />
              </div>
            </Col>

            <Col lg={3} md={3} sm={3} xl={3} xs={3} className="d-flex flex-column">
              <div style={{ marginLeft: '1rem', display: 'flex', flexDirection: 'row' }}>
                <i className="fab fa-facebook-f" style={{ margin: '1rem', cursor: 'pointer' }}></i>
                <i className="fab fa-youtube" style={{ margin: '1rem', cursor: 'pointer' }}></i>
                {
                  isLogin === 'true' && <div className="accordion w-50px" id="accordionExample" onClick={() => history.push('/auth')}>
                    <p className="mb-0 w-50px">
                      <button className="btn btn-link" type="button">
                        Admin</button>
                    </p>
                  </div> 
                }
                {
                  isLogin === 'false' && <div className="accordion w-50px" id="accordionExample" onClick={() => history.push('/auth')}>
                      <p className="mb-0 w-50px">
                        <button className="btn btn-link" type="button">
                    Đăng nhập</button>
                      </p>
                    </div>
                }
              </div>
              <div className="d-flex flex-row">
                <a
                  onClick={() => handleClick()}
                  style={{ height: '38px', width: '100px', background: '#fff', borderRadius: '3px', fontWeight: '600', display: 'flex', padding: '0 6px', alignItems: 'center', marginLeft: '1rem' }}>
                  <ShoppingCartOutlined style={{ fontSize: '22px', marginRight: '4px' }} />
                  Giỏ hàng
                </a>
                <a style={{ height: '38px', width: '38px', background: '#FFA726', borderRadius: '3px', fontWeight: '600', display: 'flex', padding: '0 6px', alignItems: 'center', marginLeft: '1rem' }}>
                  <QuestionCircleOutlined style={{ fontSize: '22px', color: '#fff' }} />
                </a>
              </div>
            </Col>
          </Row>
        </nav>
      </header>
      <div style={{ height: '12vh', backgroundColor: 'black' }}></div>

      <div style={{ height: '80vh' }}>
        <Carousel
          nextIcon={<></>}
          prevIcon={<></>}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/20200511_warehouse_clearance_1200_482.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/20200511_new_arrival_1200_482.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/20200511_clothes_clearance_1200_482.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}
