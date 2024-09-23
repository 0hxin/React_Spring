
function Button3(props) {
    const {theme, username} = props;
    const clickButton = () => {
        alert(`사용한 버튼 테마 : ${theme} / ${username}`)
    };

    return (
        <div className={'container d-flex'}>
            <div className={'row d-flex gap-2'}>
                <input value={username} className={'col-sm-5 rounded-3 border'}/>
                <button type={'button'} className={`col-sm-5 btn ${theme}`}
                        onClick={clickButton}>
                    {theme} 버튼
                </button>
            </div>
        </div>
    );
}

export default Button3;