import React, {useState, useEffect, useRef} from "react";
import {useSubheader} from "../../_metronic/layout";
import GoogleMapReact from 'google-map-react';
import { Popover, OverlayTrigger, Tooltip, Modal, Row, Col } from 'react-bootstrap';
import ApexCharts from "apexcharts";
import moment from 'moment'
import {requestPOST, requestGET, requestGET2} from './api/basic'

import { NamDinhData } from './data/NamDinhCityData'
import { GiaoThuyData } from './data/GiaoThuyData'
import { HaiHauData } from './data/HaiHauData'
import { MyLocData } from './data/MyLocData'
import { NamTrucData } from './data/NamTrucData'
import { NghiaHungData } from './data/NghiaHungData'
import { TrucNinhData } from './data/TrucNinhData'
import { VuBanData } from './data/VuBanData'
import { XuanTruongData } from './data/XuanTruongData'
import { YYenData } from './data/YYenData'
import { DashboardData } from './data/DashboardData'
import { EducationData } from './data/EducationData'
import { MedicalData } from './data/MedicalData'

import "./MapPage.scss";

import {AsideMenu} from './AsideMenu'
import {DashboardRightCard1} from './DashboardRightCard1'
import {DashboardRightCard2} from './DashboardRightCard2'
import {DashboardLeftCard2} from './DashboardLeftCard2'
import {DashboardLeftCard1} from './DashboardLeftCard1'
import {DashboardRightCard3} from './DashboardRightCard3'
import {DashboardLeftCard3} from './DashboardLeftCard3'
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import {LayerDropdownLeft} from './LayerDropdownLeft'
import {LayerDropdownRight} from './LayerDropdownRight'
const mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]

const tokenCamera = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJab25lTWluZGVyIiwiaWF0IjoxNTk3OTA4NTczLCJleHAiOjE1OTc5OTQ5NzMsInVzZXIiOiJhZG1pbiIsInR5cGUiOiJhY2Nlc3MifQ.bSk1z2eZQGGag5yjXkp9KgUR14uIrX4rCWGk3TKiA1Q"



const mapOptions = {
  styles: mapStyles, // straight out of something like snazzymaps
  fullscreenControl: false,
  zoomControl: false,
};


const loadPolygonMap = (data) => {
  var namDinhCoord = []

  for (let index = 0; index < data.length; index++) {
    let coord = {}
    if (index % 2 == 1) {
      coord.lat = data[index]
      coord.lng = data[index + 1]
      namDinhCoord.push(coord)
    }
  }

  const reversedCoords = namDinhCoord.map(ll => {
    return { lat: ll.lng, lng: ll.lat }
  });

  return reversedCoords;
}

const handleApiLoaded = (map, maps) => {

  const HaiHau = loadPolygonMap(HaiHauData)
  const GiaoThuy = loadPolygonMap(GiaoThuyData)
  const MyLoc = loadPolygonMap(MyLocData)
  const NamDinh = loadPolygonMap(NamDinhData)
  const NamTruc = loadPolygonMap(NamTrucData)
  const NghiaHung = loadPolygonMap(NghiaHungData)
  const TrucNinh = loadPolygonMap(TrucNinhData)
  const VuBan = loadPolygonMap(VuBanData)
  const XuanTruong = loadPolygonMap(XuanTruongData)
  const YYen = loadPolygonMap(YYenData)


  var giaoThuy = new maps.Polygon({
    paths: GiaoThuy,
    strokeColor: "#f44336",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#e53935",
    fillOpacity: 0.35
  });
  var haiHau = new maps.Polygon({
    paths: HaiHau,
    strokeColor: "#f44336",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#D81B60",
    fillOpacity: 0.35
  });
  var myLoc = new maps.Polygon({
    paths: MyLoc,
    strokeColor: "#f44336",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#AB47BC",
    fillOpacity: 0.35
  });

  var namDinh = new maps.Polygon({
    paths: NamDinh,
    strokeColor: "#f44336",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#BDBDBD",
    fillOpacity: 0.35
  });

  var namTruc = new maps.Polygon({
    paths: NamTruc,
    strokeColor: "#f44336",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#5C6BC0",
    fillOpacity: 0.35
  });

  var nghiaHung = new maps.Polygon({
    paths: NghiaHung,
    strokeColor: "#f44336",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#42A5F5",
    fillOpacity: 0.35
  });

  var trucNinh = new maps.Polygon({
    paths: TrucNinh,
    strokeColor: "#f44336",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#8D6E63",
    fillOpacity: 0.35
  });

  var vuBan = new maps.Polygon({
    paths: VuBan,
    strokeColor: "#f44336",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#D4E157",
    fillOpacity: 0.35
  });

  var xuanTruong = new maps.Polygon({
    paths: XuanTruong,
    strokeColor: "#f44336",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FFA726",
    fillOpacity: 0.35
  });

  var yYen = new maps.Polygon({
    paths: YYen,
    strokeColor: "#f44336",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#66BB6A",
    fillOpacity: 0.35
  });
  giaoThuy.setMap(map);
  haiHau.setMap(map);
  myLoc.setMap(map);
  namDinh.setMap(map);
  namTruc.setMap(map);
  nghiaHung.setMap(map);
  trucNinh.setMap(map);
  vuBan.setMap(map);
  xuanTruong.setMap(map);
  yYen.setMap(map);
}

