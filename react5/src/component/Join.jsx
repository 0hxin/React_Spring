// id, 비밀번호, 이름 email, 휴대전화, 성별 정보 입력
// 확인버튼 클릭 시 console.log 출력

import {useState} from "react";

function Join() {
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [gender, setGender] = useState('');
    
    const handleChangeId = e => {
        setId(e.target.value);
    }
    const handleChangePass = e => {
        setPass(e.target.value);
    }
    const handleChangeName = e => {
        setName(e.target.value);
    }
    const handleChangeEmail = e => {
        setEmail(e.target.value);
    }
    const handleChangeTel = e => {
        setTel(e.target.value);
    }
    const handleChangeGender = e => {
        setGender(e.target.value);
        console.log(gender);
    }
    
    const handleSubmit = e => {
        console.log(`아이디 : ${id}\n
        비밀번호 : ${pass}\n
        이름 : ${name}\n
        이메일 : ${email}\n
        전화번호 : ${tel}\n
        성별 : ${gender}\n`)
        e.preventDefault();
    }
    
    return(
        <div className={'d-grid gap-3'}>
            <form onSubmit={handleSubmit} className={'d-grid gap-2 p-3 rounded-4 border'}>
                <div className={'row'}>
                    <label className={'col-sm-2 col-form-label'}>아이디</label>
                    <div className={'col-sm-10'}>
                        <input type={'text'} className={'form-control'}
                               onChange={handleChangeId} placeholder={'ID를 입력하세요.'}/>
                    </div>
                </div>
                <div className={'row'}>
                    <label className={'col-sm-2 col-form-label'}>비밀번호</label>
                    <div className={'col-sm-10'}>
                        <input type={'password'} className={'form-control'}
                               onChange={handleChangePass} placeholder={'비밀번호를 입력하세요.'}/>
                    </div>
                </div>
                <div className={'row'}>
                    <label className={'col-sm-2 col-form-label'}>이름</label>
                    <div className={'col-sm-10'}>
                        <input type={'text'} className={'form-control'}
                               onChange={handleChangeName} placeholder={'이름을 입력하세요.'}/>
                    </div>
                </div>
                <div className={'row'}>
                    <label className={'col-sm-2 col-form-label'}>이메일</label>
                    <div className={'col-sm-10'}>
                        <input type={'text'} className={'form-control'}
                               onChange={handleChangeEmail} placeholder={'Email을 입력하세요.'}/>
                    </div>
                </div>
                <div className={'row'}>
                    <label className={'col-sm-2 col-form-label'}>전화번호</label>
                    <div className={'col-sm-10'}>
                        <input type={'text'} className={'form-control'}
                               onChange={handleChangeTel} placeholder={'전화번호를 입력하세요.'}/>
                    </div>
                </div>
                <div className={'row'}>
                    <label className={'col-sm-2 col-form-label'}>성별</label>
                    <div className={'col-sm-10'}>
                        <select value={gender} onChange={handleChangeGender}
                                className={'form-control'}>
                            <option value={'Female'}>여성</option>
                            <option value={'Male'}>남성</option>
                        </select>
                    </div>
                </div>
                <div className={'d-flex justify-content-end'}>
                    <button type={'submit'} className={'btn btn-success opacity-50'}>확인</button>
                </div>
            </form>
        </div>
    );
}
export default Join;