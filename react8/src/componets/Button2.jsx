function Button2(props) {
    const clickButton = () => {
        alert(`사용한 버튼 테마 : ${props.theme}`)
    };

    return (
        <button type={'button'} className={`btn ${props.theme}`}
                onClick={clickButton}>
            {props.theme} 버튼
        </button>
    );
}
export default Button2;