var React = require('react-native');
var {
  Image,
  Text,
  View,
} = React;
var SimpleMarkdown = require('simple-markdown');

module.exports = function(styles) {
  return {
    br: {
      react: function(node, output) {
        return React.createElement(Text, { style: styles.br }, '\n\n');
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
    paragraph: {
      react: function(node, output) {
        return React.createElement(Text, { style: styles.paragraph }, output(node.content));
      }
    },
    strong: {
      react: function(node, output) {
        return React.createElement(Text, { style: styles.strong }, output(node.content));
      }
    },
    text: {
      react: function(node, output) {
        return React.createElement(Text, { style: styles.text }, node.content);
      }
    },
    u: {
      react: function(node, output) {
        return React.createElement(Text, { style: styles.u }, output(node.content));
      }
    },
  }
};
