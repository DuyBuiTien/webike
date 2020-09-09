import React, {useMemo, useEffect, useState} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import "./MapPage.scss";
import ApexCharts from "apexcharts";
import { Carousel, ListGroup, Row, Col } from 'react-bootstrap';
import clsx from "clsx";
import {requestPOST, config, requestPOSTWSO2} from './api/basic'
import Cookies from 'js-cookie';


export const DashboardLeftCard1 = props => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        var tokenApi = Cookies.get("token");if(!tokenApi){tokenApi="Gaz9jR6ZMg+0qi+7XiRH6g==";}
        
        const fetchData = async() => {
          var dataAll = []
          var body = {"token": tokenApi, "isDashboard": true}
          config.api.map(async(i) => {
            var data1 = await requestPOSTWSO2(`${config.wso2link}${i.api}/${config.getallAPI}`, body)
            var data = data1.data?data1.data:{}
            if(data){
              var thongKe = data.thongKe?data.thongKe:[]
              thongKe.map(async(j) => {
                var body1 = {"token": tokenApi, "function": j.function, "fromDate": "2020-01-01T00:00:00", "toDate": "2020-12-31T00:00:00"}
                var data2 = await requestPOSTWSO2(`${config.wso2link}${i.api}/${config.getDataBlock}`, body1)
                var data3 = data2.data?data2.data:[]
                dataAll.push({title: j.title, data: data3, site: i.site})
              })
            }
          })
          setLoading(false)
          setData(dataAll)
        }
        fetchData()
        
      }, []);


    return(
        // <!--begin::Mixed Widget 16-->
					<div class="card card-custom mb-2">
					    {/* <!--begin::Header--> */}
					    <div class="card-header px-2 py-0">
					        <div class="card-title font-weight-bolder">
					            <div class="card-label">
					                <span class="d-block text-light font-weight-bolder">Thống kê công việc</span>
					            </div>
					        </div>
					    </div>
					    {/* <!--end::Header--> */}

					    {/* <!--begin::Body--> */}
					    <div onClick={() => {}} class="card-body d-flex flex-column py-1 px-3">
					        <Carousel controls={false} indicators={false}>
                  {data.map((i) => (
                    <Carousel.Item style={{cursor: 'pointer'}} onClick={() => {window.open(`https://dieuhanhubnd.hanhchinhcong.net/sites/dashboard/SitePages/${i.site}/default.aspx`);}}>
                      <h4 className="title-tk">{i.title}</h4>
                      <Row style={{padding: 5, alignItems: 'center'}}>
                      
                      {i.data.map((j) => (
                      <Col xs={9} md={6} >
                        <div className="item-tk">
                        <b title={j.name}>{j.title}</b>
                        <div className="percent-tk small">
                          <span 
                          className={clsx("number-tk small", {
                            danger: j.classname === "danger",
                          })}
                          >{j.value}</span>
                        </div>
                        </div>
                      </Col>
                      )
                      )}
                      </Row>
                    </Carousel.Item>
                  )
                  )}
                  </Carousel>
					    </div>
					    {/* <!--end::Body--> */}
					</div>
					// <!--end::Mixed Widget 16-->
    )
}