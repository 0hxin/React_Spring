function Chat() {
    return (
        <div className={'d-grid gap-2'}>
            <span className={'fw-bold'}>오른쪽 화면</span>
            <p>오른쪽 화면에 들어가는 p 태그</p>
            <div className={'d-flex justify-content-center'}>
                <button type={'button'} className={'btn customOutlineBtn'}
                        onClick={() => alert('클릭!')}>
                    확인
                </button>
            </div>
        </div>
    );
}

export default Chat;