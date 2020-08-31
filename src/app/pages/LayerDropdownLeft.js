/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import clsx from "clsx";
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { DropdownTopbarItemToggler } from "../../_metronic/_partials/dropdowns";
import SVG from "react-inlinesvg";
import "./MapPage.scss";

export const LayerDropdownLeft = props => {

  const [active, setActive] = useState(0);
  const [dataMenuChildren, setDataMenuChildren] = useState([]);

  useEffect(() => {
    setActive(props.active);

    return () => {
    };
  }, [props.active])

  useEffect(() => {
    setDataMenuChildren(props.dataMenuChildren);

    return () => {
    };
  }, [props.dataMenuChildren])

  return (
    <Dropdown className="button-layer-left" drop="down">
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
      >
        <a>
            <span class="svg-icon svg-icon-primary svg-icon-2x">
            <SVG
                title=" "
                src={toAbsoluteUrl(
                    "/media/svg/icons/Design/Layers.svg"
                )}
            ></SVG>
            </span>
        </a>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        <ul class="nav nav-pills">
          {dataMenuChildren.map((i) => (
              <li
              key={i.id}
              className={clsx("nav-link", {
                active: i.id == active,
                disable: i.id != active
              })}
              onClick={() => props.setActive(i.id)}
            >
              <OverlayTrigger
              placement="right"
              overlay={
              <Tooltip>{i.text}</Tooltip>
              }
            >
                <span class="svg-icon svg-icon-white svg-icon-3x">
                <img src={i['icon-class']} />
                </span>
              </OverlayTrigger>
              </li>
          ))}
          </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
}
