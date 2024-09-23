import {useContext} from "react";
import MemberContext from "../context/MemberContext.jsx";
import ThemeContext from "../context/ThemeContext.jsx";

function ProfilePage2() {
    const member = useContext(MemberContext);
    const theme = useContext(ThemeContext);
    return (
        <>
            <div className={'row d-flex gap-2 align-items-center'}>
                <span className={'col-sm-5'}>
                    useContext() 로 전달받은 데이터
                </span>
                <button type={'button'} className={`col-sm-5 btn ${theme}`}>
                    {theme} 버튼
                </button>
            </div>
            <div className={'row d-flex gap-2 mt-2 align-items-center'}>
                <span className={'col-sm-5'}>
                    useContext() 로 전달받은 데이터
                </span>
                <button type={'button'} className={`col-sm-5 btn blueBackBtn`}>
                    {member} 버튼
                </button>
            </div>
        </>
    )
}

export default ProfilePage2;