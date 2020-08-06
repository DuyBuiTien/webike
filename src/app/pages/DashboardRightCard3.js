import React, {useMemo, useEffect, useState, useRef} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import "./MapPage.scss";
import { Carousel, ListGroup } from 'react-bootstrap';
import {requestPOST, requestGET} from './api/basic'
import { CheckConnectionData } from './data/CheckConnectionData'

export const DashboardRightCard3 = () => {
	const [data, setData] = useState([]);

    useEffect(() => {
		const fetchData = async () => {
			// var data1 = await requestGET(`http://chat1.tandan.com.vn:8080/api/v1/soc/checkconnection`)
			// var dataTT = data1?data1:[]
			setData(CheckConnectionData);
		};
		fetchData()
    }, []);

    return(
        // <!--begin::Mixed Widget 16-->
					<div class="card card-custom mb-2">
					    {/* <!--begin::Header--> */}
					    <div class="card-header px-2 py-0">
					        <div class="card-title font-weight-bolder">
					            <div class="card-label">
					                <span class="d-block text-light font-weight-bolder">Cơ sở hạ tầng</span>
					            </div>
					        </div>
					    </div>
					    {/* <!--end::Header--> */}

					    {/* <!--begin::Body--> */}
					    <div class="card-body d-flex flex-column py-1 px-3">
					        {/* <!--begin::Chart--> */}
                            <div>
					        <marquee id="MARQUEE" direction="up" scrollamount="3" style={{height: 250}}>
							<ul class="list-inline">
								{data.map((i) => (
									<li key={i.id} className="list-inline-item">
									<b className="list-inline-item-left">{i.name}</b>
									<div className="list-inline-item-right">
									<p>{i.statuscode==1?"Hoạt động":"Không hoạt động"}</p>
									<span class="svg-icon svg-icon-success svg-icon-1x">
									<SVG
										src={toAbsoluteUrl(
											"/media/svg/icons/Design/Circle.svg"
										)}
									></SVG>
									</span>
									</div>
									</li>
								))}
							</ul>
							</marquee>
                            </div>
					        {/* <!--end::Chart--> */}
					    </div>
					    {/* <!--end::Body--> */}
					</div>
					// <!--end::Mixed Widget 16-->
    )
}