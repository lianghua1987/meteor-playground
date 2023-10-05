import React from "react";
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown'

const BinsEditor = (props) => {
    const onChange = (content) => {
        Meteor.call("bins.update", props.bin, content);
    }
    return (
        <div className="col-xs-8">
            <h5>Input</h5>
            <CodeMirror
                value = {props.bin.content}
                onChange={onChange}
                options={{mode: 'markdown', lineNumbers: true}}/>
        </div>
    );

};

export default BinsEditor;