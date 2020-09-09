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
import {requestPOST, requestGET, requestGET2, requestPOSTFD, requestPOSTFCM, config, requestPOSTWSO2, APIGiamSat} from './api/basic'

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
    if(check){
      props.setListCamera([])
    }
    else{
      //var data = await requestGET2(`https://namdinhapi.atoma.vn:786/home/getcameras?access_token=${props.tokenCamera}`)
      var dataCam = cameras
      dataCam.map((i) => {
        i.lat = i.lonlat.lat
        i.long = i.lonlat.lon
      })
      props.setListCamera(dataCam)
    }
  }

  const toggleViolate = async(check) => {
    if(check){
      props.setWarningDataMap([])
    }
    else{
      //var data = await requestGET2(`https://namdinhapi.atoma.vn:786/behavior/violate?access_token=${props.tokenCamera}`)
      var dataViolate = violates
      dataViolate.map((warning) => {
        warning.lat = warning.camera.lonlat.latitude
        warning.lng = warning.camera.lonlat.longitude
        warning.title = warning.description
      })
      props.setWarningDataMap(dataViolate)
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
