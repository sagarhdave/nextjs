import React from 'react';

const HeaderHeadline = (props) => {
    return (
        <div>

            <div className="headerHeadline">
                <h1>{props.text}</h1>
            </div>
            <style jsx>{`
            .headerHeadline {
                position: absolute;
                bottom: 12.4rem;
            }
            
            .headerHeadline h1 {
                color: #eee;
                font-weight: bold;
                font-size: 4.8rem;
                max-width: 520px;
            }
            `}</style>
        </div>
    )
        
     
}

export default HeaderHeadline;