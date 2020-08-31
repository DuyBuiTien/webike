import React, {useMemo, useEffect, useState, useRef} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import "./MapPage.scss";
import { Carousel, ListGroup } from 'react-bootstrap';
import {requestPOST, requestGET2} from './api/basic'
import { CheckConnectionData } from './data/CheckConnectionData'

export const DashboardLeftCard4 = (props) => {
	const [data, setData] = useState([]);

    useEffect(() => {
		const fetchData = async () => {
			var data1 = await requestGET2(`https://namdinhapi.atoma.vn:786/behavior/violatecount?access_token=${props.tokenCamera}`)
			var dataVPTT = data1.count?data1.count:'0'
			var data2 = await requestGET2(`https://namdinhapi.atoma.vn:786/face/historiescount?access_token=${props.tokenCamera}`)
			var dataNDKM = data2.count?data2.count:'0'
			var data3 = [{id: 1, name:'Số lượng vi phạm trật tự', count: dataVPTT},{id: 2, name:'Số lượng nhận diện khuôn mặt', count: dataNDKM}]
			setData(data3);
		};
		if(props.tokenCamera){
			fetchData()
		}
    }, [props.tokenCamera]);

    return(
        // <!--begin::Mixed Widget 16-->
					<div class="card card-custom mb-2">
					    {/* <!--begin::Header--> */}
					    <div class="card-header px-2 py-0">
					        <div class="card-title font-weight-bolder">
					            <div class="card-label">
					                <span class="d-block text-light font-weight-bolder">Theo dõi an ninh trật tự</span>
					            </div>
					        </div>
					    </div>
					    {/* <!--end::Header--> */}

					    {/* <!--begin::Body--> */}
					    <div class="card-body d-flex flex-column py-1 px-3" id="TDAN-block" onClick={() => window.open('https://namdinh.atoma.vn:786/Home/Index', "_blank")}>
					        {/* <!--begin::Chart--> */}
                            <div>
					        <marquee id="MARQUEE" direction="up" scrollamount="3" style={{height: 100}}>
							<ul class="list-inline">
								{data.map((i) => (
									<li key={i.id} className="list-inline-item">
									<b className="list-inline-item-left">{i.name}</b>
									<div className="list-inline-item-right">
									<p>{i.count}</p>
									<span class="svg-icon svg-icon-success svg-icon-1x">
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