var React = require('react-native');
var {
  Image,
  Text,
  View,
} = React;
var SimpleMarkdown = require('simple-markdown');

module.exports = function(styles) {
  return {
    image: {
      react: function(node, output) {
        return React.createElement(Image, {
          source: { uri: node.target },
          style: styles.image
        }, output(node.content));
      }
    },
    paragraph: {
      // Finally transform this syntax node into a
      // React element
      react: function(node, output) {
        return React.createElement(Text, { style: styles.paragraph }, output(node.content));
      }
    },
    text: {

      // Finally transform this syntax node into a
      // React element
      react: function(node, output) {
        return React.createElement(Text, { style: styles.text }, node.content);
      }
    },
    u: {

      // Finally transform this syntax node into a
      // React element
      react: function(node, output) {
        return React.createElement(Text, { style: styles.u }, output(node.content));
      }
    },
  }
};
