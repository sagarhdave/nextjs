import React from "react";

const SectionName = props => {
    return (
        <div className = "section-name">
            <h1>{props.name}</h1>

            <style jsx>{`
            .section-name h1{
                font-size: 24px;
            }
            `}</style>
        </div>
    )
}

export default SectionName;