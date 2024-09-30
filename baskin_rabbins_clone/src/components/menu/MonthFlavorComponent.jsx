function MonthFlavorComponent() {
    const item = [
        {
            img: 'https://www.baskinrobbins.co.kr/upload/product/monthBest/newProduct/b469ac86aa20165f05a18808be11e330.png',
            title: '우석이도 외계인'
        },
        {
            img: 'https://www.baskinrobbins.co.kr/upload/product/monthBest/newProduct/4f5d3fa026d652ac9cd7e92c1c3b6446.png',
            title: '우석이도 외계인 마카롱'
        },
        {
            img: 'https://www.baskinrobbins.co.kr/upload/product/monthBest/newProduct/4cb701675be68ebde956f6acdea4c849.png',
            title: '우석이도 외계인 선데'
        },
        {
            img: 'https://www.baskinrobbins.co.kr/upload/product/monthBest/newProduct/6de78695708c238e5edfd7c05c2d8409.png',
            title: '블록팩 우석이도 외계인'
        }
    ]
    return (
        <div className={'container d-grid gap-5'}>
            <div className={'d-flex flex-column justify-content-center align-items-center pt-5 border gap-4'}>
                <span className={'fw-bold'}>
                    WOOSEOK THE ALIEN
                </span>
                    <span className={'fw-bold fs-1'}>
                    우석이도 외계인
                </span>
                <div className={'text-center'}>
                    우석이가 Pick한 최애 플레이버!<br/>
                    ´엄마는 외계인´과 ´민트 초콜릿 칩´의 만남<br/>
                    더 청량해진 민트 아이스크림과 달콤한 초콜릿 아이스크림에<br/>
                    시그니처 프레첼 볼로 단짠 매력까지!
                </div>
                <div className={'d-flex gap-5 border-top py-3'}>
                    <div className={'d-flex flex-column align-items-center justify-content-center'}>
                        <img className={'img-fluid'}
                             src={'https://www.baskinrobbins.co.kr/upload/product/composition/1617967639d9f29cb59fabc419987da5.png'}
                             alt={'민트'}/>
                        <span>민트</span>
                    </div>
                    <div className={'d-flex flex-column align-items-center justify-content-center'}>
                        <img className={'img-fluid'}
                             src={'https://www.baskinrobbins.co.kr/upload/product/composition/49be46b3704fef603790b34da769005c.png'}
                             alt={'초콜릿'}/>
                        <span>초콜릿</span>
                    </div>
                    <div className={'d-flex flex-column align-items-center justify-content-center'}>
                        <img className={'img-fluid'}
                             src={'https://www.baskinrobbins.co.kr/upload/product/composition/0e7263ec56267ff1c8abc2b4576ed101.png'}
                             alt={'프레첼'}/>
                        <span>초코 프레첼</span>
                    </div>
                </div>
                <img className={'img-fluid'}
                     src={'https://www.baskinrobbins.co.kr/upload/product/monthBest/062632c2138eb6c2aec011fd8f57dd8c.jpg'}/>
            </div>
            <div className={'d-flex flex-column mt-5 justify-content-center align-items-start gap-4'}>
                <span className={'fs-4 fw-bold'}>이달의 신제품</span>
                <div className={'d-flex justify-content-center gap-4'}>
                    {item.map((item, index) => (
                        <div className={'card rounded-3'} key={index}>
                            <img src={item.img} className={'card-img rounded-bottom-3'} alt={item.title} />
                            <div className={'card-body py-4 text-center'}>
                                <span className={'card-text'}>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MonthFlavorComponent;