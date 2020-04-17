import React from 'react';

export const Loading = () => {
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 450
          }}>
              <div className="row">
              <i className="fa fa-spinner fa-pulse fa-3x fa-lg text-primary" ></i>
              </div>
        </div>
    );
}