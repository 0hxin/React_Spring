import {useState} from "react";
import Greeting from "./Greeting.jsx";

function LoginButton(props) {
    return (
        <button type={'button'}
                className={'btn btn-success opacity-25'}
                onClick={props.onClick}>
            로그인
        </button>
    );
}
function LogoutButton(props) {
    return (
        <button type={'button'}
                className={'btn btn-success opacity-25'}
                onClick={props.onClick}>
            로그아웃
        </button>
    );
}

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }
    let button;

    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />
    }
    else {
        button = <LoginButton onClick={handleLoginClick} />
    }
    return (
        <div className={'d-grid gap-2'}>
            <Greeting isLoggedIn={isLoggedIn}/>
            <div>
                {button}
            </div>
        </div>
    );
}

export default LoginControl;