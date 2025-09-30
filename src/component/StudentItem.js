import "./StudentItem.css"

function StudentItem({student, onDelete}) {
    function deleteStudent() {
        onDelete(student.id);
    }
    return (
        <tr className="StudentItem">
            <td>{student.name}</td>
            <td>{student.math}</td>
            <td>{student.eng}</td>
            <td>{student.sci}</td>
            <td>{student.avg}</td>
            <td>
                <button onClick={deleteStudent}>삭제</button>
            </td>
        </tr>
    );
}

export default StudentItem;