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
      react: function(node, output) {
        return React.createElement(Text, { style: styles.br }, '\n\n');
      }
    },
    codeBlock: {
      react: function(node, output) {
        console.log(node.content);
        return React.createElement(Text, { style: styles.codeBlock }, null);
      }
    },
    em: {
      react: function(node, output) {
        return React.createElement(Text, { style: styles.em }, output(node.content));
      }
    },
    hr: {
      react: function(node, output) {
        return React.createElement(View, { style: styles.hr });
      }
    },
    image: {
      react: function(node, output) {
        return React.createElement(Image, {
          source: { uri: node.target },
          style: styles.image
        });
      }
    },
    inlineCode: {
      react: function(node, output) {
        return React.createElement(Text, { style: styles.inlineCode }, node.content);
      }
    },
    paragraph: {
      react: function(node, output) {
        return React.createElement(View, { style: styles.paragraph }, output(node.content));
      }
    },
    strong: {
      react: function(node, output) {
        return React.createElement(Text, { style: styles.strong }, output(node.content));
      }
    },
    table: {
      react: function(node, output) {
        var headers = _.map(node.header, function(content, i) {
          return React.createElement(Text, { style: styles.tableHeaderCell }, output(content));
        });

        var header = React.createElement(View, { style: styles.tableHeader }, headers);

        var rows = _.map(node.cells, function(row, i) {
          var cells = _.map(row, function(content) {
            return React.createElement(View, { style: styles.tableRowCell }, output(content));
          });
          var rowStyles = [styles.tableRow];
          if (node.cells.length - 1 == i) {
            rowStyles.push(styles.tableRowLast);
          }
          return React.createElement(View, { style: rowStyles }, cells);
        });

        return React.createElement(View, { style: styles.table }, [ header, rows ]);
      }
    },
    text: {
      react: function(node, output) {
        return React.createElement(Text, { style: styles.text }, node.content);
      }
    },
    u: {
      react: function(node, output) {
        return React.createElement(View, { style: styles.u }, output(node.content));
      }
    }
  }
};
