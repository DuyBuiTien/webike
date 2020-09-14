import React, { useState, useEffect, useRef } from 'react'
import { useSubheader } from '../../_metronic/layout'
import GoogleMapReact from 'google-map-react'
import {
  Popover,
  OverlayTrigger,
  Tooltip,
  Modal,
  Row,
  Col,
  Tab,
  Tabs,
  Toast,
  Form,
  Button
} from 'react-bootstrap'
import ApexCharts from 'apexcharts'
import moment from 'moment'
import {
  requestPOST,
  requestGET,
  requestGET2,
  requestPOSTFD,
  requestPOSTFCM,
  config,
  requestPOSTWSO2,
  APIGiamSat,
  requestGETMQ
} from './api/basic'
import axios from 'axios'
import clsx from 'clsx'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as html2canvas from 'html2canvas'
import { vi } from 'date-fns/locale'
import { BacGiangData } from './data/BacGiangData'
import { HiepHoaData } from './data/HiepHoaData'
import { LangGiangData } from './data/LangGiangData'
import { LucNamData } from './data/LucNamData'
import { LucNganData } from './data/LucNganData'
import { SonDongData } from './data/SonDongData'
import { TanYenData } from './data/TanYenData'
import { YenDungData } from './data/YenDungData'
import { YenTheData } from './data/YenTheData'
import { VietYenData } from './data/VietYenData'

import './MapPage.scss'

import { messaging } from './init-fcm'
import Cookies from 'js-cookie'
import VideoPlayer from './VideoPlayer'

import { AsideMenu } from './AsideMenu'
import { DashboardRightCard1 } from './DashboardRightCard1'
import { DashboardRightCard2 } from './DashboardRightCard2'
import { DashboardLeftCard2 } from './DashboardLeftCard2'
import { DashboardLeftCard1 } from './DashboardLeftCard1'
import { DashboardRightCard3 } from './DashboardRightCard3'
import { DashboardLeftCard3 } from './DashboardLeftCard3'
import { DashboardLeftCard4 } from './DashboardLeftCard4'
import SVG from 'react-inlinesvg'
import { toAbsoluteUrl } from '../../_metronic/_helpers'
import { LayerDropdownLeft } from './LayerDropdownLeft'
import { LayerDropdownRight } from './LayerDropdownRight'
const mapStyles = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e'
      }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855'
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563'
      }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c'
      }
    ]
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948'
      }
    ]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c'
      }
    ]
  }
]

const mapOptions = {
  styles: mapStyles,
  fullscreenControl: false,
  zoomControl: false,
  minZoom: 11
}

const loadPolygonMap = data => {
  var bacGiangCoord = []

  for (let index = 0; index < data.length; index++) {
    let coord = {}
    if (index % 2 == 1) {
      coord.lat = data[index]
      coord.lng = data[index + 1]
      bacGiangCoord.push(coord)
    }
  }

  const reversedCoords = bacGiangCoord.map(ll => {
    return { lat: ll.lng, lng: ll.lat }
  })

  return reversedCoords
}

const handleApiLoaded = (map, maps) => {
  const BacGiang = loadPolygonMap(BacGiangData)
  const HiepHoa = loadPolygonMap(HiepHoaData)
  const LangGiang = loadPolygonMap(LangGiangData)
  const LucNam = loadPolygonMap(LucNamData)
  const LucNgan = loadPolygonMap(LucNganData)
  const SonDong = loadPolygonMap(SonDongData)
  const TanYen = loadPolygonMap(TanYenData)
  const VietYen = loadPolygonMap(VietYenData)
  const YenDung = loadPolygonMap(YenDungData)
  const YenThe = loadPolygonMap(YenTheData)

  var bacGiang = new maps.Polygon({
    paths: BacGiang,
    strokeColor: '#f44336',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#e53935',
    fillOpacity: 0.35
  })
  var hiepHoa = new maps.Polygon({
    paths: HiepHoa,
    strokeColor: '#f44336',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#D81B60',
    fillOpacity: 0.35
  })
  var langGiang = new maps.Polygon({
    paths: LangGiang,
    strokeColor: '#f44336',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#AB47BC',
    fillOpacity: 0.35
  })

  var lucNam = new maps.Polygon({
    paths: LucNam,
    strokeColor: '#f44336',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#BDBDBD',
    fillOpacity: 0.35
  })

  var lucNgan = new maps.Polygon({
    paths: LucNgan,
    strokeColor: '#f44336',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#5C6BC0',
    fillOpacity: 0.35
  })

  var sonDong = new maps.Polygon({
    paths: SonDong,
    strokeColor: '#f44336',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#42A5F5',
    fillOpacity: 0.35
  })

  var tanYen = new maps.Polygon({
    paths: TanYen,
    strokeColor: '#f44336',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#8D6E63',
    fillOpacity: 0.35
  })

  var vietYen = new maps.Polygon({
    paths: VietYen,
    strokeColor: '#f44336',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#D4E157',
    fillOpacity: 0.35
  })

  var yenDung = new maps.Polygon({
    paths: YenDung,
    strokeColor: '#f44336',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FFA726',
    fillOpacity: 0.35
  })

  var yenThe = new maps.Polygon({
    paths: YenThe,
    strokeColor: '#f44336',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#66BB6A',
    fillOpacity: 0.35
  })

  bacGiang.setMap(map)
  hiepHoa.setMap(map)
  langGiang.setMap(map)
  lucNam.setMap(map)
  lucNgan.setMap(map)
  sonDong.setMap(map)
  tanYen.setMap(map)
  vietYen.setMap(map)
  yenDung.setMap(map)
  yenThe.setMap(map)
}

