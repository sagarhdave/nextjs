import React from 'react'

const CourseCard = props => {
    return (
        <>
         <div className="course-card-section">
            {props.children}
         </div>

         <style jsx>{`
         .course-card-section {
             padding: 100px 0;
             background-color: #F7F7F7;
             
         }
         `}</style>
        </>
    );
}

export default CourseCard;