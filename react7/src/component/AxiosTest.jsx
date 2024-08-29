// axios : ajax 비동기 통신 위한 자바스크립트 라이브러리
// npm install axios -> import axios from 'axios'
// axios.단축명령어(접속주소, 매개변수)
// .then(res => { 성공 시 실행할 소스 })
// .catch(err => { 실패 시 실행할 소스 })

// axios.get("url", {
//     params: {
//         id : '',
//         pw : ''
//     }
// })
//     .then(res => {})
//     .catch(err => {})
// axios.post("url", {
//     id: "",
//     pw : ""
// })
//     .then(res => {})
//     .catch(err => {});

import axios from "axios";
import {useState} from "react";
import AxiosDailyBoxOfficeCard from "./AxiosDailyBoxOfficeCard.jsx";
function AxiosTest() {
    const [dailyBoxOffilce, setDailyBoxOffice] = useState([]);
    axios.get("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20240827")
        .then(res => {
            console.log('비동기 통신 성공');
            const { boxOfficeResult } = res.data;
            const { dailyBoxOfficeList } = boxOfficeResult;

            const updateDailyBoxOffice = dailyBoxOfficeList.map(movie => ({
                rank : movie.rank,
                movieNm : movie.movieNm,
                audiAcc : movie.audiAcc
            }));
            setDailyBoxOffice(updateDailyBoxOffice);
        })
        .catch(err => {
            console.log('비동기 통신 중 오류 발생');
            console.log(err);
        });
    return (
        <div className={'d-grid p-3 gap-2'}>
            <div className={'row row-cols-1 row-cols-sm-5 g-2'}>
                {dailyBoxOffilce.map((movie, index) => (
                    <AxiosDailyBoxOfficeCard key={index} rank={movie.rank} movieNm={movie.movieNm} audiAcc={movie.audiAcc} />
                ))}
            </div>
        </div>
    );
}

export default AxiosTest;