import React, {useRef} from "react";

const BinShare = ({bin}) => {

    const emailRef = useRef();
    const onShareClick = (e) => {
        const email = emailRef.current.value;
        Meteor.call('bins.share', bin, email);
    };

    const renderShareList = () => {
        return bin.sharedWith.map(email => {
            return (
                <div key={email} className="btn btn-default">
                    {email}
                </div>
            )
        })
    };

    return (
        <footer className="bins-share">
            <div className="input-group">
                <input ref={emailRef} className="form-control"/>
                <div className="input-group-btn">
                    <button className="btn btn-default" onClick={onShareClick}>
                        Share Bin
                    </button>
                </div>
            </div>
            <div>Shared With:</div>
            <div className="btn-group">
                {renderShareList()}
            </div>
        </footer>
    );

};

export default BinShare;
