import React, {useMemo, useEffect, useState, useRef} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import "./MapPage.scss";
import { Carousel, ListGroup } from 'react-bootstrap';
import {requestPOST, requestGET} from './api/basic'
import { CheckConnectionData } from './data/CheckConnectionData'

export const DashboardRightCard3 = props => {
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
					                <span class="d-block text-light font-weight-bolder">Lắng nghe mạng xã hội</span>
					            </div>
					        </div>
					    </div>
					    {/* <!--end::Header--> */}

					    {/* <!--begin::Body--> */}
					    <div class="card-body d-flex flex-column py-1 px-3">
					        {/* <!--begin::Chart--> */}
                            <div>
								<img
									className="d-block w-100"
									src='https://marketingland.com/wp-content/ml-loads/2018/10/lead-1920x1080-800x450.png'
									style={{height: 200, paddingTop: 10, borderRadius: 10}}
									onClick={() => props.setModalMXH(true)}
								/>
                            </div>
					        {/* <!--end::Chart--> */}
					    </div>
					    {/* <!--end::Body--> */}
					</div>
					// <!--end::Mixed Widget 16-->
    )
}