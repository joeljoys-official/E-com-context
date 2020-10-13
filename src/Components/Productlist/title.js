import React from "react";

const Title = (props) => {
  return (
    <div className="row">
      <div className="col-12 my-2 mx-auto text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {props.name} <strong className="text-blue">{props.title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
