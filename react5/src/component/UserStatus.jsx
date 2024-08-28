function UserStatus(props) {
    return (
      <div>
          <span>
              이 사용자는 현재&nbsp;
              <span className={'fw-bold'}>
                {props.isLoggedIn ? '로그인한' : '로그인하지 않은'}
              </span> 상태입니다.
          </span>
      </div>
    );
}
export default UserStatus;