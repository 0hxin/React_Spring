import React from "react";

const students = [
    {
        id: 1,
        name: "Inje"
    },
    {
        id: 2,
        name: "Steve"
    },
    {
        id: 3,
        name: "Bill"
    },
    {
        id: 4,
        name: "Jeff"
    },
];

function AttendanceBook(props) {
    return(
        <ul className={'list-group b'}>
            {students.map((student, index) => {
                return <li className={'list-group-item'} key={student.id}>{index+1}. {student.name}</li>
            })}
        </ul>
    );
}
export default AttendanceBook;