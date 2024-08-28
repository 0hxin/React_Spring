function Child2(props){
    return (
        <div className={'p-3 rounded-2 border'}>
            <span className={'fw-bold'}>오른쪽 자식 컴포넌트</span>
            <div className={'d-grid gap-2 mt-2 ms-2'}>
                <span>1. 첫 번째 전달받은 값</span>
                <span className={'ms-2'}>: {props.data}</span>
                <span>2. 두 번째 전달받은 값</span>
                <span className={'ms-2'}>: {props.data2}</span>
            </div>
        </div>
    );
}

export default Child2;