import React, {useMemo, useEffect} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";

export function MixedWidget2(){
    return(
        // <!--begin::Quick Cart-->
        <div id="kt_quick_cart" class="offcanvas offcanvas-left p-0 offcanvas-on kt-quick-aside kt-quick-aside-left">
            {/* <!--begin::Content--> */}
            <div class="offcanvas-content">
            	{/* <!--begin::Wrapper--> */}
	            <div class="offcanvas-wrapper mb-5 scroll-pull" id="kt_quick_cart_logs">
                    {/* <!--begin::Mixed Widget 16--> */}
					<div class="card card-custom mb-2">
					    {/* <!--begin::Header--> */}
					    <div class="card-header px-2 py-0">
					        <div class="card-title font-weight-bolder">
					            <div class="card-label">
					                <span class="d-block text-light font-weight-bolder">Weekly Sales Stats</span>
					                <div class="font-size-sm text-muted mt-2">890,344 Sales</div>
					            </div>
					        </div>
					    </div>
					    {/* <!--end::Header--> */}

					    {/* <!--begin::Body--> */}
					    <div class="card-body d-flex flex-column py-1 px-3">
					        {/* <!--begin::Chart--> */}
					        <div id="kt_mixed_widget_16_chart" style={{height: "200p"}}></div>
					        {/* <!--end::Chart--> */}

					        {/* <!--begin::Items--> */}
					        <div class="mt-0 mb-0">
					            <div class="row row-paddingless mb-2">
					                {/* <!--begin::Item--> */}
					                <div class="col">
					                    <div class="d-flex align-items-center mr-2">
					                        {/* <!--begin::Symbol--> */}
					                        <div class="symbol symbol-30 symbol-light mr-4 flex-shrink-0">
					                            <div class="symbol-label">
					                                <span class="svg-icon svg-icon-md svg-icon-info">
                                                        <SVG
                                                            src={toAbsoluteUrl(
                                                                "/media/svg/icons/Shopping/Cart3.svg"
                                                            )}
                                                        ></SVG>
					                                    {/* <!--begin::Svg Icon | path:assets/media/svg/icons/Shopping/Cart3.svg--> */}
					                                    {/* <!--end::Svg Icon--> */}
					                                </span>
					                            </div>
					                        </div>
					                        {/* <!--end::Symbol--> */}

					                        {/* <!--begin::Title--> */}
					                        <div>
					                            <div class="font-size-h4 text-light font-weight-bolder">$2,034</div>
					                            <div class="font-size-sm text-muted font-weight-bold mt-1">Author Sales</div>
					                        </div>
					                        {/* <!--end::Title--> */}
					                    </div>
					                </div>
					                {/* <!--end::Item--> */}

					                {/* <!--begin::Item--> */}
					                <div class="col">
					                    <div class="d-flex align-items-center mr-2">
					                        {/* <!--begin::Symbol--> */}
					                        <div class="symbol symbol-30 symbol-light mr-4 flex-shrink-0">
					                            <div class="symbol-label">
					                                <span class="svg-icon svg-icon-md svg-icon-danger">
					                                    {/* <!--begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg--> */}
                                                        <SVG
                                                            src={toAbsoluteUrl(
                                                                "/media/svg/icons/Home/Library.svg"
                                                            )}
                                                        ></SVG>
					                                    {/* <!--end::Svg Icon--> */}
					                                </span>
					                            </div>
					                        </div>
					                        {/* <!--end::Symbol--> */}

					                        {/* <!--begin::Title--> */}
					                        <div>
					                            <div class="font-size-h4 text-light font-weight-bolder">$706</div>
					                            <div class="font-size-sm text-muted font-weight-bold mt-1">Commission</div>
					                        </div>
					                        {/* <!--end::Title--> */}
					                    </div>
					                </div>
					                {/* <!--end::Item--> */}
					            </div>

					            <div class="row row-paddingless">
					                {/* <!--begin::Item--> */}
					                <div class="col">
					                    <div class="d-flex align-items-center mr-2">
					                        {/* <!--begin::Symbol--> */}
					                        <div class="symbol symbol-30 symbol-light mr-4 flex-shrink-0">
					                            <div class="symbol-label">
					                                <span class="svg-icon svg-icon-md svg-icon-success">
					                                    {/* <!--begin::Svg Icon | path:assets/media/svg/icons/Shopping/Cart3.svg--> */}
                                                        <SVG
                                                            src={toAbsoluteUrl(
                                                                "/media/svg/icons/Shopping/Cart3.svg"
                                                            )}
                                                        ></SVG>       
					                                    {/* <!--end::Svg Icon--> */}
					                                </span>
					                            </div>
					                        </div>
					                        {/* <!--end::Symbol--> */}

					                        {/* <!--begin::Title--> */}
					                        <div>
					                            <div class="font-size-h4 text-light font-weight-bolder">$49</div>
					                            <div class="font-size-sm text-muted font-weight-bold mt-1">Average Bid</div>
					                        </div>
					                        {/* <!--end::Title--> */}
					                    </div>
					                </div>
					                {/* <!--end::Item--> */}

					                {/* <!--begin::Item--> */}
					                <div class="col">
					                    <div class="d-flex align-items-center mr-2">
					                        {/* <!--begin::Symbol--> */}
					                        <div class="symbol symbol-30 symbol-light mr-4 flex-shrink-0">
					                            <div class="symbol-label">
					                                <span class="svg-icon svg-icon-md svg-icon-primary">
					                                    {/* <!--begin::Svg Icon | path:assets/media/svg/icons/Shopping/Barcode-read.svg--> */}
                                                        <SVG
                                                            src={toAbsoluteUrl(
                                                                "/media/svg/icons/Shopping/Barcode-read.svg"
                                                            )}
                                                        ></SVG>        
					                                    {/* <!--end::Svg Icon--> */}
					                                </span>
					                            </div>
					                        </div>
					                        {/* <!--end::Symbol--> */}

					                        {/* <!--begin::Title--> */}
					                        <div>
					                            <div class="font-size-h4 text-light font-weight-bolder">$5.8M</div>
					                            <div class="font-size-sm text-muted font-weight-bold mt-1">All Time Sales</div>
					                        </div>
					                        {/* <!--end::Title--> */}
					                    </div>
					                </div>
					                {/* <!--end::Item--> */}
					            </div>
					        </div>
					        {/* <!--end::Items--> */}
					    </div>
					    {/* <!--end::Body--> */}
					</div>
					{/* <!--end::Mixed Widget 16--> */}
					{/* <!--begin::Mixed Widget 1--> */}
					<div class="card card-custom mb-2">
					    {/* <!--begin::Header--> */}
					    <div class="card-header h-auto px-2">
					        {/* <!--begin::Title--> */}
					        <div class="card-title py-1 my-0">
					            <h3 class="card-label">
					                <span class="d-block text-light font-weight-bolder">Recent Stats</span>
					                <span class="d-block text-muted mt-2 font-size-sm">More than 400+ new members</span>
					            </h3>
					        </div>
					        {/* <!--end::Title--> */}
					    </div>
					    {/* <!--end::Header--> */}

					    {/* <!--begin::Body--> */}
					    <div class="card-body p-1">
					        {/* <!--begin::Chart--> */}
					        <div id="kt_mixed_widget_15_chart"></div>
					        {/* <!--end::Chart--> */}
					    </div>
					    {/* <!--end::Body--> */}
					</div>
					{/* <!--end::Mixed Widget 1--> */}
					{/* <!--begin::Mixed Widget 19--> */}
					<div class="card card-custom">
					    {/* <!--begin::Body--> */}
					    <div class="card-body d-flex flex-column px-2 py-4">
					        <div class="d-flex align-items-center justify-content-between flex-grow-1">
					            <div class="mr-2 text-light">
					                <h5 class="font-weight-bolder">Create CRM Reports</h5>
					                <div class="text-muted font-size-md mt-2">
					                    CRM Report for month - April 2017
					                </div>
					            </div>
					            <div class="font-weight-boldest font-size-h1 text-warning">$24,200</div>
					        </div>
					        <div class="pt-5">
					            <div class="d-flex align-items-center justify-content-between mb-2">
					                <div class="text-muted font-weight-bold mr-2">Sale Progress</div>
					                <div class="text-muted font-weight-bold">60%</div>
					            </div>
					            <div class="progress bg-light-warning progress-xs">
					                <div class="progress-bar bg-warning" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
					            </div>
					        </div>
					    </div>
					    {/* <!--end::Body--> */}
					</div>
					{/* <!--end::Mixed Widget 19--> */}
	            </div>
	            {/* <!--end::Wrapper--> */}
            </div>
            {/* <!--end::Content--> */}
        </div>
        // <!--end::Quick Cart-->
    )
}