import {useEffect, useState} from "react";

function HistoryMenuComponent(props) {
    const { type, menu } = props;
    const [isMenu, setIsMenu] = useState(menu[0]);
    const [isType, setIsType] = useState(type);

    useEffect(() => {
        setIsMenu(menu[0]);
    }, [menu]);
    useEffect(() => {
        setIsType(type)
    }, [type]);

    const Yearimages = {
        "2024": [
            { src: "https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/4b8f997134cd5b0eda0eeb709474beaf.jpg"},
            { src: "https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/1d69ce7e3ff684726bbb4fc2e2f31280.jpg"},
            { src: "https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/6de6fbbf36e0b4fb7f1756e2fa8ce856.jpg"},
            { src: "https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/6a7c50ed814bd5188603ea31cffa0b07.jpg"},
            { src: "https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/9aebe3d625f20ffadb2675f0ae24daf4.jpg"},
            { src: "https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/91af0910dba74500ef7353c10bc61ad6.png"},
            { src: "https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/8a893a42a60109e89fb9ee39e728d596.png"},
            { src: "https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/0457e604adc6249c786c6a50dbfdd200.png"},
        ],
        "2023": [
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/d3f6dcd61f7a5aa00569d4aea73fc276.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/0cf86a3b896eda151f5096e78da98242.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/221eb035ba12a7220d35ad8ae1c4ac72.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/0ba24a92c17a2c27306f06cdf03bcb5a.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/dab4342764cf60afed2a4baf30d40aa5.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/f65ef36400abf52678d5907cf91b6977.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/5d9919145dc713a9173dc044743e4988.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/6131249603c2f09e6f3ccd0104d75086.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/0ca6b4dd68753700a804895e7416bba4.png'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/b82195da8f7ae11fa1ce8164f577fa0a.png'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/9c4bd861eb372a056db535f6dd30c88a.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/59f422e827575adcebada41cd047558e.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/d09aa0a5dcd3845ef806c60e1b6133a6.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/a780948fae58f1256f5ea8dfebff0e05.jpg'},
        ],
        "2022": [
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/cd8daa606e934c0360cb6e90bd0460d2.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/3c4f1a11cf14e6ba0c1c44e0143cd03d.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/7431391259803c22457c617c05b23cfe.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/22b682eb53c72e664ca72168e2e73edb.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/15f9523694a257fdd587e7793f14e3a1.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/586928da2d1bf7dd8befe4bcf9504da2.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/ca4ae61e1ed5048adf7b13c18a9d0169.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/846ea6694d12beb2b3477687e8341b3b.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/968926102d02724fd487e4c61c0b931d.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/76d30385c72fe332f38c3b8bc44e37fb.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/aa6bcaec2fc71786aad78b05a993c1c6.jpg'},
            {src: 'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/9ca1199e5f935fac87760b60d9b29c63.jpg'},
        ],
    };
    const Themeimages = {
        "배라이즈백": [
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/5770da09cfb1943ad29a033b4cef77cb.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/364f9ea0107c8d9eeed17f6b272090fe.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/e6e267822cd815a5163bff682553bdcc.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/5d22c8952caeead057895d75baed0867.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/5efc39913be155d107d8b43980cc4e36.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/bce84ae05ea9604faf075ef12a2efc6b.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/87bc858e71092ff196560963f66f4fbd.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/c3834fc8cf8e0d735e772aad7b5c0850.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/51b59e06872a17bc4567ed737684ecc0.png'}
        ],
        "레전더리플레이버": [
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/b6d14a99302769814f711651b0bdd1f5.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/4cb9c6d72d1249902a830fbcf3acc42b.jpg'},
        ],
        "그레이맛어워드": [
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/5e1e32c11028302951459ffc7b4af57b.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/d4eb0fd8009735273e2fec97c0aa9b13.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/682d10680a68ec9c3acf2734dcb43715.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/9520f86ce924ef995de30fc54dca4292.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/07a2cb2dd13c70d3020b866edc7a1900.jpg'},
            {src:'https://www.baskinrobbins.co.kr/upload/product/monthBastHistory/ac7ff9427122eaadd3cf1aaf5b048e50.jpg'},
        ],
    }

    const menuClick = (item) => {
        setIsMenu(item)
    }

    return (
        <div className={'py-5 d-grid gap-5'}>
            <div className={'historyDetailMenu'}>
                {menu.map((item, index) => (
                    <span key={index}
                          onClick={() => menuClick(item)}
                          className={`historyDetail ${isMenu === item ? 'active' : ''}`}>
                        {item}
                    </span>
                ))}
            </div>
            <div className={'historyGrid'}>
                {isType === 'year' && Yearimages[isMenu]?.map((item, index) => (
                    <img src={item.src} key={index} className={'card-img'} alt={`Image ${index}`}/>
                ))}
                {isType === 'theme' && Themeimages[isMenu]?.map((item, index) => (
                    <img src={item.src} key={index} className={'card-img'} alt={`Image ${index}`}/>
                ))}
            </div>
        </div>
    );
}

export default HistoryMenuComponent;