import React from 'react';
import { HeaderPage } from '../Header/pages/HeaderPage';
import { Row, Image, Card, Container, Nav, Col } from 'react-bootstrap';
import { MotorItem } from './component/MotorItem';
import { MotorItemType } from './component/motorItemType';
import { ItemType } from './component/ItemType';
import { Footer } from '../Footer/Footer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const DashboardPage = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const responsiveItem = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const responsiveNews = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  return (
    <>
      <HeaderPage />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container style={{ width: '80%' }}>
          <Row style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
            <Card style={{ width: '22%', margin: '1.5%', objectFit: 'cover', height: '10rem', position: 'relative', boxShadow: '0 1px 7px rgba(0,0,0,.2)' }}>
              <Image style={{ width: '100%', height: '10rem', border: '8px solid #fff', borderRadius: '5px', opacity: '0.99' }} src="/images/category-04.png"></Image>
              <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <p style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 'bold', margin: '0px' }}>PHỤ TÙNG</p>
              </div>
            </Card>

            <Card style={{ width: '22%', margin: '1.5%', objectFit: 'cover', height: '10rem', position: 'relative', boxShadow: '0 1px 7px rgba(0,0,0,.2)' }}>
              <Image style={{ width: '100%', height: '10rem', border: '8px solid #fff', borderRadius: '5px', opacity: '0.99' }} src="/images/category-03.png"></Image>
              <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <p style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 'bold', margin: '0px' }}>CHỢ XE MÁY</p>
              </div>
            </Card><Card style={{ width: '22%', margin: '1.5%', objectFit: 'cover', height: '10rem', position: 'relative', boxShadow: '0 1px 7px rgba(0,0,0,.2)' }}>
              <Image style={{ width: '100%', height: '10rem', border: '8px solid #fff', borderRadius: '5px', opacity: '0.99' }} src="/images/category-02.png"></Image>
              <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <p style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 'bold', margin: '0px' }}>DỊCH VỤ XE</p>
              </div>
            </Card><Card style={{ width: '22%', margin: '1.5%', objectFit: 'cover', height: '10rem', position: 'relative', boxShadow: '0 1px 7px rgba(0,0,0,.2)' }}>
              <Image style={{ width: '100%', height: '10rem', border: '8px solid #fff', borderRadius: '5px', opacity: '0.99' }} src="/images/category-01.png"></Image>
              <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <p style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 'bold', margin: '0px' }}>TIN TỨC</p>
              </div>
            </Card>
          </Row>

          <Card style={{ borderTop: '8px solid #2a313c', padding: '8px 0px', marginTop: '3rem', backgroundColor: '#fff', height: '100%' }}>
            <Card.Header style={{ fontWeight: '600', margin: '1rem', display: 'flex', justifyContent: 'center', fontSize: '25px', padding: '10px 5px' }}>Chợ xe máy</Card.Header>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ margin: '3px', fontWeight: '300', fontSize: '20px' }}>Xe mới đăng</p>
              <Nav
                activeKey="all"
              >
                <Nav.Item className="d-flex justify-content-center">
                  <Nav.Link eventKey="all" style={{ background: '#fff', borderRadius: '3px', display: 'flex', padding: '0 6px', alignItems: 'center' }}>
                    Xem tất cả xe
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-flex justify-content-center">
                  <Nav.Link eventKey="link-1" style={{ background: '#fff', borderRadius: '3px', display: 'flex', padding: '0 6px', alignItems: 'center' }}>
                    Xe ga
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-flex justify-content-center">
                  <Nav.Link eventKey="link-2" style={{ background: '#fff', borderRadius: '3px', display: 'flex', padding: '0 6px', alignItems: 'center' }}>
                    Xe số
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-flex justify-content-center">
                  <Nav.Link eventKey="link-3" style={{ background: '#fff', borderRadius: '3px', display: 'flex', padding: '0 6px', alignItems: 'center' }}>
                    Phân khối lớn
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-50-px"
            >
              <MotorItem style={{ width: '20%', margin: '1.5%' }}></MotorItem>
              <MotorItem></MotorItem>
              <MotorItem></MotorItem>
              <MotorItem></MotorItem>
              <MotorItem></MotorItem>
            </Carousel>


            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
              <p style={{ margin: '3px', fontWeight: '300', fontSize: '20px' }}>Dòng xe được xem nhiều</p>
              <Nav
                activeKey="all"
              >
                <Nav.Item>
                  <Nav.Link href="all">~50cc</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">~175cc</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">~400cc</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">~750cc</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-50-px"
            >
              <MotorItemType></MotorItemType>
              <MotorItemType></MotorItemType>
              <MotorItemType></MotorItemType>
              <MotorItemType></MotorItemType>
              <MotorItemType></MotorItemType>
              <MotorItemType></MotorItemType>
              <MotorItemType></MotorItemType>
            </Carousel>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
              <p style={{ margin: '3px', fontWeight: '300', fontSize: '20px' }}>Tìm theo hãng xe</p>
            </div>

            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsiveItem}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
            // itemClass="carousel-item-padding-50-px"
            >
              <ItemType></ItemType>
              <ItemType></ItemType>
              <ItemType></ItemType>
              <ItemType></ItemType>
              <ItemType></ItemType>
              <ItemType></ItemType>
              <ItemType></ItemType>
              <ItemType></ItemType>
              <ItemType></ItemType>
              <ItemType></ItemType>
              <ItemType></ItemType>
              <ItemType></ItemType>
              <ItemType></ItemType>
            </Carousel>

          </Card>

          <Card style={{ borderTop: '8px solid #2a313c', padding: '8px 0px', marginTop: '3rem', marginBottom: '3rem', backgroundColor: '#fff', height: '100%' }}>
            <Card.Header>TIN TỨC XE MÁY</Card.Header>

            <Card.Body>
              <Row >
                <Col lg={6} md={6} sm={6} xl={6} xs={6} style={{ height: '472px', padding: '0px' }}>
                  {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="3000">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block" style={{ height: '472px', width: '616px' }} src="images/bo-chuyen-so-nhanh-quick-shifter-600x400.jpg" alt="First slide" />
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" style={{ height: '472px', width: '616px' }}  src="images/1595575287756L-768x576-1-600x400.jpg" alt="Second slide" />
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" style={{ height: '472px', width: '616px' }}  src="images/ban-do-vario-bumblebee-125cc-dep-hang-dau-indonesia-nhin-ra-sao-1-600x400.jpeg" alt="Third slide" />
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" style={{ height: '472px', width: '616px' }}  src="images/yamaha-nvx-2021-co-gia-de-xuat-53-trieu-dong-cung-phan-khuc-honda-airblade-1-600x400.jpg" alt="Third slide" />
                      </div>
                    </div>
                  </div> */}
                  <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsiveNews}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                  >
                    <div style={{position: 'relative'}}>
                      <img class="d-block w-100" style={{ height: '472px', width: '616px', objectFit: 'cover' }} src="images/bo-chuyen-so-nhanh-quick-shifter-600x400.jpg" alt="First slide" />
                      <p style={{position: 'absolute', bottom: '0px', left: '0px', margin: '0px', width: '100%',background: 'rgba(32,39,50,.8)', fontSize: '1.25rem', color: '#fff', fontWeight: '500', padding: '16px', lineHeight: '1.4'}}>Bộ chuyển số nhanh (Quick Shifter) và những điều cần biết</p>
                    </div>

                    <div style={{position: 'relative'}}>
                    <img class="d-block w-100" style={{ height: '472px', width: '616px', objectFit: 'cover' }} src="images/ban-do-vario-bumblebee-125cc-dep-hang-dau-indonesia-nhin-ra-sao-1-600x400.jpeg" alt="Second slide" />
                      <p style={{position: 'absolute', bottom: '0px', left: '0px', margin: '0px', width: '100%',background: 'rgba(32,39,50,.8)', fontSize: '1.25rem', color: '#fff', fontWeight: '500', padding: '16px', lineHeight: '1.4'}}>Bộ chuyển số nhanh (Quick Shifter) và những điều cần biết</p>
                    </div>

                    <div style={{position: 'relative'}}>
                    <img class="d-block w-100" style={{ height: '472px', width: '616px', objectFit: 'cover' }} src="images/1595575287756L-768x576-1-600x400.jpg" alt="Third slide" />
                      <p style={{position: 'absolute', bottom: '0px', left: '0px', margin: '0px', width: '100%',background: 'rgba(32,39,50,.8)', fontSize: '1.25rem', color: '#fff', fontWeight: '500', padding: '16px', lineHeight: '1.4'}}>Bộ chuyển số nhanh (Quick Shifter) và những điều cần biết</p>
                    </div>

                    <div style={{position: 'relative'}}>
                    <img class="d-block w-100" style={{ height: '472px', width: '616px', objectFit: 'cover' }} src="images/yamaha-nvx-2021-co-gia-de-xuat-53-trieu-dong-cung-phan-khuc-honda-airblade-1-600x400.jpg" alt="Third slide" />
                      <p style={{position: 'absolute', bottom: '0px', left: '0px', margin: '0px', width: '100%',background: 'rgba(32,39,50,.8)', fontSize: '1.25rem', color: '#fff', fontWeight: '500', padding: '16px', lineHeight: '1.4'}}>Bộ chuyển số nhanh (Quick Shifter) và những điều cần biết</p>
                    </div>
                  </Carousel>
                </Col>

                <Col lg={6} md={6} sm={6} xl={6} xs={6} style={{ height: '439px', padding: '0px' }}>
                  <Card style={{ display: 'flex', flexDirection: 'row', padding: '16px' }}>
                    <Image style={{ width: '126px', height: '77px', objectFit: 'cover' }} src="images/bo-chuyen-so-nhanh-quick-shifter-600x400.jpg"></Image>
                    <div style={{ padding: '10px' }}>
                      <p>03/11/2020</p>
                      <p>Bộ chuyển số nhanh (Quick Shifter) và những điều cần biết</p>
                    </div>
                  </Card>
                  <Card style={{ display: 'flex', flexDirection: 'row', padding: '16px' }}>
                    <Image style={{ width: '126px', height: '77px', objectFit: 'cover' }} src="images/bo-chuyen-so-nhanh-quick-shifter-600x400.jpg"></Image>
                    <div style={{ padding: '10px' }}>
                      <p>03/11/2020</p>
                      <p>Bộ chuyển số nhanh (Quick Shifter) và những điều cần biết</p>
                    </div>
                  </Card>
                  <Card style={{ display: 'flex', flexDirection: 'row', padding: '16px' }}>
                    <Image style={{ width: '126px', height: '77px', objectFit: 'cover' }} src="images/bo-chuyen-so-nhanh-quick-shifter-600x400.jpg"></Image>
                    <div style={{ padding: '10px' }}>
                      <p>03/11/2020</p>
                      <p>Bộ chuyển số nhanh (Quick Shifter) và những điều cần biết</p>
                    </div>
                  </Card>
                  <Card style={{ display: 'flex', flexDirection: 'row', padding: '16px' }}>
                    <Image style={{ width: '126px', height: '77px', objectFit: 'cover' }} src="images/bo-chuyen-so-nhanh-quick-shifter-600x400.jpg"></Image>
                    <div style={{ padding: '10px' }}>
                      <p>03/11/2020</p>
                      <p>Bộ chuyển số nhanh (Quick Shifter) và những điều cần biết</p>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card.Body>

          </Card>
        </Container>
      </div>
      <Footer />
    </>
  )
}