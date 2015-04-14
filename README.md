# react-native-markdown

A component for rendering Markdown in React Native. Pull requests welcome.

## Known issues

- Due to [a bug](https://github.com/facebook/react-native/issues/824) in underlying layout engine for React Native ([facebook/css-layout](https://github.com/facebook/css-layout)), this module will put your application in an infinite loop unless you patch the upstream changes from `css-layout`'s' `Layout.c` and `Layout.h` files.

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

- `autolink` (`<Text>`) - WIP
- `blockQuote` (`<Text>`) - WIP
- `br` (`<Text>`)
- `codeBlock` (`<View>`) - WIP
- `del` (`<Text>`)
- `em` (`<Text>`)
- `heading` (`<Text>`) - Also `heading1` through `heading6`
- `hr` (`<View>`)
- `image` (`<Image>`) - Implemented but size is fixed to `50x50` until auto width is supported by React Native.
- `inlineCode` (`<Text>`)
- `link` (`<Text>`) - WIP
- `list` (`<View>`) - Also `listItem` (`<View>`), `listItemBullet` (`<Text>`) and `listItemNumber` (`<Text>`)
- `mailto` (`<Text>`) - WIP
- `newline` (`<Text>`) - WIP
- `paragraph` (`<View>`)
- `plainText` (`<Text>`) - Use for styling text without any associated styles
- `strong` (`<Text>`)
- `table` (`<View>`)
- `tableHeader` (`<View>`)
- `tableHeaderCell` (`<Text>`)
- `tableRow` (`<View>`)
- `tableRowCell` (`<View>`)
- `tableRowLast` (`<View>`, inherits from `tableRow`)
- `text` (`<Text>`) - Inherited by all text based elements
- `u` (`<View>`)
- `url` (`<Text>`)
- `view` (`<View>`) - This is the container `View` that the Markdown is rendered in.
