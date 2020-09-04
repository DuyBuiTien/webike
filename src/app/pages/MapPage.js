import React, {useState, useEffect, useRef} from "react";
import {useSubheader} from "../../_metronic/layout";
import GoogleMapReact from 'google-map-react';
import { Popover, OverlayTrigger, Tooltip, Modal, Row, Col, Tab, Tabs, Toast } from 'react-bootstrap';
import ApexCharts from "apexcharts";
import moment from 'moment'
import {requestPOST, requestGET, requestGET2, requestPOSTFD, requestPOSTFCM, config, requestPOSTWSO2, APIGiamSat} from './api/basic'
import axios from 'axios'
import clsx from "clsx";

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

import "./MapPage.scss";

import { messaging } from "./init-fcm";
import Cookies from 'js-cookie';
import VideoPlayer from "./VideoPlayer"

import {AsideMenu} from './AsideMenu'
import {DashboardRightCard1} from './DashboardRightCard1'
import {DashboardRightCard2} from './DashboardRightCard2'
import {DashboardLeftCard2} from './DashboardLeftCard2'
import {DashboardLeftCard1} from './DashboardLeftCard1'
import {DashboardRightCard3} from './DashboardRightCard3'
import {DashboardLeftCard3} from './DashboardLeftCard3'
import {DashboardLeftCard4} from './DashboardLeftCard4'
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


