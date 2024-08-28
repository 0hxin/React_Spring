function Counter(props) {
    const count = props.count;

    return (
        <div>
            {count &&
                <span>
                    현재 카운트 : <span className={'fw-bold'}>{count}</span>
                </span>
            }
        </div>
    );
}
export default Counter;