import React from "react";
import {useParams} from 'react-router-dom'
import {useTracker} from "meteor/react-meteor-data";

import {Bins} from "../../../collections/bins";
import BinsEditor from "./bins_editor";
import BinsViewer from "./bins_viewer";
import {Meteor} from 'meteor/meteor';


const BinsMain = () => {
    const {binId} = useParams();
    const loading = useTracker(() => {
        const handler = Meteor.subscribe('bins');
        return !handler.ready();
    })
    const bin = useTracker(() => Bins.findOne(binId));

    if (loading) return <div>Loading...</div>
    return (
        <div>
            <BinsEditor bin={bin}/>
            <BinsViewer bin={bin}/>
        </div>
    );
}

export default BinsMain;