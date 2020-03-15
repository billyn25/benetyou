import React, {Fragment} from 'react';

const LoadingSpinner = ({param,mode}) => (
    <Fragment>
        <div className="spinner-border text-light mt-5" role="status" style={{width: "3rem", height: "3rem"}}>
            <span className="sr-only">Loading...</span>
        </div>
        <p className="text-white mt-3 mb-3 font-weight-bold">{param}</p>
    </Fragment>
);

export default LoadingSpinner;
