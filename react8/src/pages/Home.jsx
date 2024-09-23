import {Link, useNavigate} from "react-router-dom";

function Home() {
    const pageNavigate = useNavigate();
    function loginPageMove() {
        pageNavigate('/pages/login');
    }
    return (
        <div className={'container-fluid p-5 vh-100'}>
            <div className={'container h-100 p-3 rounded-4 border d-grid'}>
                <div>
                    <span className={'fs-5 fw-bold'}>
                        Home Page
                    </span>
                    <br/>
                    <span className={'fs-6'}>
                        접속 시 가장 먼저 보이는 페이지
                    </span>
                    <hr/>
                    <div className={'d-flex justify-content-end gap-2 align-items-center'}>
                        <Link to={'/pages/login'} className={'btn blueBackBtn'}>
                            Link 이동 로그인
                        </Link>
                        <button type={'button'} className={'btn blueBtn'} onClick={loginPageMove}>
                            Btn 이동 로그인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;