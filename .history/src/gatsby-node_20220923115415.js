export function onCreateNode({node, actions}) {
  const {createNodeField} = actions;
  if (node.content != null) {
    createNodeField({
      node,
      name: 'test',
      value: 'Hello world',
    });
  }
}
