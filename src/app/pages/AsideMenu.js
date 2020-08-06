import React, {useMemo, useEffect, useState} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import "./AsideMenu.scss";
import clsx from "clsx";

const dataMenu = [
    {
        "id": 1,
        "name": "Dashboard",
        "icon": "fa-chalkboard"
    },
    {
        "id": 2,
        "name": "Giáo dục",
        "icon": "fa-graduation-cap"
    },
    {
        "id": 3,
        "name": "Y tế",
        "icon": "fa-medkit"
    },
    {
        "id": 4,
        "name": "An ninh",
        "icon": "fa-shield-alt"
    },
    {
        "id": 5,
        "name": "Giao thông",
        "icon": "fa-traffic-light"
    },
    {
        "id": 6,
        "name": "Sở ngành",
        "icon": "fa-stream"
    },
]

export const AsideMenu = props => {

  const [active, setActive] = useState(1);

  useEffect(() => {
    setActive(props.activeMenu);
    console.log(props.activeMenu)
    return () => {
      console.log('unmount Hang hoa!');
    };
  }, [props.activeMenu])


    return(
        <div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto">
        {/* // <!--begin::Aside Menu--> */}
                    <div className="aside-menu-wrapper flex-column-fluid" >
                        {/* <!--begin::Menu Container--> */}
                        <div className="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1">
                            {/* <!--begin::Menu Nav--> */}
                            <ul className="menu-nav">
                                {dataMenu.map((i) => (
                                    <li key={i.id} className={clsx("menu-item", {
                                        active: i.id === active,
                                        disable: i.id !== active
                                      })}>
                                        <a onClick={() => props.setActiveMenu(i.id)} className="menu-link">
                                            <span className="svg-icon menu-icon">
                                                <i className={clsx("icon-xl fas", [i.icon])}></i>
                                            </span>
                                            <span className="menu-text">{i.name}</span>
                                        </a>
                                    </li>
                                )
                                )}
                            </ul>
                            {/* <!--end::Menu Nav--> */}
                        </div>
                        {/* <!--end::Menu Container--> */}

                        <div className="aside-secondary d-flex flex-row-fluid">
                        	<div className="aside-workspace scroll scroll-push my-2 ps ps--active-y">
                        		<div className="tab-content">
		                        </div>
		                    </div>
		                </div>
                    </div>
                    {/* // <!--end::Aside Menu--> */}
                    </div>
    )
}