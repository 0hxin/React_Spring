function BetterComponent() {
    const betterItem = [
        {
            img: 'https://www.baskinrobbins.co.kr/assets/images/story/be_better/img_dream.png',
            title: '핑크드림 캠페인이란?',
            subTitle: '배라와 소비자가 함께 만드는 따뜻한 31데이!',
            description: '핑크드림 캠페인은 브랜드와 소비자가 함께\n도움이 필요한 이웃을 지원하는 사회공헌 활동입니다.\n배스킨라빈스는 2023년부터 핑크드림 캠페인의 일환으로 월드비전과 협업해\n브랜드의 대표적 행사인 ‘31데이’ 수익의 3.1%를 기부금으로 적립하고 있습니다.',
            checkList: [
                '31명의 자립준비청년 선발해 생애최초 종합건강검진 및 장학금 지원',
                '자립준비청년 대상 주거 환경 개선비 및 역량강화 교육비 지급',
                '핑크스푼 업사이클링 및 어린이 놀이터 환경 조성 사업 진행'
            ],
            color: '#fb5559',
        },
        {
            img: 'https://www.baskinrobbins.co.kr/assets/images/story/be_better/img_farm.png',  // 핑크팜 이미지
            title: '핑크팜 캠페인이란?',
            subTitle: '지역 농가 상생 프로젝트',
            description: '핑크팜 캠페인은 배스킨라빈스와 지역 농가 청년농부 지원을 위한\n콜라보레이션 상생 프로젝트입니다. 지역 농가 지원을 위한 상품 개발부터\n원료 수급, 특화 제품 개발, 출시까지 지역 농가 지원을 위해 협력하고 있습니다.',
            checkList: [
                '지역 농가, 청년농부 지원 콜라보레이션 제품 출시'
            ],
            color: '#ad8c5f',
        },
        {
            img: 'https://www.baskinrobbins.co.kr/assets/images/story/be_better/img_link.png',
            title: '핑크링크 캠페인이란?',
            subTitle: '중소 기업 콜라보 프로젝트',
            description: '핑크링크 캠페인은 배스킨라빈스에서 중소기업 지원을 위해 진행하는\n콜라보레이션 상생 프로젝트입니다. 제품 개발부터, 협력 매장 제품 출시 및 광고 지원까지\n중소기업과 협력해 상생하며 클린한 환경을 유지하는 프로젝트입니다.',
            checkList: [
                '중소기업 콜라보레이션 제품 출시'
            ],
            color: '#00912a',
        }
    ];

    return (
        <>
            {betterItem.map((item, index) => (
                <div className={'card rounded-3 subCard gap-4'} key={index}>
                    <img src={item.img} className={'card-img'} alt={item.title} />
                    <div className={'d-flex flex-column align-items-start justify-content-center gap-2'}>
                        <span className={'fw-bold fs-1'} style={{color: item.color}}>{item.title}</span>
                        <div className={'d-flex gap-3 align-items-center'}>
                            <span className={'fw-bold fs-5'}>
                                {item.subTitle}
                            </span>
                            <button type={'button'} className={'px-4 py-2 betterBtn rounded-pill'}>
                                더보기
                            </button>
                        </div>
                        <span className={'text-muted small'} dangerouslySetInnerHTML={{ __html: item.description.replace(/\n/g, "<br />") }} />
                        <div className={'d-flex flex-column pe-2'}>
                            {item.checkList.map((check, index) => (
                                <div className={'d-flex gap-3 align-items-center'} key={index}>
                                    <span className={'bi-check fs-4'} style={{color: " #fd80ab"}} />
                                    <span className={'fw-bold'} style={{color:item.color}}>{check}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
export default BetterComponent;