const Component = () => ({
  iframe: function () {
    return {
      __html: this.props.iframe
    }
  },

  render: function() {
    return (
        <div style={{height: '100%'}} dangerouslySetInnerHTML={ this.iframe() } />
    );
  }
});

export const MapPage = () => {

  const [dataMap, setDataMap] = useState([]);
  const [active, setActive] = useState(0);
  const [BaoCaoID, setBaoCaoID] = useState(39);
  const [activeMenu, setActiveMenu] = useState(0);
  const [svg, setSvg] = useState("/media/svg/icons/Design/Component.svg");
  const [modal, setModal] = useState(false);
  const [modalKTXH, setModalKTXH] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [dataMenu, setDataMenu] = useState([]);
  const [dataMenuChildren, setDataMenuChildren] = useState([]);
  const [listCamera, setListCamera] = useState([]);

  const panelRef = useRef(null);
  const cartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
			var data1 = await requestGET(`https://dieuhanhdev.tandan.com.vn/bcapi/areas/asidemenus?siteUrl=https%3A%2F%2Fdieuhanhdev.tandan.com.vn%2Fsites%2Fbc_board`)
      var dataM = data1.result?data1.result.items:[]
      dataM.forEach((i,index) => {
        i.id = index
      });
      setDataMenu(dataM);
      dataM[0].children.forEach((i,index) => {
        i.id = index
      });
      setDataMenuChildren(dataM[0].children)
      var code = dataM.length>0?dataM[0].children[0].code:''
			var data1 = await requestGET(`https://bcdev.tandan.com.vn/_vti_bin/td.wcf/wcfservice.svc/getOfficeByCode?code=${code}`)
      var data2 = data1.data?data1.data:[]
      setDataMap(data2)
		};
		//fetchData()
    return () => {
      console.log('unmount Hang hoa!');
    };
  }, []);

  useEffect(() => {
    var dataC = dataMenu.length>0?dataMenu[activeMenu].children:[]
    var bcID = dataMenu.length>0?dataMenu[activeMenu].badge:'2036'
    dataC.forEach((i,index) => {
      i.id = index
    });
    setDataMenuChildren(dataC)
    setBaoCaoID(bcID)
    if(active == 0){
      const fetchData = async () => {
      var code = dataMenu.length>0?dataMenu[activeMenu].children[0].code:''
      var data1 = await requestGET(`https://bcdev.tandan.com.vn/_vti_bin/td.wcf/wcfservice.svc/getOfficeByCode?code=${code}`)
      var data2 = data1.data?data1.data:[]
      setDataMap(data2)
    };
    fetchData()
    }
    else{
      setActive(0)
    }
    return () => {
      console.log('unmount Hang hoa!');
    };
  }, [activeMenu]);

  useEffect(() => {
    const fetchData = async () => {
      var code = dataMenu.length>0?dataMenu[activeMenu].children[active].code:''
			var data1 = await requestGET(`https://bcdev.tandan.com.vn/_vti_bin/td.wcf/wcfservice.svc/getOfficeByCode?code=${code}`)
      var data2 = data1.data?data1.data:[]
      setDataMap(data2)
		};
		fetchData()
    return () => {
      console.log('unmount Hang hoa!');
    };
  }, [active]);

  useEffect(() => {
    const element = document.getElementById("kt_stats_widget_11_chart");

    if (!element) {
      return;
    }

    const element2 = document.getElementById("kt_stats_widget_12_chart");

    if (!element2) {
      return;
    }

    const options = getChartOption();
    const chart = new ApexCharts(element, options);
    chart.render();
    const options2 = getChartOption2();
    const chart2 = new ApexCharts(element2, options2);
    chart2.render();
    return function cleanUp() {
      chart.destroy();
      chart2.destroy();
    };
  }, [modal]);

  useEffect(() => {
    const element3 = document.getElementById("kt_stats_widget_13_chart");

    if (!element3) {
      return;
    }

    const element4 = document.getElementById("kt_stats_widget_14_chart");

    if (!element4) {
      return;
    }

    const element5 = document.getElementById("kt_stats_widget_15_chart");

    if (!element5) {
      return;
    }

    const element6 = document.getElementById("kt_stats_widget_16_chart");

    if (!element6) {
      return;
    }

    const options3 = getChartOption3();
    const chart3 = new ApexCharts(element3, options3);
    chart3.render();
    const options4 = getChartOption4();
    const chart4 = new ApexCharts(element4, options4);
    chart4.render();
    const options5 = getChartOption5();
    const chart5 = new ApexCharts(element5, options5);
    chart5.render();
    const options6 = getChartOption6();
    const chart6 = new ApexCharts(element6, options6);
    chart6.render();
    return function cleanUp() {
      chart3.destroy();
      chart4.destroy();
      chart5.destroy();
      chart6.destroy();
    };
  }, [modalKTXH]);

  const setActiveMenuData = (id) => {
    setActiveMenu(id)
    panelRef.current.click()
    cartRef.current.click()
    setTimeout(() => {
      panelRef.current.click()
      cartRef.current.click()
    }, 1000)
  }

  const AnyReactComponent = ({ item, svg, setModal, setDataModal }) => (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={<Tooltip className="tooltip-item">{item.Ten}</Tooltip>
  }
    >
      <span onClick={() => setModal(true) + setDataModal(item) + getDataCam(item.CamGroupID)} class="svg-icon svg-icon-danger svg-icon-2x">
        <SVG
          title=''
          src={toAbsoluteUrl(svg)}
        ></SVG>
      </span>
    </OverlayTrigger>
  );
  
  const getDataCam = async(camID) => {
    var data1 = await requestGET(`https://camera.tandan.com.vn/zm/api/monitors/index/GroupId:${camID}/.json?token=${tokenCamera}`)
    var data2 = data1.monitors?data1.monitors:[]
    setListCamera(data2)
  }

  return (
    <div style={{width: '100%', height: '100%'}}>
      <AsideMenu setActiveMenu={setActiveMenuData} activeMenu={activeMenu} dataMenu={dataMenu} />
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCV_uNEj6aSqtnz_iPHElehAWRZNEdUPqM' }}
        defaultCenter={{
          lat: 20.2791804,
          lng: 106.2051484,
        }}
        defaultZoom={11}
        options={mapOptions}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        yesIWantToUseGoogleMapApiInternals
      >
        {dataMap.map(i => (
        <AnyReactComponent
          key={i.ID}
          lat={i.Lat}
          lng={i.Lng}
          item={i}
          svg={svg}
          setModal={setModal}
          setDataModal={setDataModal}
        />
        ))}
      </GoogleMapReact>
      <a ref={cartRef} className="button-toggle-left" id="kt_quick_cart_toggle">
        <span class="svg-icon svg-icon-primary svg-icon-2x">
        <SVG
            src={toAbsoluteUrl(
                "/media/svg/icons/Layout/Layout-right-panel-2.svg"
            )}
        ></SVG>
        </span>
      </a>

      <a ref={panelRef} className="button-toggle-right" id="kt_quick_panel_toggle">
        <span class="svg-icon svg-icon-primary svg-icon-2x">
        <SVG
            src={toAbsoluteUrl(
                "/media/svg/icons/Layout/Layout-right-panel-2.svg"
            )}
        ></SVG>
        </span>
      </a>

      <a target="_blank" href="https://dieuhanh.namdinh.gov.vn/sites/dashboard/SitePages/ioc/default.aspx" className="button-toggle-right-2">
        <span class="svg-icon svg-icon-primary svg-icon-2x">
        <SVG
            src={toAbsoluteUrl(
                "/media/svg/icons/General/Clipboard.svg"
            )}
            title="Không gian làm việc"
        ></SVG>
        </span>
      </a>

      <a target="_blank" href="https://dieuhanh.namdinh.gov.vn/sites/dashboard/SitePages/default.aspx" className="button-toggle-right-3">
        <span class="svg-icon svg-icon-primary svg-icon-2x">
        <SVG
            src={toAbsoluteUrl(
                "/media/svg/icons/Text/Menu.svg"
            )}
            title="Trung tâm điều hành"
        ></SVG>
        </span>
      </a>

      <LayerDropdownLeft dataMenuChildren={dataMenuChildren} setActive={setActive} active={active} setSvg={setSvg} />

      {/* <LayerDropdownRight /> */}
      
      <div id="kt_quick_cart" className="offcanvas offcanvas-left p-0 offcanvas-on kt-quick-aside kt-quick-aside-left">

        <div class="offcanvas-content">

	        <div class="offcanvas-wrapper mb-5 scroll-pull" id="kt_quick_cart_logs">
            <Component iframe={`<iframe frameborder="0" scrolling="no" class="iframe-bc" height=100% src="https://baocao.namdinh.gov.vn/_vti_bin/TD.WCF/WCFService.svc/GetUrlPublic?Token=R2F6OWpSNlpNZyswcWkrN1hpUkg2Zz09&UrlRedirect=https://baocao.namdinh.gov.vn/sites/bc_board/SitePages/dashboard.aspx#${BaoCaoID}"></iframe>`} />
          </div>

        </div>

      </div>
      <div id="kt_quick_panel" className="offcanvas offcanvas-right p-0 offcanvas-on kt-quick-aside kt-quick-aside-right">

        <div class="offcanvas-content">

	        <div class="offcanvas-wrapper mb-5 scroll-pull" id="kt_quick_panel_logs" data-max-height="300">
            <DashboardLeftCard2 />
            
            <DashboardLeftCard3 />

            <DashboardRightCard3 />

            
          </div>

        </div>

      </div>
      

      <Modal
        show={modal}
        onHide={() => setModal(false)}
        aria-labelledby="example-custom-modal-styling-title"
        dialogClassName="modal-50w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {dataModal.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b className="modal-body-title">Camera</b>
          <Row style={{width: '100%', paddingTop: 10}}>
            {listCamera.map((i) => (
              <Col xs={6} md={4}>
                <img
                  alt=""
                  style={{ width: '100%', height: 150 }}
                  src={`http://camera.tandan.com.vn/zm/cgi-bin/nph-zms?mode=jpeg&maxfps=30&buffer=1000&monitor=${i.Monitor.Id}&user=admin&pass=Tandan@123`}
                />
              </Col>
            ))}
          </Row>
          <br />
          <b className="modal-body-title">Biểu đồ</b>
          <Component iframe={`<iframe frameborder="0" scrolling="no" class="iframe-bc" width=100% height=900px src="https://baocao.namdinh.gov.vn/_vti_bin/TD.WCF/WCFService.svc/GetUrlPublic?Token=R2F6OWpSNlpNZyswcWkrN1hpUkg2Zz09&UrlRedirect=https://baocao.namdinh.gov.vn/sites/bc_board/SitePages/dashboard.aspx#${dataModal.BaoCaoID}"></iframe>`} />
        </Modal.Body>
      </Modal>
      <Modal
        show={modalKTXH}
        onHide={() => setModalKTXH(false)}
        aria-labelledby="example-custom-modal-styling-title"
        dialogClassName="modal-50w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Kinh tế xã hội
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{width: '100%', padding: 5}}>
            <Col xs={9} md={6} >
              <div
                id="kt_stats_widget_13_chart"
                className="card-rounded-bottom"
                style={{ }}
              ></div>
            </Col>
            <Col xs={9} md={6} >
              <div
                id="kt_stats_widget_14_chart"
                className="card-rounded-bottom"
                style={{ }}
              ></div>
            </Col>
            <Col xs={18} md={12} >
              <div
                id="kt_stats_widget_15_chart"
                className="card-rounded-bottom"
                style={{ }}
              ></div>
            </Col>
            <Col xs={18} md={12} >
              <div
                id="kt_stats_widget_16_chart"
                className="card-rounded-bottom"
                style={{ }}
              ></div>
            </Col>
          </Row>
          
        </Modal.Body>
      </Modal>
    
    </div>
  );
};

