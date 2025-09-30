import { useState } from "react";
import "./StudentInput.css"

function StudentInput({onCreateStudent}) {

    const [name, setName] = useState("");
    const [math, setMath] = useState("");
    const [eng, setEng] = useState("");
    const [sci, setSci] = useState("");

    function onChangeName(e) {
        setName(e.target.value);      
    }
    function onChangeMath(e) {
        setMath(e.target.value);      
    }
    function onChangeEng(e) {
        setEng(e.target.value);       
    }
    function onChangeSci(e) {
        setSci(e.target.value);      
    }

    function addStudent() {
        onCreateStudent(name, math, eng, sci); 
        //부모 App에서 받아온 함수 호출->부모 App에게 유저가 입력한 
        //name, math, eng, sci를 전달
        
        //다시 입력란을 빈칸으로 초기화
        setName("");
        setMath("");
        setEng("");
        setSci("");
    }

    return (
        <div className="StudentInput">
            <input type="text" value={name} placeholder="이름" onChange={onChangeName} />
            <input type="number" value={math} placeholder="수학" onChange={onChangeMath} />
            <input type="number" value={eng} placeholder="영어" onChange={onChangeEng} />
            <input type="number" value={sci} placeholder="과학" onChange={onChangeSci} />
            <button onClick={addStudent}>추가</button>
        </div>
    );
}

export default StudentInput;