import Card from "./Card.jsx";

function ProfileCard() {
    return (
        <div className={'d-grid gap-2 p-3 rounded-2 border'}>
            <Card title={'Winter'} backgroundColor ={'#fffbf8'}>
                <span>겨울 언제오니.</span>
                <span>더워 죽겟네..</span>
            </Card>
            <Card title={'굿 파트너'} backgroundColor ={'#fcfff8'}>
                <span>굿 파트너 재밋다.</span>
                <span>피오 빼라 제발.</span>
            </Card>
            <Card backgroundColor ={'#f8fbff'}>
                <span>나 왓네 형</span>
                <span>-45세 남사할 민수옵</span>
            </Card>
        </div>
    );
}
export default ProfileCard;