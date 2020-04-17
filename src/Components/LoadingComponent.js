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
              <i className="fa fa-circle-o-notch fa-pulse fa-4x fa-lg text-primary"></i>
              </div>
        </div>
    );
}