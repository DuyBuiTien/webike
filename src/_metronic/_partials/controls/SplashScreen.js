import React from "react";
import {CircularProgress} from "@material-ui/core";
import {toAbsoluteUrl} from "../../_helpers";

export function SplashScreen() {
  return (
    <>
      <div className="splash-screen">
        <img
          src={("/images/logo.png")}
          alt="Metronic logo"
        />
        <CircularProgress className="splash-screen-spinner" />
      </div>
    </>
  );
}
