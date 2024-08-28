function Child3(props){
    let childValue = 1000;

    const sendData = () => {
        props.setData2(2000);
    }
    
    return (
        <div className={'p-3 rounded-2 border'}>
            <span className={'fw-bold'}>자식 컴포넌트</span>
            <div className={'d-grid gap-2 mt-2 ms-2'}>
                <span>1. 부모 컴포넌트가 전달한 데이터 : {props.data1}</span>
                <span>2. 자식 컴포넌트가 보유한 데이터 : {childValue}</span>
            </div>
            <div className={'d-flex justify-content-end'}>
                <button type={'button'}
                        className={'btn customOutlineBtn'}
                        onClick={sendData}>
                    부모 컴포넌트로 데이터 전달
                </button>
            </div>
        </div>
    );
}

export default Child3;