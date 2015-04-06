# react-native-markdown

A component for rendering Markdown in React Native. This component is still in early development.

## Getting started

1. `npm install react-native-markdown --save`

## Usage

All you need is to `require` the `react-native-markdown` module and then use the
`<Markdown/>` tag.

```javascript
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View
} = React;
var Markdown = require('react-native-markdown');

var mdApp = React.createClass({
  render: function() {
    return (
      <View>
        <Markdown>
          Some *really* basic **Markdown**.
        </Markdown>
      </View>
    );
  }
});

AppRegistry.registerComponent('mdApp', () => mdApp);
```

## Properties

#### `style`

Default style properties will be applied to the markdown. You will likely want to customize these styles, the following properties can be used to modify the rendered elements:

*Note: The text inside the parentheses denotes the element type.*

- `autolink` (`Not implemented`)
- `blockQuote` (`Not implemented`)
- `br` (`Not implemented`)
- `codeBlock` (`Not implemented`)
- `def` (`Not implemented`)
- `del` (`Not implemented`)
- `em` (`<Text>`)
- `fence` (`Not implemented`)
- `heading` (`Not implemented`) - Also `heading1` through `heading6`
- `hr` (`<View>`)
- `image` (`<Image>`)
- `inlineCode` (`Not implemented`)
- `link` (`Not implemented`)
- `list` (`Not implemented`)
- `mailto` (`Not implemented`)
- `newline` (`Not implemented`)
- `paragraph` (`<Text>`)
- `refimage` (`Not implemented`)
- `reflink` (`Not implemented`)
- `strong` (`<Text>`)
- `text` (`<Text>`)
- `u` (`<Text>`)
- `url` (`Not implemented`)
