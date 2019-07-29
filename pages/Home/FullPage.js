import React from 'react';

const FullPage = (props) => {
    return (
        <div className="fullPage" style={props.img}>
            {props.children}
        </div>
    );
}

export default FullPage;