import useThemeStore from "../stores/useThemeStore.jsx";
import useMemberStore from "../stores/useMemberStore.jsx";

function ProfilePage3() {

    // zustand : 전역 상태 관리 라이브러리
    // Context API 와 유사한 방식
    // props 와 상관없이 어느 컴포넌트에서든 호출 및 수정 가능
    // 외부에서도 데이터 수정 가능
    // 단순히 데이터 전달 용으로 사용 시 데이터 수정 용 함수 추가하지 않아도 됨
    // create() : 상태 관리 객체 생성. key-value 쌍으로 데이터 저장
    // set() : 관리 중인 객체 데이터 수정

    const {theme} = useThemeStore();
    const {member} = useMemberStore();

    return (
        <>
            <div className={'row d-flex gap-2 align-items-center'}>
                <span className={'col-sm-5'}>
                    zuStand 를 통해 전달된 데이터
                </span>
                <button type={'button'} className={`col-sm-5 btn ${theme}`}>
                    ${theme} 버튼
                </button>
            </div>
            <div className={'row d-flex gap-2 mt-2 align-items-center'}>
                <span className={'col-sm-5'}>
                    zuStand 를 통해 전달된 데이터
                </span>
                <button type={'button'} className={`col-sm-5 btn greenBackBtn`}>
                    ${member} 버튼
                </button>
            </div>
        </>
    );
}

export default ProfilePage3;