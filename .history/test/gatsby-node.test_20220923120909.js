//mock the library
jest.doMock('reading-time', () => (content) => ({
  text: '5 min read',
  content: content,
}));

//now use the mock
const {onCreateNode} = require('..src/gatsbuy-node');

//write the tests
test('adds readingTime field for nodes with content', () => {
  const node = {content: 'hello world'}; //dummy content
  const createNodeField = jest.fn(); //create dummy field
  const actions = {createNodeField};

  onCreateNode({node, actions});

  expect(createNodeField.mock.calls.length).toBe(1); //one node
  expect(createNodeField.mock.calls[0][0].node).toBe(node);
  expect(createNodeField.mock.calls[0][0].name).toBe('reading-time'); //name
  expect(createNodeField.mock.calls[0][0].value.text).toBe('5 min read');
  expect(createNodeField.mock.calls[0][0].value.content).toBe('hello world');
});

test('does not add readingTime field if there is no content', () => {
  const node = {};
  const createNodeField = jest.fn();
  const actions = {createNodeField};

  onCreateNode({node, actions});

  expect(createNodeField.mock.calls.length).toBe(0);
});
