function FancyBorder2(props) {
    return (
        <div className={'rounded-2 p-3 FancyBorder FancyBorder-' + props.color}>
            <span className={'fw-bold'}>자식 컴포넌트 영역</span>
            {props.children}
        </div>
    );
}
export default FancyBorder2