const Component = () => ({
  iframe: function () {
    return {
      __html: this.props.iframe
    }
  },

  render: function () {
    return (
      <div style={{ height: '100%' }} dangerouslySetInnerHTML={this.iframe()} />
    )
  }
})

registerLocale('vi', vi)
setDefaultLocale('vi')
moment.locale('vi')

export const MapPage = () => {
  const [dataMap, setDataMap] = useState([])
  const [active, setActive] = useState(0)
  const [BaoCaoID, setBaoCaoID] = useState(39)
  const [activeMenu, setActiveMenu] = useState(0)
  const [svg, setSvg] = useState('/media/svg/icons/Design/Component.svg')
  const [modal, setModal] = useState(false)
  const [modalCam, setModalCam] = useState(false)
  const [modalMXH, setModalMXH] = useState(false)
  const [modalCDDH, setModalCDDH] = useState(false)
  const [dataModal, setDataModal] = useState({})
  const [dataModalCam, setDataModalCam] = useState({})
  const [dataMenu, setDataMenu] = useState([])
  const [dataMenuChildren, setDataMenuChildren] = useState([])
  const [listCamera, setListCamera] = useState([])
  const [tokenCamera, setTokenCamera] = useState([])
  const [token, setToken] = useState('')
  
  const [dataNDV, setDataNDV] = useState([])
  const [dataLV, setDataLV] = useState([])
  const [dataUser, setDataUser] = useState([])
  const [dataGroup, setDataGroup] = useState([])
  const [NDV, setNDV] = useState('')
  const [NDVText, setNDVText] = useState('')
  const [LV, setLV] = useState('')
  const [LVText, setLVText] = useState('')
  const [DVXL, setDVXL] = useState('')
  const [DVXLText, setDVXLText] = useState('')
  const [NXL, setNXL] = useState('')
  const [NXLText, setNXLText] = useState('')
  const [DVPH, setDVPH] = useState('')
  const [DVPHText, setDVPHText] = useState('')
  const [NPH, setNPH] = useState('')
  const [NPHText, setNPHText] = useState('')
  const [NTD, setNTD] = useState('')
  const [NTDText, setNTDText] = useState('')
  const [HXL, setHXL] = useState('')
  const [NDCV, setNDCV] = useState('')

  const [image, setImage] = useState('')

  const [files, setFiles] = useState([])

  const [listBieuDo, setListBieuDo] = useState([])

  const [listQH, setListQH] = useState([])

  const [warning, setWarning] = useState(false)
  const [warningData, setWarningData] = useState({})
  const [warningDataMap, setWarningDataMap] = useState([])
  const [modalWarning, setModalWarning] = useState(false)
  const [modalWarningData, setModalWarningData] = useState({})
  const [modalWarningList, setModalWarningList] = useState(false)
  const [modalWarningListData, setModalWarningListData] = useState([])
  const [modalCamera, setModalCamera] = useState(false)
  const [modalCameraData, setModalCameraData] = useState([])
  const [dataAll, setDataAll] = useState([])
  const [modalMix, setModalMix] = useState(false)
  const [modalMixData1, setModalMixData1] = useState([])
  const [modalMixData2, setModalMixData2] = useState([])
  const [eventType, setEventType] = useState([])

  const panelRef = useRef(null)
  const cartRef = useRef(null)
  const panelRefClose = useRef(null)
  const cartRefClose = useRef(null)

  useEffect(() => {
    var tokenApi = Cookies.get('token')
    if (!tokenApi) {
      tokenApi =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTk5MDI2NTYsImV4cCI6MTU5OTk4OTA1Niwic3ViIjoiZGVtbzEiLCJoYXNocHdkIjoiemZDVHlhK0FQYmhPYmwvcFBTNVVYUT09IiwiY29udGV4dCI6eyJ1c2VyIjp7InVzZXJOYW1lIjoiZGVtbzEiLCJkaXNwbGF5TmFtZSI6ImRlbW8xIn19fQ.I_fJ_GsX9xxTs2d-BxlPamNH9T4VmsCwVFbH91bBWbY'
    }
    setToken(tokenApi)
    const fetchData = async () => {
      var data1 = await requestGET(
        `https://dieuhanhubnd.hanhchinhcong.net/bcapi/areas/asidemenus?siteUrl=https%3A%2F%2Fdieuhanhubnd.hanhchinhcong.net%2Fsites%2Fbc_board`
      )
      var dataM = data1.result ? data1.result.items : []
      dataM.forEach((i, index) => {
        i.id = index
      })
      setDataMenu(dataM)
      dataM[0].children.forEach((i, index) => {
        i.id = index
      })
      setDataMenuChildren(dataM[0].children)
      var code = dataM.length > 0 ? dataM[0].children[0].code : ''
      var data1 = await requestGET2(
        `https://bcdev.tandan.com.vn/_vti_bin/td.wcf/wcfservice.svc/getOfficeByCode?code=${code}&country=BG`
      )
      var data2 = data1.data ? data1.data : []
      setDataMap(data2)
    }

    const FCM = async () => {
      if (messaging) {
        messaging
          .requestPermission()
          .then(async function () {
            var token = await messaging.getToken()
            await requestPOSTFCM(
              `https://iid.googleapis.com/iid/v1/${token}/rel/topics/BG_TTDH`
            )
          })
          .catch(function (err) {
            console.log('Unable to get permission to notify.', err)
          })
        navigator.serviceWorker.addEventListener('message', message => {
          getWarning(message)
        })
      }
    }
    const fetchData2 = async () => {
      var body = { username: 'ictadmin', password: 'MQ1234' }
      var dataF = await requestPOST('https://crm.mqsolutions.vn/auth', body)
      var dataFC = dataF.access_token ? dataF.access_token : ''
      console.log(dataFC)
      setTokenCamera(dataFC)
    }

    const fetchData3 = async () => {
      var body = { token: tokenApi }
      var dataAll = []
      APIGiamSat.map(async l => {
        var data1 = await requestPOSTWSO2(
          `${config.wso2link}${l.api}/LayDanhSachQHGiamSat`,
          body
        )
        var data = data1.data ? data1.data : []
        var arr = []
        data.map(i => dataAll.push(i.MaDonVi))
      })
      setListQH(dataAll)
    }

    const fetchData4 = async () => {
      var maDonVi = sessionStorage.getItem('maDonVi')
      if (!maDonVi) {
        maDonVi = '000-00-12-H40'
      }
      var body = { token: tokenApi }
      var body1 = { token: tokenApi, donVi: maDonVi }

      var data1 = await requestPOSTWSO2(
        `${config.wso2link}UBNDCDDH/LayDSNguonCongViec`,
        body
      )
      var data = data1.data ? data1.data : []
      setDataNDV(data)

      var data2 = await requestPOSTWSO2(
        `${config.wso2link}UBNDCDDH/LayDsLinhVuc`,
        body
      )
      var data3 = data2.data ? data2.data : []
      setDataLV(data3)

      var data4 = await requestPOSTWSO2(
        `${config.wso2link}UBNDCDDH/GetDataGroup`,
        body1
      )
      var data5 = data4.data ? data4.data : []
      setDataGroup(data5)

      var data6 = await requestPOSTWSO2(
        `${config.wso2link}UBNDCDDH/GetDataUser`,
        body1
      )
      var data7 = data6.data ? data6.data : []
      setDataUser(data7)
    }

    fetchData()
    fetchData2()
    fetchData3()
    FCM()
    fetchData4()
    return () => {}
  }, [])

  useEffect(() => {
    setNDV('')
    setLV('')
    setDVXL('')
    setNXL('')
    setDVPH('')
    setNPH('')
    setNTD('')
    setNDCV('')
    setHXL('')
    return () => {}
  }, [modalCDDH])

  const getWarning = async message => {
    console.log(message)
    setWarning(true)
    setWarningData(message.data.notification)
    var warning = message.data.data
    var camera = JSON.parse(warning.camera)
    warning.lat = camera.lonlat.latitude
    warning.lng = camera.lonlat.longitude
    warning.title = message.data.notification.title
    setWarningDataMap(oldArray => [...oldArray, warning])
  }

  useEffect(() => {
    var dataC = dataMenu.length > 0 ? dataMenu[activeMenu].children : []
    var bcID = dataMenu.length > 0 ? dataMenu[activeMenu].badge : '2038'
    dataC.forEach((i, index) => {
      i.id = index
    })
    setDataMenuChildren(dataC)
    setBaoCaoID(bcID)
    if (active == 0) {
      const fetchData = async () => {
        var code =
          dataMenu.length > 0 ? dataMenu[activeMenu].children[0].code : ''
        var svg =
          dataMenu.length > 0
            ? dataMenu[activeMenu].children[0]['icon-class']
            : 'media/icons/UB.png'
        var data1 = await requestGET2(
          `https://bcdev.tandan.com.vn/_vti_bin/td.wcf/wcfservice.svc/getOfficeByCode?code=${code}&country=BG`
        )
        var data2 = data1.data ? data1.data : []
        setDataMap(data2)
        setSvg(svg)
      }
      fetchData()
    } else {
      setActive(0)
    }
    return () => {}
  }, [activeMenu])

  useEffect(() => {
    const fetchData = async () => {
      var code =
        dataMenu.length > 0 ? dataMenu[activeMenu].children[active].code : ''
      var data1 = await requestGET2(
        `https://bcdev.tandan.com.vn/_vti_bin/td.wcf/wcfservice.svc/getOfficeByCode?code=${code}&country=BG`
      )
      var data2 = data1.data ? data1.data : []
      setDataMap(data2)
    }
    fetchData()
    return () => {}
  }, [active])

  useEffect(() => {
    const fetchData = async () => {
      if (modal) {
        var body = { token: token }
        APIGiamSat.map(async l => {
          var data1 = await requestPOSTWSO2(
            `${config.wso2link}${l.api}/LayDanhSachAPIGiamSat`,
            body
          )
          var data = data1.data ? data1.data : {}
          if (data) {
            var bieuDo = data.bieuDo ? data.bieuDo : []
            setListBieuDo(oldArray => [...oldArray, ...bieuDo])
            bieuDo.map(async i => {
              var element = document.getElementById(i.function)
              i.site = l.site
              if (!element) {
                return
              }
              switch (i.type) {
                case 'tron':
                  var body = {
                    token: token,
                    function: i.function,
                    fromDate: '2020-01-01T00:00:00',
                    toDate: '2020-12-31T00:00:00',
                    maDonVi: dataModal.MaDonVi
                  }
                  var data1 = await requestPOSTWSO2(
                    `${config.wso2link}${l.api}/LayDuLieuBieuDoTron`,
                    body
                  )
                  var data = data1.data ? data1.data : []
                  var serie = []
                  var label = []
                  if (data.length > 0) {
                    data.map(k => {
                      serie.push(k.value)
                      label.push(k.category)
                    })
                    var options = getChartOption(serie, label)
                    var chart = new ApexCharts(element, options)
                    chart.render()
                  }
                  break

                case 'cot':
                  var body = {
                    token: token,
                    function: i.function,
                    fromDate: '2020-01-01T00:00:00',
                    toDate: '2020-12-31T00:00:00',
                    maDonVi: dataModal.MaDonVi
                  }
                  var data1 = await requestPOSTWSO2(
                    `${config.wso2link}${l.api}/LayDuLieuBieuDoCot`,
                    body
                  )
                  var data = data1.data ? data1.data : []
                  var serie = []
                  var label = []
                  if (data.length > 0) {
                    data.map(k => {
                      serie.push(k.value)
                      label.push(k.category)
                    })
                    var options = getChartOption2(serie, label)
                    var chart = new ApexCharts(element, options)
                    chart.render()
                  }
                  break

                default:
                  break
              }
            })
          }
        })
      } else {
        setListBieuDo([])
      }
    }
    fetchData()
    return function cleanUp () {
      // chart.destroy();
      // chart2.destroy();
    }
  }, [modal])

  useEffect(() => {
    const fetchData = async(token)=>{
      var data = requestGETMQ(`https://crm.mqsolutions.vn/api/v1/eventtypes`,token)
      setEventType(data.events)
    }
    if(tokenCamera){
      fetchData(tokenCamera)
    }
    return () => {
    }
  }, [tokenCamera])

  const setActiveMenuData = id => {
    setActiveMenu(id)
    panelRefClose.current.click()
    cartRefClose.current.click()
    setTimeout(() => {
      panelRef.current.click()
      cartRef.current.click()
    }, 1000)
  }

  const controlNDV = e => {
    setNDV(e.value)
    setNDVText(e[e.selectedIndex].text)
  }

  const controlLV = e => {
    setLV(e.value)
    setLVText(e[e.selectedIndex].text)
  }

  const controlDVXL = e => {
    setDVXL(e.value)
    setDVXLText(e[e.selectedIndex].text)
  }

  const controlNXL = e => {
    setNXL(e.value)
    setNXLText(e[e.selectedIndex].text)
  }

  const controlDVPH = e => {
    setDVPH(e.value)
    setDVPHText(e[e.selectedIndex].text)
  }

  const controlNPH = e => {
    setNPH(e.value)
    setNPHText(e[e.selectedIndex].text)
  }

  const controlNTD = e => {
    setNTD(e.value)
    setNTDText(e[e.selectedIndex].text)
  }

  const creatCDDH = func => {
    setModal(false)
    setModalCDDH(true)
    html2canvas(document.getElementById(`${func}-all`), {
      backgroundColor: 'rgba(0,0,0,0.6'
    }).then(function (canvas) {
      var base64image = canvas.toDataURL('image/png')
      setImage(base64image)
    })
  }

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsBinaryString(file)
      reader.onload = () => resolve(btoa(reader.result))
      reader.onerror = error => reject(error)
    })
  }

  const sendCDDH = async () => {
    var dinhKem = ''
    let _count = 0
    if (files.length > 0) {
      for (var i = 0; i < files.length; i++) {
        var _name = files[i].name
        var _base64 = await getBase64(files[i])
        var body = { token: token, FileName: _name, FileBase64: _base64 }
        var data1 = await requestPOSTWSO2(
          `${config.wso2link}UBNDCDDH/UploadFileCongViec`,
          body
        )
        if (data1.error.code == 200) {
          toast('Tải lên file thành công!', { type: 'dark' })
          _count++
          var data = data1.data ? data1.data : ''
          dinhKem += data + '##'
          if (_count == files.length) {
            if (image !== '') {
              var __base64 = image.split(',')[1]
              var __name = new Date().getTime() + '.png'

              var body1 = {
                token: token,
                FileName: __name,
                FileBase64: __base64
              }
              var data2 = await requestPOSTWSO2(
                `${config.wso2link}UBNDCDDH/UploadFileCongViec`,
                body1
              )
              if (data2.error.code == 200) {
                toast('Tải lên file thành công!', { type: 'dark' })
                dinhKem += data2.data + '##'
                finishCDDH(dinhKem)
              }
            }
          }
        }
      }
    } else {
      if (image !== '') {
        var __base64 = image.split(',')[1]
        var __name = new Date().getTime() + '.png'

        var body1 = { token: token, FileName: __name, FileBase64: __base64 }
        var data2 = await requestPOSTWSO2(
          `${config.wso2link}UBNDCDDH/UploadFileCongViec`,
          body1
        )
        if (data2.error.code == 200) {
          toast('Tải lên file thành công!', { type: 'dark' })
          dinhKem += data2.data + '##'
          finishCDDH(dinhKem)
        }
      }
    }
  }

  const finishCDDH = async dinhKem => {
    var form_data = {
      token: token,
      DonVi: '',
      action: 'ThemMoi',
      NoiDungCongViec: NDCV,
      ThoiGianBatDau: moment().format('YYYY-MM-DD'),
      ThoiGianKetThuc: moment().format('YYYY-MM-DD'),
      NguoiTheoDoi: NTD,
      TenNguoiTheoDoi: NTDText,
      NguonDauVao: NDV,
      NguonDauVaoText: NDVText,
      LinhVuc: LV,
      TaiLieuDinhKem: dinhKem.replace(/#$/, '').replace(/#$/, ''),
      NguoiTao: '',
      TenNguoiTao: '',
      IDs: '',
      MaCongViec: '',
      IDLienKetNguon: '',
      TextLienKetNguon: '',
      DonViXuLy: DVXL,
      TenDonViXuLy: DVXLText,
      DonViPhoiHop: DVPH,
      TenDonViPhoiHop: DVPHText,
      NguoiXuLy: NXL,
      TenNguoiXuLy: NXLText,
      NguoiPhoiHop: NPH,
      TenNguoiPhoiHop: NPHText
    }
    var data1 = await requestPOSTWSO2(
      `${config.wso2link}UBNDCDDH/XuLyCongViec`,
      JSON.stringify(form_data)
    )
    console.log(data1)
    if (data1.error.code == 200) {
      toast('Tạo công việc thành công!', { type: 'dark' })
      setModalCDDH(false)
      setModal(true)
    } else {
      toast('Tạo công việc thành công!', { type: 'warning' })
    }
  }

  const AnyReactComponent = ({
    item,
    svg,
    setModal,
    setDataModal,
    checkQH
  }) => (
    <OverlayTrigger
      placement='bottom'
      delay={{ show: 250, hide: 400 }}
      overlay={<Tooltip className='tooltip-item'>{item.Ten}</Tooltip>}
    >
      <span
        onClick={() =>
          setModal(true) +
          setDataModal(item) +
          getDataCam(item.CamGroupID) +
          panelRefClose.current.click() +
          cartRefClose.current.click()
        }
        className={clsx('svg-icon svg-icon-2x', {
          blink: checkQH
        })}
      >
        {item.ID == 42 ? <img src='media/icons/TP.png' /> : <img src={svg} />}
      </span>
    </OverlayTrigger>
  )

  const checkModalWarningData = async item => {
    var images = []
    if (item.image_path) {
      if (item.image_path.includes('.png')) {
        images.push(item.image_path)
      } else {
        var data1 = await requestGET2(
          `https://namdinhapi.atoma.vn:786/files/getfilesinfolder?path=${item.image_path}`
        )
        var data = data1.Results ? data1.Results : []
        data.map(i => (i.fullpath = encodeURIComponent(i.fullpath)))
        data.map(j => images.push(j.fullpath.replace('%5C%5C', '%5C')))
      }
    }
    item.images = images
    setModalWarningData(item)
  }

  const AnyReactComponent1 = ({ item, setModalWarning }) => (
    <span
      onClick={async () => {
        setModalWarningListData(item)
        setModalWarningList(true)
        //checkModalWarningData(item)
        panelRefClose.current.click()
        cartRefClose.current.click()
      }}
      className='svg-icon blink svg-icon-2x'
    >
      <img src='media/icons/caution.png' />
    </span>
  )

  const AnyReactComponent2 = ({ setModalCam, setDataModalCam, item }) => (
    <span
      onClick={() => {
        setModalCameraData(item)
        setModalCamera(true)
        //setDataModalCam(item)
        panelRefClose.current.click()
        cartRefClose.current.click()
      }}
      className='svg-icon svg-icon-2x'
    >
      <img src='media/icons/cctv.png' />
    </span>
  )

  const AnyReactComponent12 = ({ item1, item2 }) => (
    <span
      onClick={() => {
        setModalMixData1(item1)
        setModalMixData2(item2)
        setModalMix(true)
        panelRefClose.current.click()
        cartRefClose.current.click()
      }}
      className='svg-icon svg-icon-2x'
    >
      <img src='media/icons/mix.png' width='30' height='30' />
    </span>
  )

  const getDataCam = async camID => {
    // var data1 = await requestGET2(`https://camera.tandan.com.vn/zm/api/monitors/index/GroupId:${camID}/.json?token=${tokenCamera}`)
    // var data2 = data1.monitors?data1.monitors:[]
    // setListCamera(data2)
  }
  const RenderWarningItem = item => (
    <div
      class='card-label'
      style={{ borderWidth: 1, borderColor: '#ffff', margin: 5, padding: 10 }}
    >
      <span style={{ fontSize: 22, color: '#FFEB3B' }}>
        {item.item.camera.name}
      </span>
      <div>
        <span style={{ fontSize: 16, color: '#ffff' }}>Địa điểm:</span>
        <span style={{ marginLeft: 15, fontSize: 16, color: '#ffff' }}>
          {item.item.ward}
        </span>
      </div>
      <div>
        <span style={{ fontSize: 16, color: '#ffff' }}>Thời gian:</span>
        <span style={{ marginLeft: 15, fontSize: 16, color: '#ffff' }}>
          {new Date(item.item.time + 'Z').toLocaleString()}
        </span>
      </div>
      <Button
        variant='light'
        size='sm'
        style={{ marginTop: 5 }}
        onClick={() => {
          setModalWarningList(false)
          setModalWarning(true)
          checkModalWarningData(item.item)
        }}
      >
        Xem video
      </Button>
    </div>
  )
  const RenderCameraItem = item => (
    <div
      class='card-label'
      style={{ borderWidth: 1, borderColor: '#ffff', margin: 5, padding: 10 }}
    >
      <span style={{ fontSize: 22, color: '#FFEB3B' }}>{item.item.name}</span>
      <div>
        <span style={{ fontSize: 16, color: '#ffff' }}>Địa điểm:</span>
        <span style={{ marginLeft: 15, fontSize: 16, color: '#ffff' }}>
          {item.item.address.address}
        </span>
      </div>
      <Button
        variant='light'
        size='sm'
        style={{ marginTop: 5 }}
        onClick={() => {
          setModalCamera(false)
          setModalCam(true)
          setDataModalCam(item.item)
        }}
      >
        Xem Camera
      </Button>
    </div>
  )
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Toast
        show={warning}
        className='toast-warning'
        onClose={() => setWarning(false)}
        autohide
      >
        <Toast.Header>
          <strong className='mr-auto'>{warningData.title}</strong>
          <small>Bây giờ</small>
        </Toast.Header>
        <Toast.Body>{warningData.body}</Toast.Body>
      </Toast>
      <AsideMenu
        setActiveMenu={setActiveMenuData}
        activeMenu={activeMenu}
        dataMenu={dataMenu}
      />
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCV_uNEj6aSqtnz_iPHElehAWRZNEdUPqM' }}
        defaultCenter={{
          lat: 21.342851,
          lng: 106.44085
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
        {dataAll.map(item => {
          if (item.dataList.length == 1) {
            if (item.dataList[0].type == 1) {
              return (
                <AnyReactComponent2
                  key={item.id}
                  lat={item.lat}
                  lng={item.lng}
                  setModalCamera={setModalCamera}
                  item={item.dataList[0].listItem}
                />
              )
            } else {
              return (
                <AnyReactComponent1
                  key={item.id}
                  lat={item.lat}
                  lng={item.lng}
                  item={item.dataList[0].listItem}
                  setModalWarningList={setModalWarningList}
                />
              )
            }
          } else {
            return (
              <AnyReactComponent12
                key={item.id}
                lat={item.lat}
                lng={item.lng}
                setModalMix={setModalMix}
                item1={item.dataList[0].listItem}
                item2={item.dataList[1].listItem}
              />
            )
          }
        })}
      </GoogleMapReact>
      <a ref={cartRef} className='button-toggle-left' id='kt_quick_cart_toggle'>
        <span class='svg-icon svg-icon-primary svg-icon-2x'>
          <SVG
            title=' '
            src={toAbsoluteUrl(
              '/media/svg/icons/Layout/Layout-right-panel-2.svg'
            )}
          ></SVG>
        </span>
      </a>

      <a
        ref={cartRefClose}
        className='button-close-left'
        id='kt_quick_cart_close'
      ></a>

      <a
        ref={panelRef}
        className='button-toggle-right'
        id='kt_quick_panel_toggle'
      >
        <span class='svg-icon svg-icon-primary svg-icon-2x'>
          <SVG
            title=' '
            src={toAbsoluteUrl(
              '/media/svg/icons/Layout/Layout-right-panel-2.svg'
            )}
          ></SVG>
        </span>
      </a>

      <a
        ref={panelRefClose}
        className='button-close-right'
        id='kt_quick_panel_close'
      ></a>

      <a
        target='_blank'
        href='https://dieuhanhubnd.hanhchinhcong.net/sites/dashboard/SitePages/dashboard.aspx'
        className='button-toggle-right-2'
      >
        <span class='svg-icon svg-icon-primary svg-icon-2x'>
          <SVG
            src={toAbsoluteUrl('/media/svg/icons/Home/Home.svg')}
            title='Trung tâm điều hành'
          ></SVG>
        </span>
      </a>

      <LayerDropdownLeft
        dataMenuChildren={dataMenuChildren}
        setActive={setActive}
        active={active}
        setSvg={setSvg}
      />

      <LayerDropdownRight
        tokenCamera={tokenCamera}
        setListCamera={setListCamera}
        setWarningDataMap={setWarningDataMap}
        setDataAll={setDataAll}
      />

      <div
        id='kt_quick_cart'
        className='offcanvas offcanvas-left p-0 offcanvas-on kt-quick-aside kt-quick-aside-left'
      >
        <div class='offcanvas-content'>
          <DashboardLeftCard1 />

          <div
            class='offcanvas-wrapper mb-4 scroll-pull'
            id='kt_quick_cart_logs'
          >
            <div class='card card-custom mb-4' id='text-card'>
              <div class='card-header px-2 py-0'>
                <div class='card-title font-weight-bolder'>
                  <div class='card-label'>
                    <span class='d-block text-light font-weight-bolder'>
                      Báo cáo
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Component
              iframe={`<iframe frameborder="0" scrolling="no" class="iframe-bc" height=100% src="https://baocao.namdinh.gov.vn/_vti_bin/TD.WCF/WCFService.svc/GetUrlPublic?Token=${btoa(
                token
              )}&UrlRedirect=https://baocao.namdinh.gov.vn/sites/bc_board/SitePages/dashboard_dh.aspx#${BaoCaoID}"></iframe>`}
            />
          </div>
        </div>
      </div>
      <div
        id='kt_quick_panel'
        className='offcanvas offcanvas-right p-0 offcanvas-on kt-quick-aside kt-quick-aside-right'
      >
        <div class='offcanvas-content'>
          <div
            class='offcanvas-wrapper mb-5 scroll-pull'
            id='kt_quick_panel_logs'
            data-max-height='300'
          >
            <DashboardLeftCard2 />

            <DashboardLeftCard3 />

            <DashboardLeftCard4 tokenCamera={tokenCamera} />

            <div
              class='card card-custom mb-4'
              id='text-card1'
              onClick={() =>
                setModalMXH(true) +
                panelRefClose.current.click() +
                cartRefClose.current.click()
              }
            >
              <div class='card-header px-2 py-0'>
                <div class='card-title font-weight-bolder'>
                  <div class='card-label'>
                    <span class='d-block text-light font-weight-bolder'>
                      Lắng nghe MXH
                    </span>
                  </div>
                  <i
                    class='fas fa-info-circle'
                    style={{ color: '#187DE4' }}
                  ></i>
                </div>
              </div>
            </div>

            <div
              class='card card-custom mb-4'
              id='text-card1'
              onClick={() => {}}
            >
              <div class='card-header px-2 py-0'>
                <div class='card-title font-weight-bolder'>
                  <div class='card-label'>
                    <span class='d-block text-light font-weight-bolder'>
                      Theo dõi an ninh mạng
                    </span>
                  </div>
                  <i
                    class='fas fa-info-circle'
                    style={{ color: '#187DE4' }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={modal}
        onHide={() =>
          setModal(false) + panelRef.current.click() + cartRef.current.click()
        }
        aria-labelledby='example-custom-modal-styling-title'
        dialogClassName='modal-90w'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            {dataModal.Ten}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey='baocaott' id='controlled-tab-example'>
            <Tab eventKey='baocaodh' title='Báo cáo điều hành'>
              <Row>
                {listBieuDo.map(i => (
                  <Col xs={9} md={6} id={`${i.function}-all`}>
                    <div className='bieuDo-header'>
                      <h3
                        style={{ cursor: 'pointer' }}
                        className='bieuDo-tite'
                        onClick={() => {
                          window.open(
                            `https://dieuhanhubnd.hanhchinhcong.net/sites/dashboard/SitePages/${i.site}/default.aspx`
                          )
                        }}
                      >
                        {i.title}
                      </h3>
                      <div>
                        <span
                          onClick={() => {
                            creatCDDH(i.function)
                          }}
                          style={{ cursor: 'pointer' }}
                          class='svg-icon svg-icon-danger svg-icon-3x'
                        >
                          <SVG
                            src={toAbsoluteUrl(
                              '/media/svg/icons/Files/Share.svg'
                            )}
                            title='Tạo công việc'
                          ></SVG>
                        </span>
                      </div>
                    </div>
                    <div
                      id={i.function}
                      className='card-rounded-bottom'
                      style={{}}
                    ></div>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey='baocaott' title='Báo cáo trực tuyến'>
              <Component
                iframe={`<iframe frameborder="0" scrolling="no" class="iframe-bc-modal" width=100% height=600px src="https://baocao.namdinh.gov.vn/_vti_bin/TD.WCF/WCFService.svc/GetUrlPublic?Token=${btoa(
                  token
                )}&UrlRedirect=https://baocao.namdinh.gov.vn/sites/bc_board/SitePages/dashboard_dh.aspx#${
                  dataModal.BaoCaoID
                }"></iframe>`}
              />
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>

      <Modal
        show={modalMXH}
        onHide={() =>
          setModalMXH(false) +
          panelRef.current.click() +
          cartRef.current.click()
        }
        aria-labelledby='example-custom-modal-styling-title'
        dialogClassName='modal-90w'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Lắng nghe mạng xã hội
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Component
            iframe={`<iframe frameborder="0" class="iframe-bc" width=100% height=600px src="https://namndinh.netview.vn/redirect/eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1NiIsImlhdCI6MTU5ODU4NDkwOX0.0uWiiu_xxtfgI4s_rU5ZW6s1Ey4di0nQiNAJ5SnjcsOmFy_MTA231c3RhssUJ8Cd-GIlho6rkMn5SFyvBRYNUw?navigate=common-report"></iframe>`}
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={modalWarning}
        onHide={() =>
          setModalWarning(false) +
          panelRef.current.click() +
          cartRef.current.click()
        }
        aria-labelledby='example-custom-modal-styling-title'
        dialogClassName='modal-90w'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            {modalWarningData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className='bieuDo-tite'>Hình ảnh</h3>
          {modalWarningData.images ? (
            <div className='row' id='canhBao-images'>
              {modalWarningData.images.map(i => (
                <img
                  width='30%'
                  height={200}
                  src={`https://namdinhapi.atoma.vn:786/files/download?path=${i}`}
                />
              ))}
            </div>
          ) : (
            <></>
          )}
          <h3 className='bieuDo-tite'>Video</h3>
          {modalWarningData.video_path ? (
            <video
              autoPlay
              width='100%'
              height={300}
              controls
              src={`https://namdinhapi.atoma.vn:786/files/download?path=${encodeURIComponent(
                modalWarningData.video_path
              )}`}
            >
              <source type='application/x-mpegURL' />
            </video>
          ) : (
            <></>
          )}
        </Modal.Body>
      </Modal>
      <Modal
        show={modalCam}
        onHide={() =>
          setModalCam(false) +
          panelRef.current.click() +
          cartRef.current.click()
        }
        aria-labelledby='example-custom-modal-styling-title'
        dialogClassName='modal-90w'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Camera
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VideoPlayer src={dataModalCam.link_stream} />
        </Modal.Body>
      </Modal>

      <Modal
        show={modalCDDH}
        onHide={() =>
          setModalCDDH(false) +
          panelRef.current.click() +
          cartRef.current.click()
        }
        aria-labelledby='example-custom-modal-styling-title'
        dialogClassName='modal-90w'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Thêm mới công việc
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className='bieuDo-tite'>Thông tin chung</h3>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm='2'>
                    Nguồn đầu vào
                  </Form.Label>
                  <Col sm='6'>
                    <Form.Control
                      as='select'
                      value={NDV}
                      onChange={e => controlNDV(e.target)}
                    >
                      <option>--Chọn nguồn--</option>
                      {dataNDV.map(i => (
                        <option value={i.MaNguon}>{i.TenNguon}</option>
                      ))}
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm='2'>
                    Lĩnh vực
                  </Form.Label>
                  <Col sm='6'>
                    <Form.Control
                      as='select'
                      value={LV}
                      onChange={e => controlLV(e.target)}
                    >
                      <option>--Chọn lĩnh vực--</option>
                      {dataLV.map(i => (
                        <option value={i.TenLinhVuc}>{i.TenLinhVuc}</option>
                      ))}
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm='2'>
                    Nội dung công việc
                  </Form.Label>
                  <Col sm='6'>
                    <Form.Control
                      as='textarea'
                      value={NDCV}
                      onChange={e => setNDCV(e.target.value)}
                    ></Form.Control>
                  </Col>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm='2'>
                    Hạn xử lý
                  </Form.Label>
                  <Col sm='6'>
                    <DatePicker
                      st
                      locale='vi'
                      dateFormat='dd/MM/yyyy'
                      selected={HXL}
                      onChange={date => setHXL(date)}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm='2'>
                    Đính kèm
                  </Form.Label>
                  <Col sm='6'>
                    <Form.File
                      id='DinhKem'
                      label='Chọn file'
                      onChange={e => setFiles(e.target.files)}
                    />
                  </Col>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm='2'>
                    Hình ảnh
                  </Form.Label>
                  <Col sm='6'>
                    <img
                      src={image}
                      height={150}
                      id='image-cddh'
                      width='100%'
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>
          <h3 className='bieuDo-tite'>Chuyển xử lý</h3>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm='2'>
                    Đơn vị xử lý
                  </Form.Label>
                  <Col sm='6'>
                    <Form.Control
                      as='select'
                      value={DVXL}
                      onChange={e => controlDVXL(e.target)}
                    >
                      <option>--Chọn đơn vị--</option>
                      {dataGroup.map(i => (
                        <option value={i.groupCode}>{i.groupName}</option>
                      ))}
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm='2'>
                    Người xử lý
                  </Form.Label>
                  <Col sm='6'>
                    <Form.Control
                      as='select'
                      value={NXL}
                      onChange={e => controlNXL(e.target)}
                    >
                      <option>--Chọn người--</option>
                      {dataUser.map(i => (
                        <option value={i.account}>{i.userName}</option>
                      ))}
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm='2'>
                    Đơn vị phối hợp
                  </Form.Label>
                  <Col sm='6'>
                    <Form.Control
                      as='select'
                      value={DVPH}
                      onChange={e => controlDVPH(e.target)}
                    >
                      <option>--Chọn đơn vị--</option>
                      {dataGroup.map(i => (
                        <option value={i.groupCode}>{i.groupName}</option>
                      ))}
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm='2'>
                    Người phối hợp
                  </Form.Label>
                  <Col sm='6'>
                    <Form.Control
                      as='select'
                      value={NPH}
                      onChange={e => controlNPH(e.target)}
                    >
                      <option>--Chọn người--</option>
                      {dataUser.map(i => (
                        <option value={i.account}>{i.userName}</option>
                      ))}
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm='2'>
                    Người theo dõi
                  </Form.Label>
                  <Col sm='6'>
                    <Form.Control
                      as='select'
                      value={NTD}
                      onChange={e => controlNTD(e.target)}
                    >
                      <option>--Chọn người--</option>
                      {dataUser.map(i => (
                        <option value={i.account}>{i.userName}</option>
                      ))}
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              <Col></Col>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='danger'
            onClick={() => setModalCDDH(false) + setModal(true)}
          >
            Đóng
          </Button>
          <Button variant='primary' onClick={() => sendCDDH()}>
            Lưu lại
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={modalWarningList}
        onHide={() => setModalWarningList(false)}
        aria-labelledby='example-custom-modal-styling-title'
        dialogClassName='modal-50w'
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Danh sách sự kiện
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalWarningListData.map(item => (
            <RenderWarningItem item={item} />
          ))}
        </Modal.Body>
      </Modal>
      <Modal
        show={modalCamera}
        onHide={() => setModalCamera(false)}
        aria-labelledby='example-custom-modal-styling-title'
        dialogClassName='modal-50w'
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Camera
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalCameraData.map(item => (
            <RenderCameraItem item={item} />
          ))}
        </Modal.Body>
      </Modal>
      <Modal
        show={modalMix}
        onHide={() => setModalMix(false)}
        aria-labelledby='example-custom-modal-styling-title'
        dialogClassName='modal-50w'
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Danh sách sự kiện
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalMixData2.map(item => (
            <RenderWarningItem item={item} />
          ))}
        </Modal.Body>
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            Camera
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalMixData1.map(item => (
            <RenderCameraItem item={item} />
          ))}
        </Modal.Body>
      </Modal>
    </div>
  )
}

const getChartOption = (serie, label) => {
  const options = {
    series: serie,
    colors: ['#2196F3', '#f44336', '#FF9800', '#4CAF50'],
    chart: {
      height: 200,
      type: 'pie'
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
  return options
}

const getChartOption2 = (serie, label) => {
  const options = {
    series: [
      {
        name: ' ',
        data: serie
      }
    ],
    chart: {
      height: 250,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top' // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '10px',
        colors: ['#fff']
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
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          fontSize: '10px',
          colors: '#fff'
        }
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    }
  }
  return options
}