const getChartOption = () => {
  const options = {
    series: [{
    name: 'Tổng thu',
    type: 'column',
    data: [111, 132, 300, 156, 167, 182, 450, 560]
  }, {
    name: 'Tổng chi',
    type: 'column',
    data: [90, 104, 60, 112, 117, 134, 102, 250]
  }, {
    name: 'Tăng trưởng',
    type: 'line',
    data: [1.1, 3.6, 2.4, 4.5, 4.0, 5.7, 7.8, 8.0]
  }],
    chart: {
      height: 250,
      type: 'line',
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [1, 1, 4]
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      labels: {
        style: { 
          colors: '#fff'
        },
      }
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB'
        },
        labels: {
          style: {
            colors: '#008FFB',
          }
        },
        title: {
          text: "Tổng thu (tỉ đồng)",
          style: {
            color: '#008FFB',
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: 'Tổng chi',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            colors: '#00E396',
          }
        },
        title: {
          text: "Tổng chi (tỉ đồng)",
          style: {
            color: '#00E396',
          }
        },
      },
      {
        seriesName: 'Tăng trưởng',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FEB019'
        },
        labels: {
          style: {
            colors: '#FEB019',
          },
        },
        title: {
          text: "Tăng trưởng(%)",
          style: {
            color: '#FEB019',
          }
        }
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
      labels: {
        colors: '#fff'
      }
    }
  }
  return options;
}

