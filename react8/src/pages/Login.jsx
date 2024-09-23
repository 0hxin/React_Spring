import {Link} from "react-router-dom";
import {useState} from "react";

function Login(){
    const[id, setId] = useState("");

    const inputUserId = (e) => {
        
        setId(e.target.value)
    }

    return (
        <div className={'container-fluid p-5 vh-100'}>
            <div className={'container h-100 p-3 rounded-4 border d-grid'}>
                <div>
                    <span className={'fs-5 fw-bold'}>
                        Login Page
                    </span>
                    <br/>
                    <span className={'fs-6'}>
                        Home page 에서 Lgoin Page 로 이동
                    </span>
                    <hr/>
                    <div className={'d-grid gap-2'}>
                        <div className={'form-floating'}>
                            <input type={'text'} className={'form-control'} id={'userId'} placeholder={'아이디'} onChange={inputUserId}/>
                            <label form={'userId'}>
                                아이디
                            </label>
                        </div>
                        <div className={'form-floating'}>
                            <input type={'password'} className={'form-control'} id={'userPw'} placeholder={'비밀번호'}/>
                            <label form={'userPw'}>
                                비밀번호
                            </label>
                        </div>
                        <div className={'d-flex justify-content-end gap-2 align-items-center'}>
                            <Link to={{
                                pathname: '/home/about',
                                state: {
                                    id: id
                                },
                            }} className={'btn blueBackBtn'}>
                                로그인
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;