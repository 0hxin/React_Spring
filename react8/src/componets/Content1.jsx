import ProfilePage1 from "./ProfilePage1.jsx";
import ThemeContext from "../context/ThemeContext.jsx";
import {useContext} from "react";

function Content1() {
    // useContext() : Context 를 편하게 사용할 수 있게 해주는 역할
    // 기존에 선언한 Context 데이터 쉽게 가져올 수 있음
    // Context 의 Consumer 를 부르지 않아도 됨
    const themeContext = useContext(ThemeContext);
    return(
        <ProfilePage1 theme={themeContext} />
    )
}

export default Content1;