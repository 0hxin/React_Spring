import axios from "axios";
import {useState} from "react";

function AxiosRestAPIServerConn() {
    const [sendData, setSendData] = useState('');
    const [getSendData, setGetSendData] = useState([]);
    const [getParamData, setGetParamData] = useState([]);
    const [postData, setPostData] = useState([]);
    const [putData, setPutData] = useState([]);
    const [deleteData, setDeleteData] = useState([]);

    const clickSendDataGetTest = () => {
        axios.get('/api/test')
            .then(res => {
                setSendData(res.data);
                console.log(res);
            })
            .catch(err=> {
                setSendData("TestController 접속 실패");
                console.log(err);
            })
    }

    const clickSendDataGet = () => {
        axios.get('/api/async/sendDataGet')
            .then(res => {
                setGetSendData(res.data);
            })
            .catch(err=> {
                const getSendDataError = {
                    result: "error",
                    data: "GET 방식 비동기 통신 실패"
                };
                setGetSendData(getSendDataError);
                console.log(err);
            })
    }

    const clickSendDataGetParam = () => {
        axios.get('/api/async/sendDataGetParam', {
            params: {
                idx: 100
            }
        })
            .then(res => {
                setGetParamData(res.data);
                console.log(res);
            })
            .catch(err=> {
                const getSendDataError = {
                    result: "error",
                    data: "axios 이용한 GET Param 방식 비동기 통신 실패"
                };
                setGetParamData(getSendDataError);
                console.log(err);
            })
    }

    const clickSendDataPostParam = () => {
        axios.post('http://localhost:8080/async/sendDataPost', null, {
            params: {
                userId: "AeJin",
                userPw: "1234"
            }
        })
            .then(res => {
                setPostData(res.data);
                console.log(res);
            })
            .catch(err=> {
                const getDataError = {
                    result: "error",
                    data: "POST 비동기 통신 실패"
                };
                setPostData(getDataError);
                console.log(err);
            })
    }
    const clickSendDataPutParam = () => {
        axios.put('http://localhost:8080/async/sendDataPut', null, {
            params: {
                idx: "100"
            }
        })
            .then(res => {
                setPutData(res.data);
                console.log(res);
            })
            .catch(err=> {
                const getDataError = {
                    result: "error",
                    data: "PUT 비동기 통신 실패"
                };
                setPutData(getDataError);
                console.log(err);
            })
    }
    const clickSendDataDeleteParam = () => {
        axios.delete('http://localhost:8080/async/sendDataDelete', {
            params: {
                idx: 450
            }
        })
            .then(res => {
                setDeleteData(res.data);
                console.log(res);
            })
            .catch(err=> {
                const getDataError = {
                    result: "error",
                    data: "DELETE 비동기 통신 실패"
                };
                setDeleteData(getDataError);
                console.log(err);
            })
    }
    return (
        <div className={'d-grid gap-2 p-3'}>
            <div className={'d-flex gap-2 mx-auto'}>
                <div className={'borderCard'}>
                    <div className={'borderCardBody'}>
                        <span>{sendData}</span>
                    </div>
                    <div className={'borderCardFooter'}>
                        <button type={'button'} className={'btn blueBtn'} onClick={clickSendDataGetTest}>
                            RequestMapping Axios 접속
                        </button>
                    </div>
                </div>
                <div className={'borderCard'}>
                    <div className={'borderCardBody'}>
                        <span>{getSendData.result}</span>
                        <span>{getSendData.data}</span>
                    </div>
                    <div className={'d-flex justify-content-end'}>
                        <button type={'button'} className={'btn blueBackBtn'} onClick={clickSendDataGet}>
                            Get 방식 사용
                        </button>
                    </div>
                </div>
            </div>
            <div className={'d-flex gap-2 mx-auto'}>
                <div className={'borderCard'}>
                    <div className={'borderCardBody'}>
                        <span>{getParamData.result}</span>
                        <span>{getParamData.data}</span>
                    </div>
                    <div className={'d-flex justify-content-end'}>
                        <button type={'button'} className={'btn blueBtn'} onClick={clickSendDataGetParam}>
                            GET Param 방식 파라미터 사용
                        </button>
                    </div>
                </div>
                <div className={'borderCard'}>
                    <div className={'borderCardBody'}>
                        <span>{postData.result}</span>
                        <span>{postData.data}</span>
                    </div>
                    <div className={'d-flex justify-content-end'}>
                        <button type={'button'} className={'btn blueBackBtn'} onClick={clickSendDataPostParam}>
                            POST 방식 파라미터 사용
                        </button>
                    </div>
                </div>
            </div>
            <div className={'d-flex gap-2 mx-auto'}>
                <div className={'borderCard'}>
                    <div className={'borderCardBody'}>
                        <span>{putData.result}</span>
                        <span>{putData.data}</span>
                    </div>
                    <div className={'d-flex justify-content-end'}>
                        <button type={'button'} className={'btn blueBtn'} onClick={clickSendDataPutParam}>
                            PUT 방식 파라미터 사용
                        </button>
                    </div>
                </div>
                <div className={'borderCard'}>
                    <div className={'borderCardBody'}>
                        <span>{deleteData.result}</span>
                        <span>{deleteData.data}</span>
                    </div>
                    <div className={'d-flex justify-content-end'}>
                        <button type={'button'} className={'btn blueBackBtn'} onClick={clickSendDataDeleteParam}>
                            DELETE 방식 파라미터 사용
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AxiosRestAPIServerConn;