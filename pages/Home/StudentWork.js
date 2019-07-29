import React from 'react';

const StudentWork = props => {
    return (
        <div className="student-work">
            {props.children}

            <style jsx>{`
            .student-work {
                padding: 100px 0;
            }
            `}</style>
         </div>
    )
}

export default StudentWork;