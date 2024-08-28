import {useState} from "react";
import Dialog3 from "./Dialog3.jsx";

function SignUpDialog() {
    const [nickName, setNickName] = useState('');

    const handleNickName = e => setNickName(e.target.value);
    const handleSighUp = () => alert(`어서오세요, ${nickName}님!`);
    const handleCheckboxChange = () => alert('체크되었습니다.');
    return (
        <div className={'d-grid gap-2'}>
            <Dialog3 title={'화성 탐사 프로그램'}
                     message={'닉네임을 입력하세요'}
                     color={'green'}>
                <div className={'col-sm-8 mx-auto rounded-4 border p-3 d-grid gap-3'}>
                    <div className={'row'}>
                        <label htmlFor={'name'} className={'col-sm-3 col-form-label'}>닉네임</label>
                        <div className={'col-sm'}>
                            <input type={'text'} className={'form-control'} id={'name'}
                                   value={nickName} onChange={handleNickName}/>
                        </div>
                    </div>
                    <div className={'d-flex justify-content-end'}>
                        <button type={'button'} className={'btn customOutlineBtn'}
                                onClick={handleSighUp}>
                            가입하기
                        </button>
                    </div>
                </div>
            </Dialog3>
            <Dialog3 title={'심해 탐사 프로그램'}
                     message={'18세 이상인가요?'}
                     color={'blue'}>
                <div className={'col-sm-8 mx-auto rounded-4 border p-3 d-grid gap-3'}>
                    <label htmlFor={'chk'} className={'form-label'}>
                        <input type={'checkbox'} id={'chk'}
                               className={'form-check-input me-2'}
                               onChange={handleCheckboxChange}/>
                        18세 이상입니다.
                    </label>
                    <div className={'d-flex justify-content-end'}>
                        <button type={'button'} className={'btn customBtn'}
                                onClick={handleSighUp}>
                            가입하기
                        </button>
                    </div>
                </div>
            </Dialog3>
        </div>
    );
}

export default SignUpDialog;