import React from "react";

const SectionName = props => {
    return (
        <div className = "section-name">
            <div className="section-name-left">
            <h1>{props.name}</h1>

            </div>
            <div className="section-name-right">
            <p>{props.openLink}</p>

            </div>

            <style jsx>{`
            .section-name{
                width: 100%;
                display: -webkit-box;
                position: relative;
            }
            .section-name-right{
                position: absolute;
                right:0
            }
            .section-name h1{
                font-size: 24px;
            }
            .section-name-right {
                margin-top: 8px;
                
            }
            .section-name-right p {
                color:#5D89FF;
                font-size:16px;
                cursor: pointer;
            }
            `}</style>
        </div>
    )
}

export default SectionName;