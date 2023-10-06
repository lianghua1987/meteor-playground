import {Meteor} from 'meteor/meteor';
import {Links} from "../imports/collections/links";
import {WebApp} from "meteor/webapp";
import ConnectRoute from 'connect-route';
import {Bins} from "../imports/collections/bins";

Meteor.startup(() => {

    Meteor.publish('links', function () {
        return Links.find({});
    });

    Meteor.publish('bins', function () {
        return Bins.find({ownerId: this.userId});
    });

    Meteor.publish('sharedBins', function () {
        const user = Meteor.users.findOne(this.userId);
        if (!user) return;
        const email = user.emails[0].address;
        return Bins.find({
            sharedWith: {$elemMatch: {$eq: email}}
        });
    });
});

function onRoute(req, res, next) {
    const link = Links.findOne({token: req.params.token});
    if (link) {
        Links.update(link, {$inc: {clicks: 1}});
        res.writeHead(307, {'Location': link.url});
        res.end();
    } else {
        next();
    }
}

const middleware = ConnectRoute(function (router) {

    router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
