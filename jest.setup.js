// Vector icons render native fonts; in Jest we replace them with a plain Text node
// so tests can query icons by name.
jest.mock('react-native-vector-icons/Ionicons', () => {
  const React = require('react');
  const MockIcon = ({name, ...props}) => {
    const {Text} = require('react-native');
    return React.createElement(Text, props, name);
  };
  return {__esModule: true, default: MockIcon};
});
