var React = require('react-native');
var {
  View
} = React;
var _ = require('lodash');
var SimpleMarkdown = require('simple-markdown');

var styles = {
  em: {
    fontFamily: 'HelveticaNeue-Italic'
  },
  hr: {
    backgroundColor: '#cccccc',
    height: 1
  },
  image: {
    height: 50, // TODO: React Native needs to support auto image size
    width: 50 // TODO: React Native needs to support auto image size
  },
  u: {
    borderColor: '#333333',
    borderBottomWidth: 1
  },
  paragraph: {
    margin: 10
  },
  strong: {
    fontFamily: 'HelveticaNeue-Bold'
  }
};


var Markdown = React.createClass({

  componentWillMount: function() {
    var rules = require('./rules')(_.merge(styles, this.props.style));
    rules = _.merge(SimpleMarkdown.defaultRules, rules);

    var parser = SimpleMarkdown.parserFor(rules);
    this.parse = function(source) {
      var blockSource = source + '\n\n';
      return parser(blockSource, {inline: false});
    };
    this.renderer = SimpleMarkdown.outputFor(SimpleMarkdown.ruleOutput(rules, 'react'));
  },

  render: function() {
    var child = this.props.children.toString();
    var tree = this.parse(child);
    return <View>{this.renderer(tree)}</View>;
  }
});

module.exports = Markdown;
