# react-native-markdown

A component for rendering Markdown in React Native. This component is still in early development and is missing quite a few elements. Pull requests welcome.

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
          {'\n\n'}
          | # | Name   | Age |{'\n'}
          |---|--------|-----|{'\n'}
          | 1 | John   | 19  |{'\n'}
          | 2 | Sally  | 18  |{'\n'}
          | 3 | Stream | 20  |{'\n'}
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
- `br` (`<Text>`)
- `codeBlock` (`<View>`) - WIP
- `def` (`Not implemented`)
- `del` (`<Text>`)
- `em` (`<Text>`)
- `fence` (`Not implemented`)
- `heading` (`Not implemented`) - Also `heading1` through `heading6`
- `hr` (`<View>`)
- `image` (`<Image>`) - Implemented but size is fixed to `50x50` until auto width is supported by React Native.
- `inlineCode` (`<Text>`)
- `link` (`Not implemented`)
- `list` (`Not implemented`)
- `mailto` (`Not implemented`)
- `newline` (`Not implemented`)
- `paragraph` (`<View>`)
- `refimage` (`Not implemented`)
- `reflink` (`Not implemented`)
- `strong` (`<Text>`)
- `table` (`<View>`)
- `tableHeader` (`<View>`)
- `tableHeaderCell` (`<Text>`)
- `tableRow` (`<View>`)
- `tableRowCell` (`<View>`)
- `tableRowLast` (`<View>`, inherits from `tableRow`)
- `text` (`<Text>`)
- `u` (`<View>`)
- `url` (`Not implemented`)
- `view` (`<View>`) - This is the container `View` that the Markdown is rendered in.
