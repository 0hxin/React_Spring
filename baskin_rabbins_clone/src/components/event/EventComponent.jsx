function EventComponent(props) {
    const { menu } = props;
    const item = {
        'All': [
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/2206def95518af212e4474114f873232.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '우석PICK 블록팩 세트 사전예약 시,\n3천원 OFF!',
                date: '2024-09-27 ~ 2024-10-03'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/5a41d373649a7bfcd77130e066fca78b.png',
                type: '온라인 이벤트',
                color: '#65c7fd',
                title: '우석이 디지털 굿즈 4차',
                date: '2024-09-25 ~ 2024-10-01'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/5a41d373649a7bfcd77130e066fca78b.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '스윗 테라피',
                date: '2024-09-26 ~ 2024-09-30'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/b76dc1736963cfe2c4ba3b8235e1886e.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '지금 배라에서 우석이 포근 블랭킷을\n만나보세요!',
                date: '2024-09-25 ~ 2024-10-30'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/6112f167c63f6d7f55590f23105ac97a.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '쿼터 이상 구매 시, 우석이 포토카드 SET\n600원',
                date: '2024-09-13 ~ 소진 시 까지'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/6112f167c63f6d7f55590f23105ac97a.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '우석이와 배라샷, 우석이 등신대 인증샷\n이벤트',
                date: '2024-09-13 ~ 소진 시 까지'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/71817c0bf7dc2ef6e4730f3930525280.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '우석이 등신대 인증샷 EVENT',
                date: '2024-09-23 ~ 2024-10-30'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/8a5d94cfdda901dd0385d4dbaa024ce4.jpg',
                type: '제휴혜택',
                color: '#fd79ab',
                title: 'LG U+ 멤버십 배스킨라빈스 특별한\n제휴 혜택',
                date: '2024-03-01 ~ 2024-12-31'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/090b435e703e9afa05a0b00ad00a7b07.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '워크샵 by 배스킨라빈스 그랜드 오픈',
                date: '상시 운영'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/29d4d75e4737b7c0c7445586e4d48dee.jpg',
                type: '제휴혜택',
                color: '#fd79ab',
                title: '유독Pick 구독하고 배스킨라빈스\n4,000원 할인 받기!',
                date: '2023-11-01 ~ 2024-10-31'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/cd99fb2f46c76c61090adc4c446f29c0.png',
                type: '제휴혜택',
                color: '#fd79ab',
                title: '이제 배라에서도 애플페이',
                date: '상시 운영'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/c9b25ee4553b2ecfc6da305bdc5de276.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '해피앱에서 5% 적립 놓치지 마세요!',
                date: '상시 운영'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/8b5648c719be9a733e7cdee3e85ea62d.png',
                type: '제휴혜택',
                color: '#fd79ab',
                title: '2024 KT 멤버십 배스킨라빈스 특별한\n제휴 혜택!',
                date: '상시 운영'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/7d9526983466705ca23739ae162d76ee.jpg',
                type: '프로모션',
                color: '#65c7fd',
                title: 'T멤버십 회원 대상 싱글레귤러 최대\n50% 할인 또는 적립',
                date: '상시 운영'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/8e5747a04cbeb6c854716c824d19ec27.png',
                type: '제휴혜택',
                color: '#fd79ab',
                title: '현대카드 M포인트 50% 사용',
                date: '상시 운영'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/388539cae1fd5d2f219392ad712b21ff.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '1회용 컵 사용 줄이기 안내',
                date: '상시 운영'
            }
        ],
        'Promotion': [
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/2206def95518af212e4474114f873232.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '우석PICK 블록팩 세트 사전예약 시,\n3천원 OFF!',
                date: '2024-09-27 ~ 2024-10-03'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/5a41d373649a7bfcd77130e066fca78b.png',
                type: '온라인 이벤트',
                color: '#65c7fd',
                title: '우석이 디지털 굿즈 4차',
                date: '2024-09-25 ~ 2024-10-01'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/5a41d373649a7bfcd77130e066fca78b.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '스윗 테라피',
                date: '2024-09-26 ~ 2024-09-30'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/b76dc1736963cfe2c4ba3b8235e1886e.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '지금 배라에서 우석이 포근 블랭킷을\n만나보세요!',
                date: '2024-09-25 ~ 2024-10-30'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/6112f167c63f6d7f55590f23105ac97a.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '쿼터 이상 구매 시, 우석이 포토카드 SET\n600원',
                date: '2024-09-13 ~ 소진 시 까지'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/6112f167c63f6d7f55590f23105ac97a.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '우석이와 배라샷, 우석이 등신대 인증샷\n이벤트',
                date: '2024-09-13 ~ 소진 시 까지'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/71817c0bf7dc2ef6e4730f3930525280.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '우석이 등신대 인증샷 EVENT',
                date: '2024-09-23 ~ 2024-10-30'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/090b435e703e9afa05a0b00ad00a7b07.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '워크샵 by 배스킨라빈스 그랜드 오픈',
                date: '상시 운영'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/c9b25ee4553b2ecfc6da305bdc5de276.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '해피앱에서 5% 적립 놓치지 마세요!',
                date: '상시 운영'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/7d9526983466705ca23739ae162d76ee.jpg',
                type: '프로모션',
                color: '#65c7fd',
                title: 'T멤버십 회원 대상 싱글레귤러 최대\n50% 할인 또는 적립',
                date: '상시 운영'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/388539cae1fd5d2f219392ad712b21ff.png',
                type: '프로모션',
                color: '#65c7fd',
                title: '1회용 컵 사용 줄이기 안내',
                date: '상시 운영'
            }
        ],
        'Benefit': [
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/8a5d94cfdda901dd0385d4dbaa024ce4.jpg',
                type: '제휴혜택',
                color: '#fd79ab',
                title: 'LG U+ 멤버십 배스킨라빈스 특별한\n제휴 혜택',
                date: '2024-03-01 ~ 2024-12-31'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/29d4d75e4737b7c0c7445586e4d48dee.jpg',
                type: '제휴혜택',
                color: '#fd79ab',
                title: '유독Pick 구독하고 배스킨라빈스\n4,000원 할인 받기!',
                date: '2023-11-01 ~ 2024-10-31'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/cd99fb2f46c76c61090adc4c446f29c0.png',
                type: '제휴혜택',
                color: '#fd79ab',
                title: '이제 배라에서도 애플페이',
                date: '상시 운영'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/8b5648c719be9a733e7cdee3e85ea62d.png',
                type: '제휴혜택',
                color: '#fd79ab',
                title: '2024 KT 멤버십 배스킨라빈스 특별한\n제휴 혜택!',
                date: '상시 운영'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/8e5747a04cbeb6c854716c824d19ec27.png',
                type: '제휴혜택',
                color: '#fd79ab',
                title: '현대카드 M포인트 50% 사용',
                date: '상시 운영'
            },
        ]
    }

    return (
        <div className={'py-5'}>
            <div className={'eventGrid'}>
                {item[menu].map((item, index) => (
                    <div className={'card rounded-3 subCard gap-3'} key={index}>
                        <img src={item.img} className={'card-img'} alt={item.title}/>
                        <div className={'d-flex flex-column align-items-start justify-content-center gap-2'}>
                            <span className={'fs-6'} style={{color: item.color}}>
                                {item.type}
                            </span>
                            <span className={'fw-bold fs-6'} dangerouslySetInnerHTML={{__html: item.title.replace(/\n/g, "<br />")}} />
                            <span className={'eventDate'}>
                                {item.date}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventComponent;