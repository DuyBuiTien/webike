import React, {Suspense, lazy} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_metronic/layout";
import {BuilderPage} from "./pages/BuilderPage";
import {DashboardPage} from './modules/Dashboard/DashboardPage'
import {DetailPage} from './modules/Detail/DetailPage'
// const GoogleMaterialPage = lazy(() =>
//   import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
// );
// const ReactBootstrapPage = lazy(() =>
//   import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
// );
// const ECommercePage = lazy(() =>
//   import("./modules/ECommerce/pages/eCommercePage")
// );

export default function BasePage() {
    // useEffect(() => {
    //   console.log('Base page');
    // }, []) // [] - is required if you need only one call
    // https://reactjs.org/docs/hooks-reference.html#useeffect

    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
             <Switch>
            {
                /* Redirect from root URL to /dashboard. */
                <Redirect exact from="/" to="/home" />
            }
                {/* <ContentRoute path="/dashboard" component={DashboardPage}/> */}
                <Route path="/home" component={DashboardPage}/>
                <Route path="/detail" component={DetailPage}/>
                {/* <ContentRoute path="/" component={MapPage}/> */}
                {/* <Redirect to="error/error-v1"/> */}
                <Redirect to="error/error-v1" />
            </Switch>

        </Suspense>
    );
}
