/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import clsx from "clsx";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { DropdownTopbarItemToggler } from "../../_metronic/_partials/dropdowns";
import SVG from "react-inlinesvg";
import "./MapPage.scss";

const languages = [
  {
    id: 1,
    name: "Tổng quan",
    flag: "/media/svg/icons/Design/Component.svg",
  },
  {
    id: 2,
    name: "Trường học",
    flag: "/media/svg/icons/map/position.svg",
  },
  {
    id: 3,
    name: "Bệnh viện",
    flag: "/media/svg/icons/map/marker2.svg",
  },
];

export const LayerDropdownLeft = props => {

  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(props.active);

    return () => {
      console.log('unmount Hang hoa!');
    };
  }, [props.active])

  return (
    <Dropdown className="button-layer-left" drop="down">
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
          {languages.map((i) => (
              <li
              key={i.id}
              className={clsx("nav-link", {
                active: i.id == active,
                disable: i.id != active
              })}
              onClick={() => props.setActive(i.id) + props.setSvg(i.flag)}
            >
              <OverlayTrigger
              placement="right"
              overlay={
              <Tooltip>{i.name}</Tooltip>
              }
            >
                <span class="svg-icon svg-icon-white svg-icon-3x">
                <SVG
                src={toAbsoluteUrl(i.flag)}
                ></SVG>
                </span>
              </OverlayTrigger>
              </li>
          ))}
          </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
}
