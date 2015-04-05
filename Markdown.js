var React = require('react-native');
var {
  Text,
  View,
} = React;
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
    '(function () {        ',
    '    <%- vars %>       ',
    '    return (          ',
    '        <%= code %>   ',
    '    );                ',
    '})                    '
  ].join('\n');

  var lexicalVarTemplate = 'var <%- key %> = lexicalScope.<%- key %>;';
  var lexicalVars = _.map(lexicalScope, function (val, key) {
    return _.template(lexicalVarTemplate)({ key: key });
  });

  var thunkCode = _.template(thunkTemplate)({
    vars: lexicalVars.join('\n'),
    code: code
  });

  var thunk = eval(thunkCode);

  return thunk.apply(null);
}

var styles = {
  emphasis: {
    color: 'red'
  },
  paragraph: {
    color: 'green'
  }
};

var Markdown = React.createClass({

  render: function() {

    var jsxString = marked(this.props.children, { renderer: renderer })
    var jsx = exec(jsxString, { styles: this.props.style });

    return {jsx};
  }
});

module.exports = Markdown;
