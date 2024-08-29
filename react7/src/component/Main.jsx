import AxiosTest from "./AxiosTest.jsx";
import AxiosDailyBoxOffice from "./AxiosDailyBoxOffice.jsx";
import AxiosRestAPIServerConn from "./AxiosRestAPIServerConn.jsx";
import {useNavigate} from "react-router-dom";

function Main() {
    const movePage = useNavigate();
    function goBoard(){
        movePage('/board');
    }
    return (
        <div>
            <div className={'container my-3 d-grid gap-4'}>
                <div className={'border rounded-3 p-3'}>
                    <span className={'yellowMark fs-4'}>1. axios 사용하기 - Get</span>
                    <AxiosTest/>
                    <hr/>
                    <AxiosDailyBoxOffice/>
                </div>
                <div className={'border rounded-3 p-3'}>
                    <span className={'blueMark fs-4'}>2. axios 이용한 비동기 통신</span>
                    <AxiosRestAPIServerConn/>
                </div>
                <div className={'border rounded-3 p-3'}>
                    <span className={'orangeMark fs-4'}>3. axios 이용한 데이터베이스 이용</span>
                    <div className={'d-grid px-5 mt-3'}>
                        <button type={'button'} className={'btn orangeBtn'} onClick={goBoard}>
                            Board 게시판 이동
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;