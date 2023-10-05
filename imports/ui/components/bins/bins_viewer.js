import React from "react";
import {markdown} from 'markdown';

const BinsViewer = ({bin}) => {
    const html = markdown.toHTML(bin.content);
    return (
        <div className="col-xs-4">
            <h5>Output</h5>
         <div dangerouslySetInnerHTML = {{__html: html}}></div>
        </div>
    );
};
export default BinsViewer;