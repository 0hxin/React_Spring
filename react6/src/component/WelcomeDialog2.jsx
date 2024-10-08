import Dialog2 from "./Dialog2.jsx";

function WelcomeDialog2(){
    return (
        <div className={'d-grid gap-2'}>
            <Dialog2
                title = {'어서오세요'}
                message = {'우리 사이트에 방문하신 것을 환영합니다!'}
            />
            <Dialog2
                title={'경고!'}
                message={'오류가 발생했습니다.'}
            />
        </div>
    );
}
export default WelcomeDialog2;