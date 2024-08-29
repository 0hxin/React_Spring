function AxiosDailyBoxOfficeCard(props) {
    return (
        <div className={'col'}>
            <div className={'card w-100 h-100'}>
                <div className={'card-body d-grid'}>
                    <span className={'fw-bold'}>{props.rank}위</span>
                    <span className={'text-truncate'}>{props.movieNm}</span>
                    <small className={'card-subtitle text-muted text-end'}>{props.audiAcc}명</small>
                </div>
            </div>
        </div>
    );
}

export default AxiosDailyBoxOfficeCard;