import React from "react";

// const styles = {
//     wrapper: {
//         padding: 16,
//         display : 'flex',
//         flexDirection : 'row',
//     },
//     greeting : {
//         marginRight : 8,
//     }
// };

function Toolbar(props) {
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return (
        <div className={'d-grid gap-1'}>
            <span>{ isLoggedIn ? '환영합니다.' : '로그인 후 사용하세요.'}</span>
            <div>
                { isLoggedIn ? (
                    <button className={'btn btn-success opacity-25'}
                            onClick={onClickLogout}>로그아웃</button>
                ) : (
                    <button className={'btn btn-success opacity-25'}
                            onClick={onClickLogin}>로그인</button>
                )}
            </div>
        </div>
    );
}
export default Toolbar;