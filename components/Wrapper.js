import React from 'react';

const Wrapper = (props) => {
    return (
    <div> 
        <div className="contentWrapper">
            {props.children}
        </div>

     <style jsx>{`
        .contentWrapper {
            max-width: 1250px;
            margin: auto;
            padding: 0 30px;
            height: 100%;
        }
      `}</style>
    </div>
    );
    
}

export default Wrapper;