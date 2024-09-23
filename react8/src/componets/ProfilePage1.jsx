import {useContext} from "react";
import MemberContext from "../context/MemberContext.jsx";

function ProfilePage1(props){
    // ThemeContext 에 전달된 데이터는 props 를 사용하여 전달받음
    // MemberContext 에 전달된 데이터는 useContext 로 가져옴
    const member = useContext(MemberContext);
    return (
        <div className={'container'}>
            <div className={'row d-flex gap-2 align-items-center'}>
                <span className={'col-sm-5'}>
                    props 로 전달받은 데이터
                </span>
                <button type={'button'} className={`col-sm-5 btn ${props.theme}`}>
                    {props.theme} 버튼
                </button>
            </div>
            <div className={'row d-flex gap-2 mt-2 align-items-center'}>
                <span className={'col-sm-5'}>
                    useContext() 로 전달받은 데이터
                </span>
                <button type={'button'} className={`col-sm-5 btn orangeBackBtn`}>
                    {member} 버튼
                </button>
            </div>
        </div>
    )
}

export default ProfilePage1;