import {useLocation, useNavigate} from "react-router-dom";

function RouterPage() {
    const location = useLocation();
    const {str} = location.state || {str: ''}

    const movePage = useNavigate();
    function backPageMove() {
        // history 사용하여 이전 페이지 이동
        movePage(-1);
    }
    return (
        <div className={'container-fluid p-5'}>
            <div className={'container p-3 border rounded-4 text-center'}>
                <span className={'fs-4 yellowMark'}>전달받은 값 : {str}</span>
                <div className={'d-flex justify-content-center'}>
                    <button type={'button'} className={'btn yellowBackBtn'} onClick={backPageMove}>
                        뒤로 가기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RouterPage;