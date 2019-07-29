import React from 'react'

const CourseCardContent = props => {
    return (
        <>
         <div className="course-card" style={props.style}>
            <div className="img-div">
                <img src={props.img} alt=""/>
            </div>
            <div className="name-course">
                <p>{props.course}</p>
                <h3>{props.courseName}</h3>
            </div>
         </div>
         <style jsx>{`
         .img-div img {
             width: 100%;
             height: 238px;
         }
         .course-card{
             height:320px;
             position: relative;
             width: 25%;
         }
         .name-course{
            background-color: white;
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 16px 10px;
         }
         .name-course p{
             margin: 0;
            font-size: 12px;

         }
         .name-course h3 {
             font-size: 16px;
                 margin-top: 6px;
         }
         `}</style>
        </>
    );
}

export default CourseCardContent;