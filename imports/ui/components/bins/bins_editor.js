import React, {useEffect} from "react";
import CodeMirror from 'react-codemirror';

const BinsEditor = ({bin}) => {

    // https://github.com/JedWatson/react-codemirror/issues/106

    useEffect(() => {
        const editor = document.querySelector('.CodeMirror').CodeMirror;
        editor.setValue(bin.content);
    }, [bin]);

    const onChange = (content) => {
        Meteor.call("bins.update", bin, content);
    }

    return (
        <div className="col-xs-8">
            <h5>Input</h5>
            <CodeMirror
                value={bin.content}
                onChange={onChange}
                options={{mode: 'markdown', lineNumbers: true}}/>
        </div>
    );
};

export default BinsEditor;