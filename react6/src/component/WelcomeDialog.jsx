import FancyBorder from "./FancyBorder.jsx";
import FancyBorder2 from "./FancyBorder2.jsx";

function WelcomeDialog() {
    return (
        <div className={'rounded-2 border p-3 d-grid gap-2'}>
            <span className={'fw-bold'}>부모 컴포넌트 영역</span>
            <span className={'mt-2 ms-2'}>1. 기존 방식 사용</span>
            <div className={'mx-3'}>
                <FancyBorder color={'blue'}/>
            </div>
            <span className={'mt-2 ms-2'}>2. 새로운 방식 사용</span>
            <div className={'mx-3'}>
                <FancyBorder2 color={'green'}>
                    <span className={'Dialog-title'}>어서오세요.</span>
                    <span className={'Dialog-message'}>
                    우리 사이트에 방문하신 것을 환영합니다!
                </span>
                </FancyBorder2>
            </div>
        </div>
    );
}

export default WelcomeDialog;