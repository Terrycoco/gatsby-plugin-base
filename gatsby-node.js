"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onCreateNode = onCreateNode;

var _readingTime = _interopRequireDefault(require("reading-time"));

function onCreateNode({
  node,
  actions
}) {
  const {
    createNodeField
  } = actions;

  if (node.content != null) {
    createNodeField({
      node,
      name: 'readingTime',
      value: (0, _readingTime.default)(node.content)
    });
  }
}
//# sourceMappingURL=gatsby-node.js.map