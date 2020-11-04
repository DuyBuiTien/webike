import React from "react";
import { Button } from "react-bootstrap";
import './styles.scss'
export const Footer = (props) => {
  return (
    <>
      <div class="col-12 px-0 py-5 section-content section-subscribe d-flex justify-content-center">
        <div class="container col-10">
          <div class="row section-sub-content d-flex justify-content-center">
            <div class="col-12 col-sm-6 col-md-7">
              <div class="section-sub-desc">
                <h3>Webike Co., Ldt.</h3>
                <p><span class="fas fa-map-marker-alt"></span> <b>Tầng 1 nhà 33 ngõ 301 Hồng Hà, quận Hoàn Kiếm, thành phố Hà Nội</b></p>
                <p><span class="fas fa-phone-volume"></span> <b>0915118840</b></p>
                <p><span class="fas fa-envelope"></span>  <b>webike@gmail.com</b></p>
              </div>
              <div class="social-group">
                <a href="" class="social-link m-1" style={{ fontSize: '2.5rem' }}> 
                  <span class="fab fa-facebook-square"></span>
                </a>
                <a href="" class="social-link m-1" style={{ fontSize: '2.5rem' }}>
                  <span class="fab fa-instagram"></span>
                </a>
                <a href="" class="social-link m-1" style={{ fontSize: '2.5rem' }}>
                  <span class="fab fa-youtube-square"></span>
                </a>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-5">
              <div class="section-sub-form">
                <h3 class="sub-form-title">Theo dõi Webike để nhận các chương trình mới hấp dẫn và những lời khuyên hữu ích</h3>
                <input type="text" class="form-control" placeholder="Nhập E-mail của bạn" />
                <button type="button" class="btn btn-danger">Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="row mx-0 d-flex justify-content-center">
        <div class="col-10 footer-content">
          <div class="container">
            <div class="row info-footer">
              <div class="col-xs-12 col-sm-3">
                <div class="elementor-heading-title">We accept Payment via</div>
                <div class="elementor-image">
                  <img src="/images/pay1.png" class="img-img-responsive" alt="" />
                  <img src="/images/pay2.png" class="img-img-responsive" alt="" />
                  <img src="/images/pay3.png" class="img-img-responsive" alt="" />
                  <img src="/images/pay4.png" class="img-img-responsive" alt="" />
                </div>
              </div>
              <div class="col-xs-12 col-sm-3">
                <div class="elementor-heading-title">Secured Data Verified &amp; Protected by</div>
                <div class="elementor-image">
                  <img src="/images/info2.png" class="img-img-responsive" alt="" />
                </div>
              </div>
              <div class="col-xs-12 col-sm-3">
                <div class="elementor-heading-title">Certified by Vietnam's Ministry of Industry &amp; Trade</div>
                <div class="elementor-image">
                  <img src="/images/info3.png" class="img-img-responsive" alt="" />
                </div>
              </div>
              <div class="col-xs-12 col-sm-3">
                <ul class="nav flex-column">
                  <li class="nav-item"><a href="#" class="nav-link">Giới thiệu</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Đối tác</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Chính sách</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 flex-column coppy-right d-flex justify-content-center">
          <p>COPY RIGHT 2018 WEBIKE LTD.,</p>
          <p>Business License: 0108403780. Date of Issue: 14/08/2018. Place of Issue: Hanoi Authority for Planning and Investment.</p>
        </div>
      </footer>
    </>
  );
};
