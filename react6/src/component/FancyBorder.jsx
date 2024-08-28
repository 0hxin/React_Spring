function FancyBorder(props) {
    return (
        <div className={'rounded-2 p-3 FancyBorder FancyBorder-' + props.color}>
            <span className={'fw-bold'}>자식 컴포넌트 영역</span>
            <span className={'Dialog-title'}>어서오세요.</span>
            <span className={'Dialog-message'}>
                    우리 사이트에 방문하신 것을 환영합니다!
            </span>
        </div>
    );
}

export default FancyBorder;