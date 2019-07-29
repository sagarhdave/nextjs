import React from 'react';

const StudentWorkContent = props => {
    return (
        <div className="student-work-card"  style={props.style}>
            <div className="student-work-card-details">
                <h1>{props.title}</h1>
                <p>{props.course}</p> 
            </div>

            <style jsx>{`
            .student-work-card-details{
                position: absolute;
                bottom: 0;
                left: 19px;
            }
            .student-work-card-details h1{
                font-size: 18px;
                color: #141414;
            }

            .student-work-card-details p{
                padding-right: 80px;
                font-size: 13px;
                color: #5D5D5D;
                line-height: 17px;
            }

            .student-work-card {
                width: 33%;
                height: 354px;
                position: relative;
                float: left;
                background-size: cover;
            }
            `}</style>
        </div>
    )
}

export default StudentWorkContent ;