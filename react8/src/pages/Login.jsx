import {Link} from "react-router-dom";
import {useState} from "react";

function Login(){
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
                </div>
            </div>
        </div>
    )
}

export default Login;