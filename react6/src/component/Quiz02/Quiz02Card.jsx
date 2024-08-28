function Quiz02Card(props) {
    return (
        <div className={'card text-center overflow-hidden'}>
            <div className={'text-white p-3 fs-4 fw-bold' +
                ' quiz2CardHeader-' + props.color}>
                {props.title}
            </div>
            <div className={'d-grid'}>
                <span className={'border-bottom p-2'}>
                    <span className={'fw-bold me-2'}>{props.storage}</span>
                    Storage
                </span>
                <span className={'border-bottom p-2'}>
                    <span className={'fw-bold me-2'}>{props.emails}</span>
                    Emails
                </span>
                <span className={'border-bottom p-2'}>
                    <span className={'fw-bold me-2'}>{props.domains}</span>
                    Domains
                </span>
                <span className={'border-bottom p-2'}>
                    <span className={'fw-bold me-2'}>{props.support}</span>
                    Support
                </span>
                <span className={'border-bottom p-2'}>
                    <span className={'fw-bold fs-4 me-2'}>$ {props.per}</span>
                    <br/>
                    <span className={'text-muted'}>per month</span>
                </span>
            </div>
            <div className={'p-3'}>
                <button type={'button'} className={'btn customBtn-' + props.color}>Sing Up</button>
            </div>
        </div>
    );
}

export default Quiz02Card;