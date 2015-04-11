var React = require('react-native');
var {
  View
} = React;
var _ = require('lodash');
var SimpleMarkdown = require('simple-markdown');

var styles = {
  view: {
  },
  codeBlock: {
    fontFamily: 'Courier-Bold',
    fontWeight: 500
  },
  em: {
    fontStyle: 'italic'
  },
  hr: {
    backgroundColor: '#cccccc',
    height: 1
  },
  image: {
    height: 50, // TODO: React Native needs to support auto image size
    width: 50 // TODO: React Native needs to support auto image size
  },
  inlineCode: {
    backgroundColor: '#eeeeee',
    borderColor: '#dddddd',
    borderRadius: 3,
    borderWidth: 1,
    fontFamily: 'Courier-Bold'
  },
  u: {
    borderColor: '#222222',
    borderBottomWidth: 1
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  strong: {
    fontWeight: 'bold'
  },
  table: {
    borderWidth: 1,
    borderColor: '#222222',
    borderRadius: 3
  },
  tableHeader: {
    backgroundColor: '#222222',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tableHeaderCell: {
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center'
  },
  tableRow: {
    borderBottomWidth: 1,
    borderColor: '#222222',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tableRowLast: {
    borderColor: 'transparent',
    textAlign: 'center'
  },
  tableRowCell: {
    padding: 5
  }
};


var Markdown = React.createClass({

  componentWillMount: function() {
    var mergedStyles = _.merge({}, styles, this.props.style);
    var rules = require('./rules')(mergedStyles);
    rules = _.merge({}, SimpleMarkdown.defaultRules, rules);

    var parser = SimpleMarkdown.parserFor(rules);
    this.parse = function(source) {
      var blockSource = source + '\n\n';
      return parser(blockSource, {inline: false});
    };
    this.renderer = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'));
  },

  render: function() {

    var child = _.isArray(this.props.children)
      ? this.props.children.join('') : this.props.children;
    var tree = this.parse(child);
    return <View style={[styles.view, this.props.style.view]}>{this.renderer(tree)}</View>;
  }
});

module.exports = Markdown;
