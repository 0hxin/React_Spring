import axios from "axios";
import {useState} from "react";

function AxiosDailyBoxOffice() {
    const [dailyBoxOffice, setDailyBoxOffilce] = useState([]);
    const getDailyKobis = () => {
        axios.get("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20240827")
            .then(res => {
                const { boxOfficeResult } = res.data;
                const { boxofficeType, dailyBoxOfficeList, showRange } = boxOfficeResult;

                console.log(boxofficeType);
                console.log(dailyBoxOfficeList);
                console.log(showRange);

                const updateBoxOffice = dailyBoxOfficeList.map(movie => ({
                    rank: movie.rank,
                    movieNm : movie.movieNm,
                    openDt : movie.openDt,
                    audiCnt : movie.audiCnt,
                    audiAcc : movie.audiAcc
                }));

                setDailyBoxOffilce(updateBoxOffice);

            })
            .catch(err => {
                console.log('비동기 통신 중 오류 발생');
                console.log(err);
            });
    }
    return (
        <div className={'d-grid p-3 gap-2'}>
            <div className={'d-flex justify-content-between align-items-center'}>
                <span className={'fs-5'}>일일 영화 데이터 조회🎬</span>
                <button type={'button'} className={'btn yellowBtn'} onClick={getDailyKobis}>
                    클릭 시 axios 통신
                </button>
            </div>
            <table className={'table text-center'}>
                <colgroup>
                    <col width={'10%'}/>
                    <col width={'25%'}/>
                    <col width={'20%'}/>
                    <col width={'20%'}/>
                    <col width={'20%'}/>
                </colgroup>
                <thead>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                    <th>당일 관람객</th>
                    <th>누적 관람객</th>
                </tr>
                </thead>
                <tbody>
                {dailyBoxOffice.length === 0
                    ? (
                        <tr>
                            <td colSpan={5}>출력할 내용이 없습니다.</td>
                        </tr>
                    )
                    : (
                        dailyBoxOffice.map((movie, index) => (
                            <tr key={index}>
                                <td>{movie.rank}</td>
                                <td className={'text-truncate'}>{movie.movieNm}</td>
                                <td>{movie.openDt}</td>
                                <td>{movie.audiCnt}</td>
                                <td>{movie.audiAcc}</td>
                            </tr>
                        )))
                }
                </tbody>
            </table>
        </div>
    );
}

export default AxiosDailyBoxOffice;