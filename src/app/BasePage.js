import React, {Suspense, lazy} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_metronic/layout";
import {BuilderPage} from "./pages/BuilderPage";
import {DashboardPage} from './modules/Dashboard/DashboardPage';
import {DetailPage} from './modules/Detail/DetailPage';
import {AuthPage} from './modules/Auth/pages/AuthPage';
import { CartPage } from './modules/Cart/CartPage';

export default function BasePage() {

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
                <Route path="/auth" component={AuthPage} />
                <Route path="/cart" component={CartPage} />
                {/* <ContentRoute path="/" component={MapPage}/> */}
                {/* <Redirect to="error/error-v1"/> */}
                <Redirect to="error/error-v1" />
            </Switch>

        </Suspense>
    );
}
