function MainBox(props) {
    const unreadMessage = props.unreadMessage;

    return(
        <div>
            <span>안녕하세요!</span>
            {unreadMessage > 0 &&
                <span>
                    &nbsp;현재 <span className={'fw-bold'}>{unreadMessage}</span>개의 읽지 않은 메시지가 있습니다.
                </span>
            }
        </div>
    );
}
export default MainBox;