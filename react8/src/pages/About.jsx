import {Link} from "react-router-dom";

function About() {
    return (
        <div className={'container-fluid p-5 vh-100'}>
            <div className={'container h-100 p-3 rounded-4 border d-grid'}>
                <div>
                    <span className={'fs-5 fw-bold'}>
                        About Page
                    </span>
                    <br/>
                    <span className={'fs-6'}>
                        Home page 에서 About Page 로 이동
                    </span>
                    <hr/>
                    <div className={'d-flex justify-content-end gap-2 align-items-center'}>
                        <Link to={'/home/pages/logout'} className={'btn blueBackBtn'}>
                            로그아웃
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;