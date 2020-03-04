import React from 'react';

const LoadingSpinner = () => (
    <div className="spinner-border text-light mt-5" role="status" style={{width:"3rem", height: "3rem"}}>
        <span className="sr-only">Loading...</span>
    </div>
);

export default LoadingSpinner;
