import useThemeStore from "../stores/useThemeStore.jsx";
import useMemberStore from "../stores/useMemberStore.jsx";
import {useCallback, useEffect} from "react";
import {ThemeProvider} from "../context/ThemeContext.jsx";
import Toolbar2 from "../componets/Toolbar2.jsx";
import {MemberProvider} from "../context/MemberContext.jsx";
import Toolbar3 from "../componets/Toolbar3.jsx";
import Layout1 from "../componets/Layout1.jsx";
import Layout2 from "../componets/Layout2.jsx";
import Layout3 from "../componets/Layout3.jsx";
import {useNavigate} from "react-router-dom";

function Main() {
    const { setTheme } = useThemeStore();
    const { setMember } = useMemberStore();

    // useEffect(() => {
    //     setTheme('orangeBtn');
    //     setMember('OrangeBtn');
    // }, [setTheme, setMember]);

    // useMemo, useCallback 사용
    const memoSetTheme = useCallback(() => {
        setTheme('greenBtn');
    }, [setTheme]);

    const memoSetMember = useCallback(() => {
        setMember('GreenBtn');
    }, [setMember]);

    useEffect(() => {
        memoSetTheme();
        memoSetMember();
    }, [memoSetTheme, memoSetMember])

    const movePage = useNavigate();
    function routerPageMove() {
        movePage('/router', {state: {str: '단순 페이지 이동'}});
    }
    function homePageMove() {
        movePage('/home');
    }
    return (
        <div className={'container-fluid p-5 d-grid gap-3'}>
            <div className={'container border rounded-4 p-3'}>
                <span className={'blueMark fs-4'}>
                    1. 기존 방식 데이터 전달
                </span>
                <br/>
                <Toolbar theme={'blueBtn'}/>
            </div>
            <div className={'container border rounded-4 p-3'}>
                <span className={'orangeMark fs-4'}>
                    2. Context API
                </span>
                <br/>
                <span className={'greenMark fs-5'}>
                    2-1. Context API 단순 데이터 전달
                </span>
                <br/>
                <ThemeProvider value={'greenBtn'}>
                    <Toolbar2/>
                </ThemeProvider>
                <hr/>
                <span className={'yellowMark fs-5'}>
                    2-2. Context API 여러 개 데이터 전달
                </span>
                <br/>
                <ThemeProvider value={'yellowBtn'}>
                    <MemberProvider value={'YellowBtn'}>
                        <Toolbar3/>
                    </MemberProvider>
                </ThemeProvider>
                <hr/>
                <span className={'orangeMark fs-5'}>
                    2-3. Context API 여러 개 데이터 전달
                </span>
                <br/>
                <ThemeProvider value={'orangeBtn'}>
                    <MemberProvider value={'OrangeBtn'}>
                        <Layout1/>
                    </MemberProvider>
                </ThemeProvider>
                <hr/>
                <span className={'blueMark fs-5'}>
                    2-4. Context API useContext 사용
                </span>
                <br/>
                <ThemeProvider value={'blueBtn'}>
                    <MemberProvider value={'BlueBtn'}>
                        <Layout2/>
                    </MemberProvider>
                </ThemeProvider>
            </div>
            <div className={'container border rounded-4 p-3'}>
                <span className={'greenMark fs-4'}>
                    3. Zustand 사용
                </span>
                <br/>
                <Layout3/>
            </div>
            <div className={'container border rounded-4 p-3'}>
                <span className={'yellowMark fs-4'}>
                    4. React Router 사용
                </span>
                <br/>
                <div className={'d-flex gap-2'}>
                    <button type={'button'} className={'btn yellowBtn'} onClick={routerPageMove}>
                        단순 페이지 이동
                    </button>
                    <button type={'button'} className={'btn yellowBackBtn'} onClick={homePageMove}>
                        중첩 페이지 이동
                    </button>
                </div>
            </div>
        </div>
    )
}

function Toolbar(props) {
    return (
        <ThemeButton theme={props.theme}/>
    );
}

function ThemeButton(props) {
    return (
        <Button theme={props.theme}/>
    );
}

function Button(props) {
    const clickButton = () => {
        alert(`사용한 부트 스트랩 테마 : ${props.theme}`);
    }

    return (
        <button type={'button'} className={`btn ${props.theme}`}
                onClick={clickButton}>
            {props.theme} 테마
        </button>
    );
}

export default Main;