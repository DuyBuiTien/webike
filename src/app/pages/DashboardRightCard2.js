import React, {useMemo, useEffect} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/_helpers";
import "./MapPage.scss";
import ApexCharts from "apexcharts";
export const DashboardRightCard2 = () => {
    useEffect(() => {
        const element = document.getElementById("kt_stats_widget_8_chart");
    
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
					<div class="card card-custom mb-2">
					    {/* <!--begin::Header--> */}
					    <div class="card-header px-2 py-0">
					        <div class="card-title font-weight-bolder">
					            <div class="card-label">
					                <span class="d-block text-light font-weight-bolder">Sự cố hệ thống</span>
                          <div class="font-size-sm text-muted mt-2">Số liệu báo cáo</div>
					            </div>
					        </div>
					    </div>
					    {/* <!--end::Header--> */}

					    {/* <!--begin::Body--> */}
					    <div class="card-body d-flex flex-column py-1 px-3">
					        {/* <!--begin::Chart--> */}
					        <div
                    id="kt_stats_widget_8_chart"
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
    series: [{
      name: 'Sự cố',
      data: [10, 50, 60, 90, 40]
    }],
      chart: {
        height: 250,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '10px',
          colors: ["#fff"]
        }
      },
      
      xaxis: {
        categories: ["2016", "2017", "2018", "2019", "2020"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        },
        labels: {
          style: {
            fontSize: '10px',
            colors: "#fff"
          }
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      
      },
  }
  return options;
}