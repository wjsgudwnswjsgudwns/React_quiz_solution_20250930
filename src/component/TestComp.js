// import { useState } from "react";
import { useReducer } from "react";

function reducer (state, action) { // 상태변화함수
    //state : 현재 state 변수의 값
    //action : ->촉발함수 dispatch에서 보내준 action객체가 저장
    
    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "INIT":
            return state = 0;
        default:
            return state;
    }
}

function TestComp () {

    // const [count, setCount] = useState(0);

    // const onIncrease = () => { // 상태변화코드
    //     setCount(count+1);
    // }

    // const onDecrease = () => { // 상태변화코드
    //     setCount(count-1);
    // }

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h3>테스트 컴포넌트</h3>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch({type:"INCREASE",data:1})}>증가</button>
                <button onClick={() => dispatch({type:"DECREASE",data:1})}>감소</button>
                <button onClick={() => dispatch({type:"INIT",data:0})}>초기화</button>
            </div>
        </div>
    );
}

export default TestComp;