'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var widgets = [];

var getAll = exports.getAll = function getAll() {
    return widgets;
};

var add = exports.add = function add(newWidget) {
    return widgets.push(newWidget);
};

exports.default = {
    getAll: function getAll() {
        return widgets;
    },
    add: function add(newWidget) {
        return widgets.push(newWidget);
    }
};