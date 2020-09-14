/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import clsx from "clsx";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { DropdownTopbarItemToggler } from "../../_metronic/_partials/dropdowns";
import SVG from "react-inlinesvg";
import {cameras, violates} from './data/fakeData'
import "./MapPage.scss";
import {requestPOST, requestGET, requestGET2, requestPOSTFD, requestPOSTFCM, config, requestPOSTWSO2, APIGiamSat,requestGETMQ} from './api/basic'

const layerRight = [
  {
    id: 1,
    name: "Camera",
    icon: "media/icons/cctv.png",
  },
  {
    id: 2,
    name: "Sự kiện",
    icon: "media/icons/caution.png",
  }
];

export const LayerDropdownRight = (props) => {

  const [active, setActive] = useState([]);
  const [dataAll, setDataAll] = useState([])
  useEffect(() => {
    return () => {
    };
  }, [props.active])

  const addPosition = async(i) =>{
    var activeT = [...active]
    if(activeT.includes(i.id)){
      activeT = activeT.filter(j => j!=i.id)
      setActive(activeT)
      switch (i.id) {
        case 1:
          toggleCamera(true)
          break;

        case 2:
          toggleViolate(true)
          break;
      
        default:
          break;
      }
    }
    else{
      activeT.push(i.id)
      setActive(activeT)
      switch (i.id) {
        case 1:
          toggleCamera(false)
          break;

        case 2:
          toggleViolate(false)
          break;
      
        default:
          break;
      }
    }

  }

  const toggleCamera = async(check) => {
    if (check) {
      var dataAll_1 = [...dataAll]
      dataAll_1.map(item => {
        var temp = item.dataList
        temp = temp.filter(i => i.type != 1)
        item.dataList = temp
      })
      dataAll_1 = dataAll_1.filter(i => i.dataList.length != 0)
      console.log(dataAll_1)
      setDataAll(dataAll_1)
      props.setDataAll(dataAll_1)
    } else {
      var data = await requestGETMQ(
        `https://crm.mqsolutions.vn/api/v1/cameras?offset=1&limit=10`,props.tokenCamera
      )
      var dataCam = data.cameras ? data.cameras : []
      var dataAll_1 = [...dataAll]
      var dataLonlat = []
      dataCam.map(item => {
        var ind = -1
        var ob = {
          lon:item.address.longitude,
          lat:item.address.latitude,
        }
        dataLonlat.forEach(e => {
          if (JSON.stringify(ob) === JSON.stringify(e)) {
            ind = 0
            return
          }
        })
        if (ind == -1) {
          dataLonlat.push(ob)
        }
      })
      if (dataAll_1.length == 0) {
        dataLonlat.map(item => {
          var temp = []
          var dataItem = []
          temp = dataCam.filter(
            e => e.address.latitude === item.lat && e.address.longitude === item.lon
           )
          dataItem.push({ type: 1, listItem: temp })
          var obj = {
            lat: item.lat,
            lng: item.lon,
            dataList: dataItem
          }
          dataAll_1.push(obj)
        })
      } else {
        dataLonlat.map(item => {
          var temp = []
          temp = dataCam.filter(
            e => e.address.latitude === item.lat && e.address.longitude === item.lon
          )
          var ind = -1
          dataAll_1.map(i => {
            var ob = {
              lon: i.lng,
              lat: i.lat
            }
            if (JSON.stringify(ob) === JSON.stringify(item)) {
              i.dataList.push({ type: 1, listItem: temp })
              ind = 0
              return
            }
          })
          if (ind == -1) {
            var newItem = {
              lat: item.lat,
              lng: item.lon,
              dataList: [{ type: 1, listItem: temp }]
            }
            dataAll_1.push(newItem)
          }
        })
      }
      console.log(dataAll_1)
      setDataAll(dataAll_1)
      props.setDataAll(dataAll_1)
    }
  }

  const toggleViolate = async(check) => {
    if (check) {
      var dataAll_1 = [...dataAll]
      dataAll_1.map(item => {
        var temp = item.dataList
        temp = temp.filter(i => i.type != 2)
        item.dataList = temp
      })
      dataAll_1 = dataAll_1.filter(i => i.dataList.length != 0)
      console.log(dataAll_1)
      setDataAll(dataAll_1)
      props.setDataAll(dataAll_1)
    } else {
      var data = await requestGETMQ(
        `https://crm.mqsolutions.vn/api/v1/events?offset=0&limit=20&cam_id=26&event_id=1`,props.tokenCamera
      )
      var dataViolate = data.events ? data.events : []
      var dataAll_1 = [...dataAll]
      var dataLonlat = []
      dataViolate.map(item => {
        var ind = -1
        var ob = {
          lon:item.longitude,
          lat:item.latitude,
        }
        dataLonlat.forEach(e => {
          if (JSON.stringify(ob) === JSON.stringify(e)) {
            ind = 0
            return
          }
        })
        if (ind == -1) {
          dataLonlat.push(ob)
        }
      })
      if (dataAll_1.length == 0) {
        dataLonlat.map(item => {
          var temp = []
          var dataItem = []
          temp = dataViolate.filter(
            e => e.latitude === item.lat && e.longitude === item.lon
          )
          dataItem.push({ type: 2, listItem: temp })

          var obj = {
            lat: item.lat,
            lng: item.lon,
            dataList: dataItem
          }
          dataAll_1.push(obj)
        })
      } else {
        dataLonlat.map(item => {
          var temp = []
          temp = dataViolate.filter(
            e => e.latitude === item.lat && e.longitude === item.lon
          )
          var ind = -1
          dataAll_1.map(i => {
            var ob = {
              lon: i.lng,
              lat: i.lat
            }
            if (JSON.stringify(ob) === JSON.stringify(item)) {
              i.dataList.push({ type: 2, listItem: temp })
              ind = 0
              return
            }
          })
          if (ind == -1) {
            var newItem = {
              lat: item.latitude,
              lng: item.longitude,
              dataList: [{ type: 2, listItem: temp }]
            }
            dataAll_1.push(newItem)
          }
        })
      }
      console.log(dataAll_1)
      setDataAll(dataAll_1)
      props.setDataAll(dataAll_1)
    }
  }

  return (
    <Dropdown className="button-layer-right" drop="down">
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
      >
        <a>
            <span class="svg-icon svg-icon-primary svg-icon-2x">
            <SVG
                src={toAbsoluteUrl(
                    "/media/svg/icons/Design/Layers.svg"
                )}
            ></SVG>
            </span>
        </a>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        <ul class="nav nav-pills">
          {layerRight.map((i) => (
              <li
              key={i.id}
              className={clsx("nav-link", {
                disable: !active.includes(i.id)
              })}
              onClick={() => addPosition(i)}
            >
              <OverlayTrigger
              placement="right"
              overlay={
              <Tooltip>{i.name}</Tooltip>
              }
            >
                <span class="svg-icon svg-icon-white svg-icon-4x">
                <img src={i.icon} />
                </span>
              </OverlayTrigger>
              </li>
          ))}
          </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
}
