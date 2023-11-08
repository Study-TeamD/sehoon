import React from "react";

const students = [
    {
        id: 1,
        name: "세훈",
    },
    {
        id: 2,
        name: "정세훈",
    },
    {
        id: 3,
        name: "정정세훈",
    },
    {
        id: 4,
        name: "정정정세훈",
    },
];

function AttendanceBook(props){
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;