const getChartOption2 = () => {
  const options = {
    series: [{
      data: [{
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612]
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58]
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86]
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16]
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4]
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81]
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578]
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579]
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96]
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92]
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22]
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08]
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25]
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97]
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602]
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95]
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02]
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591]
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592]
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34]
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86]
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01]
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25]
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99]
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81]
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96]
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39]
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27]
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55]
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02]
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01]
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06]
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89]
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5]
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86]
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07]
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606]
        },
      ]
    }],
      chart: {
        type: 'candlestick',
        height: 250
      },s: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        },
        labels: {
          style: {
            colors: '#fff',
          }
        },
      },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#fff',
        }
      },
    },
  }
  return options;
}

const getChartOption3 = () => {
  const options = {
    series: [44, 55, 13],
      chart: {
        height: 250,
        type: 'pie',
      },
      labels: ['Nông nghiệp', 'Công nghiệp', 'Dịch vụ'],
      legend: {
        position: 'left',
        labels: {
          colors: '#fff'
        },
        horizontalAlign: 'left'
      }
  }
  return options;
}

const getChartOption4 = () => {
  const options = {  
    series: [44, 55, 41, 17, 15],
    chart: {
      height: 250,
      type: 'donut',
    },
    legend: {
      labels: {
        colors: '#fff'
      },
      horizontalAlign: 'left'
    },
    labels: ['TP Nam Định', 'Huyện Hải Hậu', 'Huyện Giao Thủy', 'Huyện Mỹ Lộc', 'Huyện Nam Trực'],
  }
  return options;
}

