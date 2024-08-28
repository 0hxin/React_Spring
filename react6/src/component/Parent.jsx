import Child1 from "./Child1.jsx";
import {useState} from "react";
import Child2 from "./Child2.jsx";

function Parent() {
    const [data2, setData2] = useState('부모에서 State 로 관리되는 데이터');
    return (
        <div className={'rounded-2 border p-3 d-grid gap-2'}>
            <span className={'fw-bold'}>부모 컴포넌트</span>
            <div className={'row'}>
                <div className={'col-sm'}>
                    <Child1 data={'부모가 전달한 데이터'} data2={data2}/>
                </div>
                <div className={'col-sm'}>
                    <Child2 data={'10000'} data2={data2}/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'d-flex justify-content-end'}>
                    <button type={'button'}
                            className={'btn customBtn'}
                            onClick={() => {
                                setData2('부모한테서 변경된 데이터')
                            }}>
                        클릭 시 부모 데이터 변경
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Parent;