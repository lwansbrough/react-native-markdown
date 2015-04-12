var React = require('react-native');
var {
  Image,
  Text,
  View,
} = React;
var SimpleMarkdown = require('simple-markdown');
var _ = require('lodash');

module.exports = function(styles) {
  return {
    br: {
      react: function(node, output, state) {
        return React.createElement(Text, { key: state.key, style: styles.br }, '\n\n');
      }
    },
    codeBlock: {
      react: function(node, output, state) {
        return React.createElement(Text, { key: state.key, style: styles.codeBlock }, null);
      }
    },
    em: {
      react: function(node, output, state) {
        return React.createElement(Text, { key: state.key, style: styles.em }, output(node.content));
      }
    },
    hr: {
      react: function(node, output, state) {
        return React.createElement(View, { key: state.key, style: styles.hr });
      }
    },
    image: {
      react: function(node, output, state) {
        return React.createElement(Image, {
          key: state.key,
          source: { uri: node.target },
          style: styles.image
        });
      }
    },
    inlineCode: {
      react: function(node, output, state) {
        return React.createElement(Text, { key: state.key, style: styles.inlineCode }, node.content);
      }
    },
    paragraph: {
      react: function(node, output, state) {
        return React.createElement(View, { key: state.key, style: styles.paragraph }, output(node.content));
      }
    },
    strong: {
      react: function(node, output, state) {
        return React.createElement(Text, { key: state.key, style: styles.strong }, output(node.content));
      }
    },
    table: {
      react: function(node, output, state) {
        var headers = _.map(node.header, function(content, i) {
          return React.createElement(Text, { style: styles.tableHeaderCell }, output(content));
        });

        var header = React.createElement(View, { style: styles.tableHeader }, headers);

        var rows = _.map(node.cells, function(row, r) {
          var cells = _.map(row, function(content, c) {
            return React.createElement(View, { key: c, style: styles.tableRowCell }, output(content));
          });
          var rowStyles = [styles.tableRow];
          if (node.cells.length - 1 == r) {
            rowStyles.push(styles.tableRowLast);
          }
          return React.createElement(View, { key: r, style: rowStyles }, cells);
        });

        return React.createElement(View, { key: state.key, style: styles.table }, [ header, rows ]);
      }
    },
    text: {
      react: function(node, output) {
        var words = node.content.split(' ');
        words = _.map(words, function(word, i) {
          var elements = [];
          if (i != words.length - 1) {
            word = word + ' ';
          }
          return React.createElement(Text, { style: styles.text }, word);
        });
        return words;
      }
    },
    u: {
      react: function(node, output, state) {
        return React.createElement(View, { key: state.key, style: styles.u }, output(node.content));
      }
    }
  }
};