const getChartOption5 = () => {
  const options = { 
    series: [
      {
        data: [
          {
            x: 'Huyện Trực Ninh',
            y: [
              new Date('2019-03-02').getTime(),
              new Date('2019-03-04').getTime()
            ]
          },
          {
            x: 'Huyện Hải Hậu',
            y: [
              new Date('2019-03-04').getTime(),
              new Date('2019-03-08').getTime()
            ]
          },
          {
            x: 'TP Nam Định',
            y: [
              new Date('2019-03-08').getTime(),
              new Date('2019-03-12').getTime()
            ]
          },
          {
            x: 'Toàn tỉnh',
            y: [
              new Date('2019-03-12').getTime(),
              new Date('2019-03-18').getTime()
            ]
          }
        ]
      }
    ],
      chart: {
        height: 300,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: '#fff',
          },
          formatter: function(value, timestamp, index) {
            return moment(new Date(value)).format("D/M")
          }
        },
        
      },
      yaxis: {
        labels: {
          style: {
            colors: '#fff',
          },
          
        },
      },
  }
  return options;
}

const getChartOption6 = () => {
  const options = { 
    series: [{
      name: 'Huyện Vụ Bản',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Huyện Xuân Trường',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Huyện Ý Yên',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
      chart: {
        type: 'bar',
        height: 300
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10'],
        labels: {
          style: {
            colors: '#fff',
          }
        },
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
          style: {
            colors: '#fff',
          }
        },
        labels: {
          style: {
            colors: '#fff',
          }
        },
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      },
      legend: {
        labels: {
          colors: '#fff'
        }
      }
  }
  return options;
}
