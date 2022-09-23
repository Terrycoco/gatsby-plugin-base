//mock the library
jest.doMock('reading-time', () => (content) => ({
  text: '5 min read',
  content: content,
}));

//now use the mock
const {onCreateNode} = require('..src/gatsbuy-node');
