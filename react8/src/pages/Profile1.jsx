import {Link, useLocation, useSearchParams} from "react-router-dom";

function Profile1() {
    const profile = useLocation();
    console.log(`useLocation() 으로 가져온 데이터`);

    const {pathname, search} = profile;
    console.log(`search : ${search}`);
    console.log(`pathname : ${pathname}`)

    let data = search.substring(1);
    data = data.split('&');
    console.log(data);

    const splitData1 = data[0].split('=');
    const splitData2 = data[0].split('=');

    // useSearchParams() 훅 사용 시, 파라미터 값 자동으로 가져옴
    const [params, setParams] = useSearchParams();
    console.log(`useSearchParams() 으로 가져온 데이터\n
     ${params} / ${params.get('param1')} / ${params.get('param2')}`)

    return (
        <div className={'container-fluid p-5 vh-100'}>
            <div className={'container h-100 p-3 rounded-4 border d-grid'}>
                <div>
                    <span className={'fs-5 fw-bold'}>
                        Profile1 Page
                    </span>
                    <br/>
                    <span className={'fs-6'}>
                        쿼리 스트링을 통해 데이터를 가져오는 페이지
                    </span>
                    <hr/>
                    <span>
                        useLocation() 사용 파라미터 1 : {splitData1[1]}
                    </span>
                    <br/>
                    <span>
                        useLocation() 사용 파라미터 2 : {splitData2[1]}
                    </span>
                    <hr/>
                    <span>
                        useSearchParams() 사용 파라미터 1 : {params.get('param1')}
                    </span>
                    <br/>
                    <span>
                        useSearchParams() 사용 파라미터 2 : {params.get('param2')}
                    </span>
                    <div className={'d-flex justify-content-end gap-2 align-items-center'}>
                        <Link to={'/home'} className={'btn blueBackBtn'}>
                            home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile1;