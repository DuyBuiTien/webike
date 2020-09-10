import React, {useMemo, useEffect, useState} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import "./MapPage.scss";
import { Carousel } from 'react-bootstrap';
import {requestPOST} from './api/basic'

export const DashboardLeftCard2 = () => {
	const [data, setData] = useState([]);
    useEffect(() => {
		const fetchData = async () => {
			var body3 = {
				"take": 10,
				"urlRoot": "https://bacgiang.gov.vn/",
				"urlSpecific": "tin-trong-tinh",
				"parentXpath": "//div[contains(@class, 'ul-abstract-ctn')]//div[contains(@class, 'news-line ')]",
				"titleXpath": ".//div[contains(@class, 'news-title')]//a",
				"descriptionXpath": ".//div[contains(@class, 'news-title')]//a",
				"imageXpath": ".//div[contains(@class, 'news-title')]//a"
			}
			var data1 = await requestPOST(`https://dieuhanhubnd.hanhchinhcong.net/_layouts/15/TD.DH.Service/WCFService.svc/crawls`, body3)
			var dataTT = data1.data?data1.data:[]
			dataTT.map((i) => i.Link = i.Link.replace("https://bacgiang.gov.vn/https://bacgiang.gov.vn/", "https://bacgiang.gov.vn/"))
			setData(dataTT);
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
					                <span class="d-block text-light font-weight-bolder">Tin tức</span>
					            </div>
					        </div>
					    </div>
					    {/* <!--end::Header--> */}

					    {/* <!--begin::Body--> */}
					    <div class="card-body d-flex flex-column py-1 px-3">
					        {/* <!--begin::Chart--> */}
					        <Carousel controls={false} indicators={false}>
							{data.map((i) => (
								<Carousel.Item>
									<a target="_blank" href={i.Link}>
									<img
										className="d-block w-100"
										src={i.Image}
										style={{height: 200, paddingTop: 10, borderRadius: 10}}
									/>
									<Carousel.Caption className="caption">
									<p className="title">{i.Title}</p>
									</Carousel.Caption>
									</a>
								</Carousel.Item>
							)
							)}
							
							</Carousel>
					        {/* <!--end::Chart--> */}
					    </div>
					    {/* <!--end::Body--> */}
					</div>
					// <!--end::Mixed Widget 16-->
    )
}