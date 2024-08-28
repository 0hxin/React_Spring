import JoinForm from "./JoinForm.jsx";
import {useState} from "react";

function Join(){
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const resetInput = () => {
        setId('');
        setPw('');
        setEmail('');
        setName('');
    }
    return (
        <div className={'d-grid gap-3 border rounded-2 p-3'}>
            <div className={'row'}>
                <div className={'mx-auto col-sm-6 border rounded-3 p-3 d-grid gap-4'}>
                    <span className={'fw-bold text-center'}>회원가입</span>
                    <JoinForm setId={setId} setPw={setPw} setEmail={setEmail} setName={setName}/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'mx-auto col-sm-6 border rounded-3 p-3 d-grid gap-2'}>
                    <span className={'fw-bold text-center mb-3'}>회원가입 결과</span>
                    <div className={'row'}>
                        <label className={'col-form-label col-sm-4'}>User ID</label>
                        <div className={'col-sm'}>
                            <input type={'text'} readOnly={true}
                                   className={'form-control'} value={id}/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <label className={'col-form-label col-sm-4'}>User PW</label>
                        <div className={'col-sm'}>
                            <input type={'text'} readOnly={true}
                                   className={'form-control'} value={pw}/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <label className={'col-form-label col-sm-4'}>Email</label>
                        <div className={'col-sm'}>
                            <input type={'text'} readOnly={true}
                                   className={'form-control'} value={email}/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <label className={'col-form-label col-sm-4'}>Name</label>
                        <div className={'col-sm'}>
                            <input type={'text'} readOnly={true}
                                   className={'form-control'} value={name}/>
                        </div>
                    </div>
                    <div className={'d-flex justify-content-end'}>
                        <button type={'button'} className={'btn customBtn'}
                                onClick={resetInput}>
                            지우기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;