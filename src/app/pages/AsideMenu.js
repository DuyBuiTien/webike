import React, {useMemo, useEffect} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import "./AsideMenu.scss";

export const AsideMenu = () => {
    return(
        <div class="aside aside-left aside-fixed d-flex flex-column flex-row-auto">
        {/* // <!--begin::Aside Menu--> */}
                    <div class="aside-menu-wrapper flex-column-fluid" >
                        {/* <!--begin::Menu Container--> */}
                        <div class="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500">
                            {/* <!--begin::Menu Nav--> */}
                            <ul class="menu-nav">
                                <li class="menu-item menu-item-active" aria-haspopup="true">
                                    <a href="javascript:;" class="menu-link">
                                        <span class="svg-icon menu-icon">
                                            <i class="icon-xl fas fa-chalkboard"></i>
                                        </span>
                                        <span class="menu-text">Dashboard</span>
                                    </a>
                                </li>
                                <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                                    <a href="javascript:;" class="menu-link menu-toggle">
                                        <span class="svg-icon menu-icon">
                                            <i class="icon-xl fas fa-graduation-cap"></i>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span class="menu-text">Giáo dục</span><i class="menu-arrow"></i>
                                    </a>
                                </li>
                                <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                                    <a href="javascript:;" class="menu-link menu-toggle">
                                        <span class="svg-icon menu-icon">
                                            <i class="icon-xl fas fa-medkit"></i>
                                            {/* <!--end::Svg Icon--> */}
                                        </span>
                                        <span class="menu-text">Y tế</span><i class="menu-arrow"></i>
                                    </a>
                                </li>
                                <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                                    <a href="javascript:;" class="menu-link menu-toggle">
                                        <span class="svg-icon menu-icon">
                                            <i class="icon-xl fas fa-shield-alt"></i>
                                        </span>
                                        <span class="menu-text">An ninh</span><i class="menu-arrow"></i>
                                    </a>
                                </li>
                                <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                                    <a href="javascript:;" class="menu-link menu-toggle">
                                        <span class="svg-icon menu-icon">
                                            <i class="icon-xl fas fa-traffic-light"></i>
                                        </span>
                                        <span class="menu-text">Giao thông</span><i class="menu-arrow"></i>
                                    </a>
                                </li>
                                <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                                    <a href="javascript:;" class="menu-link menu-toggle">
                                        <span class="svg-icon menu-icon">
                                            <i class="icon-xl fas fa-stream"></i>
                                        </span>
                                        <span class="menu-text">Sở ngành</span><i class="menu-arrow"></i>
                                    </a>
                                </li>
                            </ul>
                            {/* <!--end::Menu Nav--> */}
                        </div>
                        {/* <!--end::Menu Container--> */}

                        <div class="aside-secondary d-flex flex-row-fluid">
                        	<div class="aside-workspace scroll scroll-push my-2 ps ps--active-y">
                        		<div class="tab-content">
		                        </div>
		                    </div>
		                </div>
                    </div>
                    {/* // <!--end::Aside Menu--> */}
                    </div>
    )
}