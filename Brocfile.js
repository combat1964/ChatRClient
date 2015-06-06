/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/semantic-ui/dist/semantic.css');
app.import('bower_components/semantic-ui/dist/semantic.js');

module.exports = app.toTree();
