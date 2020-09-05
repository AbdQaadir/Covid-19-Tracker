import React from "react";
import LoadingIcon from "./loading.svg";

import "./Loading.css";
const Loading = () => {
  return (
    <div className="container-fluid" id="loading">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-md-8 col-10 text-center">
          <h6>Fetching data...</h6>
          <img src={LoadingIcon} alt="loading-icon" />
        </div>
      </div>
    </div>
  );
};
export default Loading;
