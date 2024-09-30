function MenuComponent(props) {
    const { menu } = props;
    const menuItem = {
        'iceCream': [
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/cf976fedf77cf2f6599656dd6f7e8339.png',
                title: '숭아야, 그릭다….'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/d07eb9cc2b781a21cfa3f18932473478.png',
                title: '너 T(tea)야??'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/20866af32c8d0ef3adfea668ea8191d6.png',
                title: '우석이도 외계인'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/887250f7da066ade58b926fd49ad67c3.png',
                title: '두바이스타일 초코 통통'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/155dfefd276e2d4cd41718f71ae51e9a.png',
                title: '피치 Pang 망고 Pang'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/1db88b4ce08086f487c72ef55344558a.png',
                title: '나주배 소르베'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/719e8584fd50151284b5ace3589f7a34.png',
                title: '소금 우유 아이스크림'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/0b22f758c9d1d0551498caafc4512f5c.png',
                title: '봉쥬르, 마카롱'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/df7fdd6f667571b6521ae17cd27e3843.png',
                title: '알폰소 망고'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/eec8cef386cf6697768a89b384c07bf7.png',
                title: '애플 민트'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/096ee685c57d13d41a0808e390a7d5af.png',
                title: '나는 딸기치오'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/91c8668227bcf556c43a968b97e342e6.png',
                title: '엄마는 외계인'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/fb92d70dee836652115c4f3b13175541.png',
                title: '민트 초콜릿 칩'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/60a04a3a5d1b0119f065d12ee7797b2c.png',
                title: '뉴욕 치즈케이크'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/5ad63f3af7244a666d981a1497a39fe7.png',
                title: '레인보우 샤베트'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/f6609e3e3431d54beceeb1d3787403af.png',
                title: '체리쥬빌레'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/a4b71e8b99743c93a7824331850b0a3d.png',
                title: '슈팅스타'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/387609a495e841413a453ce22b555840.png',
                title: '사랑에 빠진 딸기'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/414246bd9041530d6ad4d30d97aac87c.png',
                title: '오레오 쿠키 앤 크림'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/ea6608b4f72563b360da5c44c946ddc7.png',
                title: '베리베리 스트로베리'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/d56328637eaf86e3273ebc39c57aada7.png',
                title: '31요거트'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/01ecc320f5d3a6f32e5188eda373842d.png',
                title: '바람과 함께 사라지다'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/4db4f9967ad6f603837a40eede965ef0.png',
                title: '이상한 나라의 솜사탕'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/868364b0ed6038d0c9aee0a10e50d4a9.png',
                title: '피스타치오 아몬드'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/0d67607c2ca4dde4ec24ac8109a343c2.png',
                title: '초콜릿'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/a6bd7bcdd6bdb56f28df7e98f051abda.png',
                title: '그린티'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/69f8fcb8dadccc84a8ad1f86d203decd.png',
                title: '찰떡이구마'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/aff1c39b1653ddb7701abd9b4c8394ee.png',
                title: '초콜릿'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/f31388da0371388c2086a7c90990a097.png',
                title: '자모카 아몬드 휘지'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/ca800b8e4507c45ccaab14fd49cf8bec.png',
                title: '월넛'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/505b2fe8d9c444d638665fbb40c6f8a5.png',
                title: '초콜릿 칩'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/e7cb5667c3147ddb0b31e28d1f365980.png',
                title: '아몬드 봉봉'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/901f131644310c0eb356cbab7ecc4738.png',
                title: '바닐라'
            }
        ],
        'prePack': [
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/e479a96325e2ce8259f12fe4215b81b1.png',
                title: '블록팩 우석이도 외계인'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/315b65b26ffbd4c3dfe86805ade308cd.png',
                title: '요거트 젤라또'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/20d933d26f64fdbe8b152a47e41d96cc.png',
                title: '헤이즐넛 젤라또'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/0fea523c7bf664951c5d2482ff6203ff.png',
                title: '애플망고 젤라또'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/c2afed7da78ec44770540126ee2b08f4.png',
                title: '피스타치오 젤라또'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/82ea3026dc8ae006e2ab847a93831a2d.png',
                title: '블록팩 초콜릿'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/04dd958923ea4bc5668a0575907307ca.png',
                title: '블록팩 바람과 함께 사라지다'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/649d15ba5c0ee220ac1665891a40f5b3.png',
                title: '블록팩 이상한 나라의 솜사탕'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/0c2f9dbf2df7e98ae8ca5717938e9753.png',
                title: '블록팩 민트 초코봉봉'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/a1e44938d8ee97b81378c3799d12eafa.png',
                title: '블록팩 뉴욕치즈케이크'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/205cd429b7612634872bf2cbcb4f21bf.png',
                title: '블록팩 쿠키앤크림'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/a20faf162f5be07c8719005ebbe20812.png',
                title: '블록팩 엄마는 외계인'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/d5eed9e28c9bbb38bdf5c23a3bdfb936.png',
                title: '블록팩 아몬드 봉봉'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/37a574a95dfdd8ce178843172eefaea8.png',
                title: '블록팩 슈팅스타'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/73f7da244c59173112c4896790a46d61.png',
                title: '블록팩 체리쥬빌레'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/01e5a9d0961d820047eb25a9816d3c85.png',
                title: '레디팩 (봉쥬르, 마카롱)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/936c208e5f21a7cc42cce1ba17c5789c.png',
                title: '레디팩 (초콜릿)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/79a16a10e111e995e058bf20098d03db.png',
                title: '레디팩 (31요거트)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/12bb06b6f94f0402844459b28cd00f3b.png',
                title: '레디팩 (레인보우 샤베트)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/198029ce116377afc347fb103a163e6c.png',
                title: '레디팩 (민트 초콜릿 칩)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/ef698119f84c90ecbd67c838b46e1605.png',
                title: '레디팩 (베리베리 스트로베리)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/b867c839e96cbd2470f6f72c940719b1.png',
                title: '레디팩 (소금 우유)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/a6f50a10eaf79cd27c7a49227d588fec.png',
                title: '레디팩 (슈팅스타)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/add246044ad34b80853d4ec90a428819.png',
                title: '레디팩 (아몬드 봉봉)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/4d5f1bb5850989fb114c998659105472.png',
                title: '레디팩 (엄마는 외계인)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/be2ef4cc0b8143bfdd707fc63abcef85.png',
                title: '레디팩 (오레오 쿠키앤크림)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/fba0fd65ed9872413034c5a117936662.png',
                title: '레디팩 (체리쥬빌레)'
            }
        ],
        'iceCreamCake': [
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/08880a7d2b6802b65c3659109f9607bc.png',
                title: '두바이스타일 초코 케이크'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/93a1b1df8d2dabda7d2eb113fd8591b9.png',
                title: '러브홀릭 브라운 베어'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/b1eb4781e5c9330972c14a665d4dbc72.png',
                title: '골라먹는 미니 27 큐브'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/5c331d70ce0c24c0c46f892648028dae.png',
                title: '슬픔의 기억구슬'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/a445e8ad5fb0203bf9e8fbea9aa51846.png',
                title: '반짝이는 잔망루피'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/b3b06fe4ac2e85c66686c67880b9cd53.png',
                title: '피치망고 요거팡'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/8bed74a0b6f1c66061595dbede759af6.png',
                title: '오버 더 레인보우'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/dfd673eef468c6af345aa2d1471e3c5f.png',
                title: '마이 디어 하트'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/f00d49bbf3ac26d4fbe4c22120ec65e8.png',
                title: '오 해피데이!'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/09ce1cf70041bce468ceb3f2feb21cd8.png',
                title: '행복한 춘식이다냥'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/aa2275c13db166230d1eeadcf95fd1fe.png',
                title: '달콤한 딸기 속~ 곰돌이'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/394bbb8dd98922cd6d1bf4644b1a8eca.png',
                title: '해피 조이 큐브'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/3d085e3cb45dc98049fcb18e34b2802b.png',
                title: '달콤한 구름이 퐁당퐁당'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/142e3f0494414a5b27ed062ef59dfa25.png',
                title: '더 베스트 No.6'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/a5a104860a7bee772e8425a1695949c2.png',
                title: '해피 스마일 포 유'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/8edd3163f56cbd86a857bed75e7ceabe.png',
                title: '나눠먹는 큐브 와츄원'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/697b35d76069b3fc9918b6aa95b7afbb.png',
                title: '골라먹는 27 큐브'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/7aead36c0215d585d0de252babb69e27.png',
                title: '나눠먹는 와츄원'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/11414604f38c3f66eb806ee75199d322.png',
                title: '골라먹는 스노우 볼'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/fdadeb5abed8e69b5a0c39f80862145c.png',
                title: '골라먹는 외츄원'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/f823c31969f0be3d0840a6a1cceff0f9.png',
                title: '듀얼 와츄원 NO.9'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/1adf22f79ea6c1ce2cd69c3bf03b4dee.png',
                title: '미니 골라먹는 와츄원'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/978eeccc906c70834ad4e2c4b1fb6c3b.png',
                title: '미니 해피 버스데이 케이크'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/6bbeb95b1c27a54582c662f03a335e70.png',
                title: '우주에서 온 엄마는 외계인'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/c18cf399b0ea651b76471fc28ec900d3.png',
                title: '해피 버스데이'
            }
        ],
        'desert': [
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/6885ae78e312c7a5cb3d2a28e63222e3.png',
                title: '우석이도 외계인 선데'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/d4a66a667f85840a27bd1c35746c6a83.png',
                title: '아몬드봉봉모찌'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/de8176bae5e0f3971d6c2e801664bf7b.png',
                title: '아이스 모찌 슈크림'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/565cef1d7bb290cf1aefc4ac4f40716b.png',
                title: '마이멜로디 스틱바 딸기 요거트'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/5007ac3e794a0f9a2bf4795c146a99f5.png',
                title: '쿠로미 스틱바 블랙소르베 제로'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/d7f34f03355ea216e544841873138692.png',
                title: '우석이도 외계인 마카롱'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/438e54f4db28a90e6346535c3f3cb3ec.png',
                title: '맥심 스틱바 슈프림골드'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/b2cf62f1bb60fdda5425f6aaf1992e00.png',
                title: '미니 쿠키 샌드 바닐라'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/3ddf70c91ab47bac7ca789978eff3ff5.png',
                title: '아이스크림 롤 바닐라'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/3428eb25efb576d20b2b57a0f3c3c0f3.png',
                title: '아이스크림 롤 초콜릿'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/7893bf03149cf8ba11cd17e7f6440d19.png',
                title: '맥심 스틱바 모카골드 마일드'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/7205bad42dd52fe69aaa5aa48dc66e6a.png',
                title: '미니 아이스 스틱바 바닐라'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/10f457f80858becc47e42cc5c3215bcc.png',
                title: '아이스 마카롱 체리쥬빌레'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/5fae5dd3de94fcdb7809ae8d14a17ff4.png',
                title: '아이스 마카롱 초콜릿 무스'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/d77231045481f7f28405e42571307671.png',
                title: '아이스 마카롱 쿠키앤크림'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/fa2cfb173a0be7c261ba81cc65523122.png',
                title: '아이스 모나카 쫀떡 인절미'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/b95a17e5f5e253f65fd91950a8d6dcda.png',
                title: '아이스 모나카 우유'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/c976f291579a446b8f56a9aca7c9274d.png',
                title: '아이스 모찌 소금우유'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/866935365b96c08934b33be614fcf724.png',
                title: '아이스 모찌 그린티'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/bc2b065ccd40e0fb0fad9daa82fb2334.png',
                title: '아이스 모찌 스트로베리'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/ed9b0e2804f9e304d29df56df631d3d2.png',
                title: '아이스 모찌 초코바닐라'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/8a82b571539d4fcfbd77f95ab2cd7095.png',
                title: '아이스 모찌 크림치즈'
            }
        ],
        'drink': [
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/4cded1f7de24a7d80bf0c01837b40e76.png',
                title: '바삭 두바이 스타일 초코 블라스트'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/08a91303a0a7959996ef562a73e3b3f2.png',
                title: '바삭 민트초코 블라스트'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/846b3ba33e33e1f82021b361010b1cbc.png',
                title: '남작복숭아 망고 PANG! 아이스티'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/fe5f674f1bb7020b1e1a54314276d187.png',
                title: '피치망고 PANG! 에이드'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/f26efd1ca8e442dfac08003830eaf9e3.png',
                title: '맥심 모카골드 블라스트'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/9360fc4e467949d114767a6229415ac8.png',
                title: '이상한 나라의 솜사탕 블라스트'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/3e382ee9fab04dfd813d6107df5184ab.png',
                title: '우주 라이크 봉봉 블라스트'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/46f14774608908caebdac79b9ffd529d.png',
                title: '과일 블라스트 (설향딸기, 리치워터, 멜론)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/2900034be829cb2dd46ce78cba473e1d.png',
                title: '티 블라스트 (자몽 블랙티, 레몬라임 민트티)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/f02e17bb99a602f9fd5618195f3f3003.png',
                title: '요거트 블라스트 (스트로베리)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/ce8b2ddadaf32cc9ac64690b3ec655c1.png',
                title: '카푸치노 블라스트 (오리지널, 모카)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/2c43f368912b952996b9654e68ecb8e4.png',
                title: '아이스크림 블라스트 (아몬드봉봉, 엄마는 외계인)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/1732ad450c6fbd27c04dd5d8f384d47c.png',
                title: '외츄원 쉐이크'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/1f4469a3408b0c270e442e404f0d381f.png',
                title: '밀크 쉐이크'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/799bd65b7917196af3742aa6f6f274f7.png',
                title: '오레오 쉐이크 (오리지널, 딸기, 초코)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/c41a292f3b11a6986f2e42d910170782.png',
                title: '티류 (복숭아, 캐모마일민트, 리치베리)'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/76341cf30ea88200db6f534db926d5df.png',
                title: '라떼류 (딸기 연유 라떼)'
            }
        ],
        'coffee': [
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/71cdac7da36c6b86f558809d55fa89d7.png',
                title: '아메리카노'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/6f181421da936b53987d62a77b3543a5.png',
                title: '카페라떼'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/83d068d66ba964d6f715fb6a9e4bc6cf.png',
                title: '바닐라빈 라떼'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/eb41ede048e0faf3cbcad2a9a410439b.png',
                title: '카라멜 마끼아또'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/e0cf14f4875c051361d0551257f15d95.png',
                title: '엄마는 외계인 카페모카'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/683ef6e1452a25c52c4019b07654bd23.png',
                title: '연유라떼'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/d44b202e88deebee28ab469dbc2ac5f1.png',
                title: '카페31'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/b87fa403b37c6ae08c515b6802a6b1f6.png',
                title: '아포가토 라떼'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/eff3cd6543c401bc268d20043c468d62.png',
                title: '솔티크림 슈페너'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/795925f2826670e7a5e61507bce224b0.png',
                title: '솔티크림 라떼'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/4d79417d9c0b5c6f08af5a2136ee0844.png',
                title: '콜드브루 아메리카노'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/9873d1a5e586fac5471a1dc59942c060.png',
                title: '콜드브루 라떼'
            },
            {
                img: 'https://www.baskinrobbins.co.kr/upload/product/main/2b8f88fe4a6ea35f960e2940ea7f9941.png',
                title: '콜드브루 오트'
            }
        ]
    }
    return (
        <div className={'menuGrid'}>
            {menuItem[menu].map((item, index) => (
                <div className={'menuItem'} key={index}>
                    <div className={'menuImg'}>
                        <img className={'img-fluid'} src={item.img} alt={item.title} />
                    </div>
                    <span className={'menuTitle'}>{item.title}</span>
                </div>
            ))}
        </div>
    );
}
export default MenuComponent;