import React from "react";

export default function Information(props) {
  return (
    <div className="information">
      <div className="row">
        <div className="col-7">
          <h1 id="city">{props.city}</h1>
        </div>
        <div className="col-5">
          <h2 id="date">Saturday 17:19, October 15</h2>
        </div>
      </div>
    </div>
  );
}
