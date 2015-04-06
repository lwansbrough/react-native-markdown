var React = require('react-native');
var {
  Image,
  Text,
  View,
} = React;
var _ = require('lodash');
var Buffer = require('buffer');
var marked = require('marked');
var renderer = require('./renderer');

function transform(jsxString, scope) {
  var header = '/** @jsx React.DOM */';
  jsxString = header + '\n' + jsxString;
  return require('react-tools').transform(jsxString);
}

function exec(jsxString, lexicalScope) {
  var jsx = transform(jsxString);

  var thunkTemplate = [
    '(function () {    ',
    '  <%- vars %>     ',
    '  return (        ',
    '    <%= code %>   ',
    '  );              ',
    '})                '
  ].join('\n');

  var lexicalVarTemplate = 'var <%- key %> = lexicalScope.<%- key %>;';
  var lexicalVars = _.map(lexicalScope, function (val, key) {
    return _.template(lexicalVarTemplate)({ key: key });
  });

  var thunkCode = _.template(thunkTemplate)({
    vars: lexicalVars.join('\n'),
    code: jsx
  });

  var thunk = eval(thunkCode);

  return thunk.apply(null);
}

var styles = {
  emphasis: {
    fontFamily: 'HelveticaNeue-Italic'
  },
  paragraph: {
    margin: 10
  },
  strong: {
    fontFamily: 'HelveticaNeue-Bold'
  }
};

var Markdown = React.createClass({

  render: function() {

    var children = this.props.children.toString();

    var jsxString = marked(children, { renderer: renderer })
    var jsx = exec(jsxString, { styles: _.merge(styles, this.props.style) });

    return jsx;
  }
});

module.exports = Markdown;
