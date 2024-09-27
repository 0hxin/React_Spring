function Profile2() {
    const profile = useParams();
    return (
        <div className={'container-fluid p-5 vh-100'}>
            <div className={'container h-100 p-3 rounded-4 border d-grid'}>
                <div>
                    <span className={'fs-5 fw-bold'}>
                        Profile2 Page
                    </span>
                    <br/>
                    <span className={'fs-6'}>
                        url 파라미터 방식으로 데이터를 가져오는 페이지
                    </span>
                    <hr/>
                    <ul className={'list-group'}>
                        <li className={'list-group-item'}>
                            useParams() 사용, 파라미터 1 : {profile.username}
                        </li>
                        <li className={'list-group-item'}>
                            useParams() 사용, 파라미터 2 : {profile.age}
                        </li>
                    </ul>

                    <div className={'d-flex justify-content-end gap-2 align-items-center'}>
                        <Link to={'/home/pages/logout'} className={'btn blueBackBtn'}>
                            로그아웃
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile2;