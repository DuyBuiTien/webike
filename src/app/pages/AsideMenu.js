import React, {useMemo, useEffect, useState} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import "./AsideMenu.scss";
import clsx from "clsx";


export const AsideMenu = props => {

  const [active, setActive] = useState(1);
  const [dataMenu, setDataMenu] = useState([]);

  useEffect(() => {
    setDataMenu(props.dataMenu)
    return () => {
    };
  }, [props.dataMenu])

  useEffect(() => {
    setActive(props.activeMenu);
    return () => {
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
                                {dataMenu.map((i) => 
                                (
                                    <li key={i.id} className={clsx("menu-item", {
                                        active: i.id === active,
                                        disable: i.id !== active
                                      })}>
                                        <a onClick={() => props.setActiveMenu(i.id)} className="menu-link">
                                            <span className="svg-icon menu-icon">
                                                <i className={clsx("icon-xl fas", [i['icon-class']])}></i>
                                            </span>
                                            <span className="menu-text">{i.text}</span>
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