import React, {useMemo, useEffect, useState} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import "./MapPage.scss";
import ApexCharts from "apexcharts";
import { Carousel, ListGroup, Row, Col } from 'react-bootstrap';
import clsx from "clsx";


const dataKTXH = [
  {
    "id": 1.1,
    "name": "Số người lao động có việc làm tăng thêm(Người)",
    "number": 1265,
    "percent": 8.12
  },
  {
    "id": 1.2,
    "name": "Nông, lâm nghiệp và thủy sản (Người)",
    "number": 414,
    "percent": 62.35
  },
  {
    "id": 1.3,
    "name": "Công nghiệp và xây dựng (người)",
    "number": 459,
    "percent": -13.34
  },
  {
    "id": 1.4,
    "name": "Dịch vụ",
    "number": 5.06,
    "percent": 8.12
  },
  {
    "id": 2.1,
    "name": "Số vụ TLNĐ (vụ)",
    "number": 40,
    "percent": -23.02
  },
  {
    "id": 2.2,
    "name": "Số vụ chết người (vụ)",
    "number": 24,
    "percent": 33.37
  },
  {
    "id": 2.3,
    "name": "Số người bị TNLĐ (người)",
    "number": 5.06,
    "percent": 8.12
  },
  {
    "id": 2.4,
    "name": "Số người TVLĐ",
    "number": 0,
    "percent": 0.5
  },
  {
    "id": 3.1,
    "name": "Số lao động nước ngoài đang làm việc ở Việt Nam được cấp giấy phép(Người)",
    "number": 1589,
    "percent": 8.54
  },
  {
    "id": 3.2,
    "name": "Số người tìm kiếm được việc làm sau khi sử dụng dịch vụ  tư vấn, cung ứng, giới thiệu việc làm của các Trung tâm dịch vụ việc làm(Người)",
    "number": 4625,
    "percent": 13.36
  },
  {
    "id": 3.3,
    "name": "Tổng số người đăng ký và sử dụng dịch vụ  tư vấn, cung ứng, giới thiệu việc làm của các Trung tâm dịch vụ việc làm(Người)",
    "number": 6250,
    "percent": 15.31
  },
  {
    "id": 3.4,
    "name": "Tỷ lệ người lao động tìm được việc làm qua Trung tâm dịch vụ việc làm(%)",
    "number": 74,
    "percent": -1.7
  },
  {
    "id": 4.1,
    "name": "Chi ngân sách nhà nước cho hoạt giáo dục nghề nghiệp(Triệu đồng)",
    "number": 23382,
    "percent": 3.85
  },
  {
    "id": 4.2,
    "name": "Tổng kinh phí giảm nghèo (Triệu đồng)",
    "number": 259212,
    "percent": 6.61
  },
  {
    "id": 4.3,
    "name": "Kinh phí phòng chống Tệ nạn xã hội(Triệu đồng)",
    "number": 63554,
    "percent": 6.59
  },
  {
    "id": 4.4,
    "name": "Tổng kinh phí giảm nghèo (Triệu đồng)",
    "number": 259212,
    "percent": 6.61
  },
]

const  sliceArrayIntoGroups = (arr, size) =>  {
  var step = 0, sliceArr = [], len = arr.length;
  while (step < len) {
    sliceArr.push(arr.slice(step, step += size));
  }
  return sliceArr;
}

export const DashboardLeftCard1 = props => {
    const [data, setData] = useState([]);
    useEffect(() => {
        var arr = sliceArrayIntoGroups(dataKTXH,4)
        setData(arr)
      }, []);


    return(
        // <!--begin::Mixed Widget 16-->
					<div class="card card-custom mb-2">
					    {/* <!--begin::Header--> */}
					    <div class="card-header px-2 py-0">
					        <div class="card-title font-weight-bolder">
					            <div class="card-label">
					                <span class="d-block text-light font-weight-bolder">Kinh tế xã hội</span>
					                <div class="font-size-sm text-muted mt-2">Chỉ tiêu</div>
					            </div>
					        </div>
					    </div>
					    {/* <!--end::Header--> */}

					    {/* <!--begin::Body--> */}
					    <div onClick={() => props.setModalKTXH(true)} class="card-body d-flex flex-column py-1 px-3">
					        {/* <!--begin::Chart--> */}
					        <Carousel controls={false} indicators={false}>
                  {data.map((i) => (
                    <Carousel.Item key={i.id}>
                      <Row style={{padding: 5, alignItems: 'center'}}>
                      {i.map((j) => (
                      <Col xs={9} md={6} >
                        <div className="item-tk">
                      <b title={j.name}>{j.name}</b>
                        
                        <div className="percent-tk small">
                          <span className="number-tk small">{j.number.toLocaleString()}</span>
                          <span className={clsx("svg-icon svg-icon-2x", {
                            'svg-icon-success': j.percent>0,
                            'svg-icon-danger': j.percent<0
                          })}>
                            <SVG
                              src={toAbsoluteUrl(`/media/svg/icons/Navigation/Angle-double-${j.percent>0?'up':'down'}.svg`)}
                            ></SVG>
                          </span>
                        <p className={clsx("number", {
                          up: j.percent>0,
                          down: j.percent<0
                        })}>
                          {j.percent}%
                        </p>
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
					        {/* <!--end::Chart--> */}
					    </div>
					    {/* <!--end::Body--> */}
					</div>
					// <!--end::Mixed Widget 16-->
    )
}