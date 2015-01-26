;(function(win) {
    'use strict';

    /*
     * DEFAULTS
     */
    var defaults = {
        // here goes the defaults of the App
    };

    /*
     * CONSTRUCTOR
     */
    function App(config) {
        // singleton wrapper
        if (!App._instance) {
            // set the instance of the App
            if (!(this instanceof App)) {
                return new App(config);
            }

            // set instance
            App._instance = this;

            // set configs
            App.config = _.extend(defaults, config);
        }

        // return the instance
        return App._instance;
    }

    /*
     * PUBLIC
     */
    App.setModule = function(type, module, obj) {
        // camelize args to avoid not finding the searched module
        type = _camelCase(type);
        module = _camelCase(module);

        // only create a new module if this one exist in Backbone
        if (!Backbone[type]) {
            throw 'The module Backbone.' + module + ' which is trying to be extended does not exist';
        }

        // use a new object if the target doesn't exist
        App[type] = App[type] || {};

        // only use param obj if it is a 'object'
        // otherwise call as a function and get the returned obj
        obj = (typeof obj === 'function') ? obj.call(App)
            : (typeof obj === 'object')   ? obj
            : {};

        // export app module based on backbone extends
        App[type][module] = Backbone[type].extend(obj);
    };

    // public methods that only can be available after App be instanced
    App.prototype = {
        // use eventBus (pub/sub event) as controller
        eventBus: _.extend({}, Backbone.Events)
    };

    /*
     * PRIVATE
     */
    // set camelCase + capitalize first letter
    // http://jsfiddle.net/5n84w/2/
    function _camelCase(text) {
        var _text = text.replace(/[-_ .]+(.)?/g, function (match, letter) {
            return letter ? letter.toUpperCase() : '';
        }).replace(/[^\w]/gi, '');

        return _text.charAt(0).toUpperCase() + _text.slice(1);
    }

    /*
     * GLOBAL
     */
    win.App = App;
}(window));