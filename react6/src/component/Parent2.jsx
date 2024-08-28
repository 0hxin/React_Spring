import {useState} from "react";
import Child3 from "./Child3.jsx";

function Parent2(){
    let parentValue1 = 100;
    const [parentValue2, setParentValue2] = useState(200);

    return (
        <div className={'rounded-2 border p-3 d-grid gap-2'}>
            <span className={'fw-bold'}>부모 컴포넌트</span>
            <div className={'d-grid gap-2 ms-2'}>
                <span>1. 부모 컴포넌트가 가지고 있는 데이터 : {parentValue1}</span>
                <span>2. 부모 컴포넌트가 가지고 있는 데이터 : {parentValue2}</span>
                <Child3 data1={parentValue1} setData2={setParentValue2} />
            </div>
        </div>
    );
}

export default Parent2;