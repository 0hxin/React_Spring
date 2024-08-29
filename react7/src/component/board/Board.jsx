import BoardList from "./BoardList.jsx";
import {useState} from "react";

function Board() {
    const [viewState, setViewState] = useState('list');
    let view = <BoardList/>;

    const getBoardList = () => {
        view = <BoardList />
        setViewState('list');
    }
    return (
        <div className={'container my-3 d-grid gap-2'}>
            <div className={'d-flex gap-2 justify-content-end'}>
                <button type={'button'} className={'btn boardBtn'} onClick={getBoardList}>
                    목록
                </button>
                <button type={'button'} className={'btn boardBtn'}>
                    상세보기
                </button>
                <button type={'button'} className={'btn boardBtn'}>
                    작성
                </button>
            </div>
            <div>
                {view}
            </div>
        </div>
    );
}

export default Board;