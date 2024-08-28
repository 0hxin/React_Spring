import {useState} from "react";

function JoinForm(props){
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');

    const changeUserId = e => setUserId(e.target.value);
    const changeUserPw = e => setUserPw(e.target.value);
    const changeUserEmail = e => setUserEmail(e.target.value);
    const changeUserName = e => setUserName(e.target.value);

    const submitClick = e => {
        let msg = `User Id : ${userId}\n`;
        msg += `User Pw : ${userPw}\n`;
        msg += `Email : ${userEmail}\n`
        msg += `Name : ${userName}`;
        alert(msg);

        props.setId(userId);
        props.setPw(userPw);
        props.setEmail(userEmail);
        props.setName(userName);

        // 이벤트를 멈춰줌
        e.preventDefault();
    }

    const resetClick = () => {
        setUserId('');
        setUserPw('');
        setUserEmail('');
        setUserName('');
    }
    return (
        <form onSubmit={submitClick}>
            <div className={'d-grid gap-2'}>
                <div className={'row'}>
                    <label htmlFor={'user-id'} className={'col-form-label col-sm-4'}>User ID</label>
                    <div className={'col-sm'}>
                        <input type={'text'} className={'form-control'}
                               id={'user-id'} value={userId} onChange={changeUserId}/>
                    </div>
                </div>
                <div className={'row'}>
                    <label htmlFor={'user-pw'} className={'col-form-label col-sm-4'}>User PW</label>
                    <div className={'col-sm'}>
                        <input type={'text'} className={'form-control'}
                               id={'user-pw'} value={userPw} onChange={changeUserPw}/>
                    </div>
                </div>
                <div className={'row'}>
                    <label htmlFor={'user-email'} className={'col-form-label col-sm-4'}>Email</label>
                    <div className={'col-sm'}>
                        <input type={'text'} className={'form-control'}
                               id={'user-email'} value={userEmail} onChange={changeUserEmail}/>
                    </div>
                </div>
                <div className={'row'}>
                    <label htmlFor={'user-name'} className={'col-form-label col-sm-4'}>Name</label>
                    <div className={'col-sm'}>
                        <input type={'text'} className={'form-control'}
                               id={'user-name'} value={userName} onChange={changeUserName}/>
                    </div>
                </div>
                <div className={'d-flex justify-content-end gap-2'}>
                    <button type={'submit'} className={'btn customBtn'}>확인</button>
                    <button type={'reset'} className={'btn customOutlineBtn'}
                            onClick={resetClick}>
                        취소
                    </button>
                </div>
            </div>
        </form>
    );
}

export default JoinForm;