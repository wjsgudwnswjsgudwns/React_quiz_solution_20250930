import { useRef, useState } from 'react';
import './App.css';
import StudentInput from './component/StudentInput';
import StudentList from './component/StudentList';

function App() {

  const [students, setStudents] = useState([]);
  //학생들의 배열 [{name:"홍길동",math:70,eng:60,sci:80,avg:70},{name:"이순신",math:70,eng:60,sci:80}]

  const idRef = useRef(0);

  function onCreateStudent(name, math, eng, sci) {
    // if (!name || !math || !eng || !sci) { //참이면 4개의 입력값중 1개라도 공백 발생
    //   alert("이름과 모든 과목의 점수는 필수입력사항 입니다.");
    //   return;
    // }

    const avg = ((Number(math) + Number(eng) + Number(sci))/3).toFixed(2);
    //소수점 2자리까지만 저장

    const newStudent = {
      id: idRef.current, //id값은 0부터 시작 1씩 늘어나게 저장
      name, //문자열은 이름만 선언
      math: math,
      eng: eng,
      sci: sci,
      avg: avg
    };

    setStudents([...students, newStudent]); //최신 학생을 뒤에 추가
    idRef.current += 1; //id값은 0부터 시작 1씩 늘어나게 저장
  };

  function deleteStudent(id) {
    setStudents( //학생을 삭제한 결과를 반영
      students.filter((student)=>(student.id !== id))
    );
  }

  return (
    <div className="App">
      <h2>학생 성적 관리</h2>
      <StudentInput onCreateStudent={onCreateStudent} />
      <StudentList students={students} onDelete={deleteStudent} />
    </div>
  );
}

export default App;