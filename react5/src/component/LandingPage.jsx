import {useState} from "react";
import Toolbar from "./Toolbar.jsx";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return(
        <div className={'d-flex flex-column gap-2'}>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <span>isLoggedIn <mark>{isLoggedIn ? 'true' : 'false'}</mark></span>
        </div>
    );
}

export default LandingPage;