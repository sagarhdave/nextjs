import React from 'react';

const AlumniWorked = (props) => {
    return (
        <div>
        <div className="alumni-section">
            {props.children}
        </div>



        <style global jsx>{`
            .alumni-section {
                background-color: #1F1F1F;
                padding: 100px 0;
            }
                        
        `}</style>
        </div>
    );
}
export default AlumniWorked;




