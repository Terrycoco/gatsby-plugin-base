//mock the library
jest.doMock('reading-time', () => content => ({
    text: '5 min read',
    content: content
});
