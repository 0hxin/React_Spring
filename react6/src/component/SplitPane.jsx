function SplitPane(props) {
    return (
        <div className={'rounded-2 border p-3'}>
            <div className={'row'}>
                <div className={'col-sm text-center'}>
                    {props.left}
                </div>
                <div className={'col-sm text-center border-start'}>
                    {props.right}
                </div>
            </div>
        </div>
    );
}

export default SplitPane;