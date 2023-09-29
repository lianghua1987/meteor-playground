import {Mongo} from "meteor/mongo";
import {check, Match} from "meteor/check";
import validUrl from 'valid-url';

Meteor.methods({
    'links.insert': function (url) {
        check(url, Match.Where(url => validUrl.is_uri(url)));
        const token = Math.random().toString(36).slice(-5);
        Links.insert({url, token, clicks: 0});
    }
});

export const Links = new Mongo.Collection('links');