const mapOptions = {
  styles: mapStyles,
  fullscreenControl: false,
  zoomControl: false,
  minZoom: 11
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
  const [modalCam, setModalCam] = useState(false);
  const [modalMXH, setModalMXH] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [dataModalCam, setDataModalCam] = useState({});
  const [dataMenu, setDataMenu] = useState([]);
  const [dataMenuChildren, setDataMenuChildren] = useState([]);
  const [listCamera, setListCamera] = useState([]);
  const [tokenCamera, setTokenCamera] = useState([]);

  const [listBieuDo, setListBieuDo] = useState([]);

  const [listQH, setListQH] = useState([]);

  const [warning, setWarning] = useState(false);
  const [warningData, setWarningData] = useState({});
  const [warningDataMap, setWarningDataMap] = useState([]);
  const [modalWarning, setModalWarning] = useState(false);
  const [modalWarningData, setModalWarningData] = useState({});

  const panelRef = useRef(null);
  const cartRef = useRef(null);
  const panelRefClose = useRef(null);
  const cartRefClose = useRef(null);

  useEffect(() => {
    var tokenApi = Cookies.get("token");if(!tokenApi){tokenApi="Gaz9jR6ZMg+0qi+7XiRH6g==";}
    const fetchData = async () => {
			var data1 = await requestGET(`https://dieuhanhubnd.hanhchinhcong.net/bcapi/areas/asidemenus?siteUrl=https%3A%2F%2Fdieuhanhubnd.hanhchinhcong.net%2Fsites%2Fbc_board`)
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
			var data1 = await requestGET2(`https://bcdev.tandan.com.vn/_vti_bin/td.wcf/wcfservice.svc/getOfficeByCode?code=${code}`)
      var data2 = data1.data?data1.data:[]
      setDataMap(data2)
    };
    
    const FCM = async() => {
      if (messaging){
      messaging.requestPermission()
          .then(async function() {
            var token = await messaging.getToken();
            await requestPOSTFCM(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/ND_TTDH`)
          })
          .catch(function(err) {
            console.log("Unable to get permission to notify.", err);
          });
      navigator.serviceWorker.addEventListener("message", (message) => {getWarning(message)});
      }
    }
    const fetchData2 = async() => {
      var dataF = await requestGET2('https://namdinhapi.atoma.vn:786/home/getaccesstoken?username=tandan&password=tandan123')
      var dataFC = dataF.access_token?dataF.access_token:''
      setTokenCamera(dataFC)
    }

    const fetchData3 = async() => {
      var body = {"token": tokenApi}
      var dataAll = []
      APIGiamSat.map(async(l) => {
        var data1 = await requestPOSTWSO2(`${config.wso2link}${l}/LayDanhSachQHGiamSat`, body)
        var data = data1.data?data1.data:[]
        var arr = []
        data.map((i) => dataAll.push(i.MaDonVi))
      })
      setListQH(dataAll)
    }

    fetchData()
    fetchData2()
    fetchData3()
    FCM()
    return () => {
    };
  }, []);

  const getWarning = async(message) => {
    console.log(message)
    setWarning(true)
    setWarningData(message.data.notification)
    var warning = message.data.data
    var camera = JSON.parse(warning.camera)
    warning.lat = camera.lonlat.latitude
    warning.lng = camera.lonlat.longitude
    warning.title = message.data.notification.title
    setWarningDataMap(oldArray => [...oldArray, warning]);
    
  }

  useEffect(() => {
    var dataC = dataMenu.length>0?dataMenu[activeMenu].children:[]
    var bcID = dataMenu.length>0?dataMenu[activeMenu].badge:'2038'
    dataC.forEach((i,index) => {
      i.id = index
    });
    setDataMenuChildren(dataC)
    setBaoCaoID(bcID)
    if(active == 0){
      const fetchData = async () => {
      var code = dataMenu.length>0?dataMenu[activeMenu].children[0].code:''
      var svg =  dataMenu.length>0?dataMenu[activeMenu].children[0]['icon-class']:'media/icons/UB.png'
      var data1 = await requestGET2(`https://bcdev.tandan.com.vn/_vti_bin/td.wcf/wcfservice.svc/getOfficeByCode?code=${code}`)
      var data2 = data1.data?data1.data:[]
      setDataMap(data2)
      setSvg(svg)
    };
    fetchData()
    }
    else{
      setActive(0)
    }
    return () => {
    };
  }, [activeMenu]);

  useEffect(() => {
    const fetchData = async () => {
      var code = dataMenu.length>0?dataMenu[activeMenu].children[active].code:''
			var data1 = await requestGET2(`https://bcdev.tandan.com.vn/_vti_bin/td.wcf/wcfservice.svc/getOfficeByCode?code=${code}`)
      var data2 = data1.data?data1.data:[]
      setDataMap(data2)
		};
		fetchData()
    return () => {
    };
  }, [active]);

  useEffect(() => {
    var tokenApi = Cookies.get("token");if(!tokenApi){tokenApi="Gaz9jR6ZMg+0qi+7XiRH6g==";}
        
    const fetchData = async() => {
      if(modal){
      var body = {"token": tokenApi}
      APIGiamSat.map(async(l) => {
      var data1 = await requestPOSTWSO2(`${config.wso2link}${l}/LayDanhSachAPIGiamSat`, body)
      var data = data1.data?data1.data:{}
      if(data){
        var bieuDo = data.bieuDo?data.bieuDo:[]
        setListBieuDo(oldArray => [...oldArray,...bieuDo]);
        bieuDo.map(async(i) => {
          var element = document.getElementById(i.function);

          if (!element) {
            return;
          }
          switch (i.type) {
            case "tron":
              var body = {"token": tokenApi, "function": i.function, "fromDate": "2020-01-01T00:00:00", "toDate": "2020-12-31T00:00:00", "maDonVi": dataModal.MaDonVi}
              var data1 = await requestPOSTWSO2(`${config.wso2link}${l}/LayDuLieuBieuDoTron`, body)
              var data = data1.data?data1.data:[]
              var serie = []
              var label = []
              if(data.length>0){
                data.map((k) => {
                  serie.push(k.value)
                  label.push(k.category)
                })
                var options = getChartOption(serie,label);
                var chart = new ApexCharts(element, options);
                chart.render();
              }
              break;
            
            case "cot":
              var body = {"token": tokenApi, "function": i.function, "fromDate": "2020-01-01T00:00:00", "toDate": "2020-12-31T00:00:00", "maDonVi": dataModal.MaDonVi}
              var data1 = await requestPOSTWSO2(`${config.wso2link}${l}/LayDuLieuBieuDoCot`, body)
              var data = data1.data?data1.data:[]
              var serie = []
              var label = []
              if(data.length>0){
                data.map((k) => {
                  serie.push(k.value)
                  label.push(k.category)
                })
                var options = getChartOption2(serie,label);
                var chart = new ApexCharts(element, options);
                chart.render();
              }
              break;
            
            default:
              break;
          }
          
        })
      }
      })
    }
    else{
      setListBieuDo([])
    }
    }
    fetchData()
    return function cleanUp() {
      // chart.destroy();
      // chart2.destroy();
    };
  }, [modal]);

  const setActiveMenuData = (id) => {
    setActiveMenu(id)
    panelRefClose.current.click()
    cartRefClose.current.click()
    setTimeout(() => {
      panelRef.current.click()
      cartRef.current.click()
    }, 1000)
  }

  const AnyReactComponent = ({ item, svg, setModal, setDataModal, checkQH }) => (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={<Tooltip className="tooltip-item">{item.Ten}</Tooltip>
  }
    >
      <span onClick={() => setModal(true) + setDataModal(item) + getDataCam(item.CamGroupID) + panelRefClose.current.click() + cartRefClose.current.click()} 
      className={clsx("svg-icon svg-icon-2x", {
        blink: checkQH,
      })}
      >
        <img src={svg} />
      </span>
    </OverlayTrigger>
  );

  const checkModalWarningData = async(item) => {
    var images = []
    if(item.image_path)
    {
      if(item.image_path.includes(".png")){
        images.push(item.image_path)
      }
      else{
        var data1 = await requestGET2(`https://namdinhapi.atoma.vn:786/files/getfilesinfolder?path=${item.image_path}`)
        var data = data1.Results?data1.Results:[]
        data.map((i) => i.fullpath = encodeURIComponent(i.fullpath))
        data.map((j) => images.push(j.fullpath.replace('%5C%5C', '%5C')))
      }
    }
    item.images = images
    setModalWarningData(item)
  }

  const AnyReactComponent1 = ({ item, setModalWarning}) => (
      <span onClick={() => setModalWarning(true) + checkModalWarningData(item) + panelRefClose.current.click() + cartRefClose.current.click()} className="svg-icon blink svg-icon-2x">
        <img src="media/icons/caution.png" />
      </span>
  );

  const AnyReactComponent2 = ({setModalCam, setDataModalCam, item}) => (
    <span onClick={() => setModalCam(true) + setDataModalCam(item) + panelRefClose.current.click() + cartRefClose.current.click()} className="svg-icon svg-icon-2x">
      <img src="media/icons/cctv.png" />
    </span>
);
  
  const getDataCam = async(camID) => {
    // var data1 = await requestGET2(`https://camera.tandan.com.vn/zm/api/monitors/index/GroupId:${camID}/.json?token=${tokenCamera}`)
    // var data2 = data1.monitors?data1.monitors:[]
    // setListCamera(data2)
  }

  return (
    <div style={{width: '100%', height: '100%'}}>
      <Toast show={warning} className='toast-warning' onClose={() => setWarning(false)} autohide>
        <Toast.Header>
        <strong className="mr-auto">{warningData.title}</strong>
          <small>Bây giờ</small>
        </Toast.Header>
        <Toast.Body>{warningData.body}</Toast.Body>
      </Toast>
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
          checkQH={listQH.includes(i.MaDonVi)}
        />
        ))}
        {warningDataMap.map(j => (
        <AnyReactComponent1
          key={j.ID}
          lat={j.lat}
          lng={j.lng}
          item={j}
          setModalWarning={setModalWarning}
        />
        ))}
        {listCamera.map(k => (
        <AnyReactComponent2
          key={k.id}
          lat={k.lat}
          lng={k.long}
          setModalCam={setModalCam}
          setDataModalCam={setDataModalCam}
          item={k}
        />
        ))}
      </GoogleMapReact>
      <a ref={cartRef} className="button-toggle-left" id="kt_quick_cart_toggle">
        <span class="svg-icon svg-icon-primary svg-icon-2x">
        <SVG
            title=" "
            src={toAbsoluteUrl(
                "/media/svg/icons/Layout/Layout-right-panel-2.svg"
            )}
        ></SVG>
        </span>
      </a>

      <a ref={cartRefClose} className="button-close-left" id="kt_quick_cart_close"></a>

      <a ref={panelRef} className="button-toggle-right" id="kt_quick_panel_toggle">
        <span class="svg-icon svg-icon-primary svg-icon-2x">
        <SVG
          title=" "
          src={toAbsoluteUrl(
              "/media/svg/icons/Layout/Layout-right-panel-2.svg"
          )}
        ></SVG>
        </span>
      </a>

      <a ref={panelRefClose} className="button-close-right" id="kt_quick_panel_close"></a>

      <a target="_blank" href="https://dieuhanhubnd.hanhchinhcong.net/sites/dashboard/SitePages/dashboard.aspx" className="button-toggle-right-2">
        <span class="svg-icon svg-icon-primary svg-icon-2x">
        <SVG
            src={toAbsoluteUrl(
                "/media/svg/icons/Home/Home.svg"
            )}
            title="Trung tâm điều hành"
        ></SVG>
        </span>
      </a>

      <LayerDropdownLeft dataMenuChildren={dataMenuChildren} setActive={setActive} active={active} setSvg={setSvg} />

      <LayerDropdownRight tokenCamera={tokenCamera} setListCamera={setListCamera} setWarningDataMap={setWarningDataMap} />
      
      <div id="kt_quick_cart" className="offcanvas offcanvas-left p-0 offcanvas-on kt-quick-aside kt-quick-aside-left">

        <div class="offcanvas-content">

          <DashboardLeftCard1 />

	        <div class="offcanvas-wrapper mb-4 scroll-pull" id="kt_quick_cart_logs">
            <div class="card card-custom mb-4" id="text-card" >
            <div class="card-header px-2 py-0">
              <div class="card-title font-weight-bolder">
                  <div class="card-label">
                      <span class="d-block text-light font-weight-bolder">Báo cáo</span>
                  </div>
              </div>
					    </div>
              </div>
            <Component iframe={`<iframe frameborder="0" scrolling="no" class="iframe-bc" height=100% src="https://baocao.namdinh.gov.vn/_vti_bin/TD.WCF/WCFService.svc/GetUrlPublic?Token=R2F6OWpSNlpNZyswcWkrN1hpUkg2Zz09&UrlRedirect=https://baocao.namdinh.gov.vn/sites/bc_board/SitePages/dashboard_dh.aspx#${BaoCaoID}"></iframe>`} />
          </div>

        </div>

      </div>
      <div id="kt_quick_panel" className="offcanvas offcanvas-right p-0 offcanvas-on kt-quick-aside kt-quick-aside-right">

        <div class="offcanvas-content">

	        <div class="offcanvas-wrapper mb-5 scroll-pull" id="kt_quick_panel_logs" data-max-height="300">
            <DashboardLeftCard2 />
            
            <DashboardLeftCard3 />

            <DashboardLeftCard4 tokenCamera={tokenCamera}/>
            
            <div class="card card-custom mb-4" id="text-card1" onClick={() => setModalMXH(true) + panelRefClose.current.click() + cartRefClose.current.click()} >
            <div class="card-header px-2 py-0">
              <div class="card-title font-weight-bolder">
                  <div class="card-label">
                    <span class="d-block text-light font-weight-bolder">Lắng nghe MXH</span>
                  </div>
                  <i class="fas fa-info-circle" style={{color:'#187DE4'}}></i>
              </div>
					    </div>
              </div>

              <div class="card card-custom mb-4" id="text-card1" onClick={() => {}} >
            <div class="card-header px-2 py-0">
              <div class="card-title font-weight-bolder">
                  <div class="card-label">
                      <span class="d-block text-light font-weight-bolder">Theo dõi an ninh mạng</span>
                  </div>
                  <i class="fas fa-info-circle" style={{color:'#187DE4'}}></i>
              </div>
					    </div>
              </div>
            
          </div>

        </div>

      </div>
      

      <Modal
        show={modal}
        onHide={() => setModal(false) + panelRef.current.click() + cartRef.current.click()}
        aria-labelledby="example-custom-modal-styling-title"
        dialogClassName="modal-50w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {dataModal.Ten}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tabs defaultActiveKey="baocaott" id="controlled-tab-example">
          <Tab eventKey="baocaodh" title="Báo cáo điều hành">
            <Row>
            {listBieuDo.map((i) => (
              <Col xs={9} md={6}>
              <h3 className="bieuDo-tite">{i.title}</h3>
              <div
                id={i.function}
                className="card-rounded-bottom"
                style={{ }}
              ></div>
              </Col>
            ))}
            </Row>
          </Tab>
          <Tab eventKey="baocaott" title="Báo cáo trực tuyến">
            <Component iframe={`<iframe frameborder="0" scrolling="no" class="iframe-bc" width=100% height=600px src="https://baocao.namdinh.gov.vn/_vti_bin/TD.WCF/WCFService.svc/GetUrlPublic?Token=R2F6OWpSNlpNZyswcWkrN1hpUkg2Zz09&UrlRedirect=https://baocao.namdinh.gov.vn/sites/bc_board/SitePages/dashboard_dh.aspx#${dataModal.BaoCaoID}"></iframe>`} />
          </Tab>
        </Tabs>
        </Modal.Body>
      </Modal>
 
      <Modal
        show={modalMXH}
        onHide={() => setModalMXH(false)  + panelRef.current.click() + cartRef.current.click()}
        aria-labelledby="example-custom-modal-styling-title"
        dialogClassName="modal-50w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Lắng nghe mạng xã hội
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Component iframe={`<iframe frameborder="0" class="iframe-bc" width=100% height=600px src="https://namndinh.netview.vn/redirect/eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1NiIsImlhdCI6MTU5ODU4NDkwOX0.0uWiiu_xxtfgI4s_rU5ZW6s1Ey4di0nQiNAJ5SnjcsOmFy_MTA231c3RhssUJ8Cd-GIlho6rkMn5SFyvBRYNUw?navigate=common-report"></iframe>`} />
        </Modal.Body>
      </Modal>
      
      <Modal
        show={modalWarning}
        onHide={() => setModalWarning(false)  + panelRef.current.click() + cartRef.current.click()}
        aria-labelledby="example-custom-modal-styling-title"
        dialogClassName="modal-50w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {modalWarningData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="bieuDo-tite">Hình ảnh</h3>
          {modalWarningData.images?
          <div className="row" id="canhBao-images">
          {modalWarningData.images.map((i) => (
            <img width='30%' height={200} src={`https://namdinhapi.atoma.vn:786/files/download?path=${i}`} />
          ))}
          </div>
          :<></>}
          <h3 className="bieuDo-tite">Video</h3>
          {modalWarningData.video_path?
          <video autoPlay width='100%' height={300} controls src={`https://namdinhapi.atoma.vn:786/files/download?path=${encodeURIComponent(modalWarningData.video_path)}`}>
              <source type="application/x-mpegURL" />
          </video>
          :<></>}
        </Modal.Body>
      </Modal>
      <Modal
        show={modalCam}
        onHide={() => setModalCam(false)  + panelRef.current.click() + cartRef.current.click()}
        aria-labelledby="example-custom-modal-styling-title"
        dialogClassName="modal-50w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {dataModalCam.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VideoPlayer src={dataModalCam.m3u8_url} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

const getChartOption = (serie,label) => {
    const options = {
      series: serie,
      colors:['#2196F3','#f44336', '#FF9800', '#4CAF50', ],
        chart: {
          height: 200,
          type: 'pie',
        },
        labels: label,
        legend: {
          position: 'right',
          labels: {
            colors: '#fff'
          },
          horizontalAlign: 'right'
        }
    }
    return options;
}

const getChartOption2 = (serie,label) => {
  const options = {     
    series: [{
      name: ' ',
      data: serie
    }],
      chart: {
        height: 250,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '10px',
          colors: ["#fff"]
        }
      },
      
      xaxis: {
        categories: label,
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: false,
        },
        labels: {
          style: {
            fontSize: '10px',
            colors: "#fff"
          }
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      
      },
  }
  return options;
}

