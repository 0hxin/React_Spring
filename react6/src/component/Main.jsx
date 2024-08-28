import Parent from "./Parent.jsx";
import Parent2 from "./Parent2.jsx";
import Join from "./Join.jsx";
import WelcomeDialog from "./WelcomeDialog.jsx";
import SplitPane from "./SplitPane.jsx";
import Contacts from "./Contacts.jsx";
import Chat from "./Chat.jsx";
import WelcomeDialog2 from "./WelcomeDialog2.jsx";
import SignUpDialog from "./SignUpDialog.jsx";
import ProfileCard from "./ProfileCard.jsx";

import {useNavigate} from "react-router-dom";

function Main() {
    const movePage = useNavigate();
    function goQuizOne(){
        movePage('/quizOne')
    }
    function goQuizTwo(){
        movePage('/quizTwo')
    }
    return (
        <div className={'container my-3 d-grid gap-3'}>
            <div className={'d-grid gap-2'}>
                <div>
                    <span className={'fs-5 bg-warning bg-opacity-10'}>1. 상태 공유하기</span>
                </div>
                <Parent/>
            </div>
            <hr/>
            <div className={'d-grid gap-2'}>
                <div>
                    <span className={'fs-5 bg-danger bg-opacity-10'}>2. 상태 끌어올리기</span>
                </div>
                <Parent2/>
            </div>
            <hr/>
            <div className={'d-grid gap-2'}>
                <div>
                    <span className={'fs-5 bg-warning bg-opacity-10'}>3. Form 이용하기</span>
                </div>
                <Join/>
            </div>
            <hr/>
            <div className={'d-grid gap-2'}>
                <div>
                    <span className={'fs-5 bg-danger bg-opacity-10'}>4. 합성과 상속</span>
                </div>
                <WelcomeDialog/>
            </div>
            <div className={'d-grid gap-2'}>
                <div>
                    <span className={'fs-5 bg-warning bg-opacity-10'}>4-1. 하위 컴포넌트 포함하는 합성</span>
                </div>
                <SplitPane left={<Contacts/>} right={<Chat/>}/>
            </div>
            <div className={'d-grid gap-2'}>
                <div>
                    <span className={'fs-5 bg-danger bg-opacity-10'}>4-2. Specialization 합성</span>
                </div>
                <WelcomeDialog2/>
            </div>
            <div className={'d-grid gap-2'}>
                <div>
                    <span className={'fs-5 bg-warning bg-opacity-10'}>4-3. Containment + Specialization</span>
                </div>
                <SignUpDialog/>
            </div>
            <div className={'d-grid gap-2'}>
                <div>
                    <span className={'fs-5 bg-danger bg-opacity-10'}>4-4. 실습 문제</span>
                </div>
                <ProfileCard/>
            </div>
            <hr/>
            <div className={'d-grid gap-2'}>
                <div>
                    <span className={'fs-5 bg-warning bg-opacity-10'}>5. 문제</span>
                </div>
                <div className={'rounded-2 border p-3'}>
                    <div className={'row'}>
                        <div className={'col-sm'}>
                            <button type={'button'} className={'btn customBtn'}
                                    onClick={goQuizOne}>
                                Quiz01
                            </button>
                        </div>
                        <div className={'col-sm'}>
                            <button type={'button'} className={'btn customBtn'}
                                    onClick={goQuizTwo}>
                                Quiz02
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;