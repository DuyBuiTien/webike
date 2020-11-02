import React, { useEffect, useState } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

export function DashboardPage() {
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

  const handleSliceCarousel = () => {
    // $('#carouselExampleControls').carousel($(this).data('slide-to'));
  }
  return (
    <>
      <header className={`row mx-0 fixed-top ${isSticky ? 'fixed' : ''}`}>
        <nav class="container px-0 navbar-light navbar navbar-expand-lg">
          <Row style={{ width: '100%' }}>
            <Col lg={3} md={3} sm={3} xl={3} xs={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a class="navbar-brand" href="index.html">
                <img src="images/logo_w.svg" alt="Tripbricks" class="img-fluid head-logo" />
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </Col>

            <Col lg={9} md={9} sm={9} xl={9} xs={9} style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div class="collapse navbar-collapse navbar-toggle" id="navbarNav">
                <ul class="navbar-nav nav px-md-4 mr-auto">
                  <li><a><i style={{ color: '#fff' }} class="fas fa-home"></i> Trang chủ</a></li>
                  <li><a ><i style={{ color: '#fff' }} class="fas fa-umbrella-beach"></i> Địa điểm</a></li>
                  <li><a ><i style={{ color: '#fff' }} class="fas fa-award"></i> Giới thiệu</a></li>
                </ul>
                <div class="navbar-right">
                  <div class="navbar-search">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Tìm kiếm ..." aria-label="Tìm kiếm ..." aria-describedby="basic-addon2" />
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button"><span class="fa fa-search"></span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </nav>
      </header>

      <div style={{ height: '80%' }}>

        <Carousel
          nextIcon={<></>}
          prevIcon={<></>}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/banner.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/banner2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/banner3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div class="slider-social">
          <ul class="list-inline">
            <li class="list-inline-item"><a href="#"><span class="fab fa-facebook-square"></span></a></li>
            <li class="list-inline-item"><a href="#"><span class="fab fa-instagram"></span></a></li>
            <li class="list-inline-item"><a href="#"><span class="fab fa-youtube-square"></span></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
