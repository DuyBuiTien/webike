import React, {useMemo, useEffect} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import "./MapPage.scss";
import ApexCharts from "apexcharts";
export const DashboardRightCard1 = () => {
    useEffect(() => {
        const element = document.getElementById("kt_stats_widget_7_chart");
    
        if (!element) {
          return;
        }
    
        const options = getChartOption();
        const chart = new ApexCharts(element, options);
        chart.render();
        return function cleanUp() {
          chart.destroy();
        };
      }, []);


    return(
        // <!--begin::Mixed Widget 16-->
					<div class="card card-custom mb-4">
					    {/* <!--begin::Header--> */}
					    <div class="card-header px-2 py-0">
					        <div class="card-title font-weight-bolder">
					            <div class="card-label">
					                <span class="d-block text-light font-weight-bolder">Nhắc việc cá nhân</span>
					            </div>
					        </div>
					    </div>
					    {/* <!--end::Header--> */}

					    {/* <!--begin::Body--> */}
					    <div class="card-body">
					        {/* <!--begin::Chart--> */}
					        <div
                            id="kt_stats_widget_7_chart"
                            className="card-rounded-bottom"
                            style={{ }}
                            ></div>
					        {/* <!--end::Chart--> */}
					    </div>
					    {/* <!--end::Body--> */}
					</div>
					// <!--end::Mixed Widget 16-->
    )
}
function getChartOption() {  
    const options = {       
    	series: [44, 55, 67, 83],
        chart: {
        height: 250,
        type: 'radialBar',
        },
        plotOptions: {
        radialBar: {
            dataLabels: {
            name: {
                color: "#fff",
                fontSize: '22px',
            },
            value: {
                fontSize: '16px',
                color: "#fff",
            },
            total: {
                show: true,
                label: 'Tổng số',
                color: "#fff",
                formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
                }
            }
            }
        }
        },
        labels: ['Sự cố', 'Cảnh báo', 'Lỗ hổng', 'Bảo mật'],
    }
    return options;
  }