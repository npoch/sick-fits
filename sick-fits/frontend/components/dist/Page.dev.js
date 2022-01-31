"use strict";

var _interopRequireDefault = require("/Users/topooch/projects/wesbos/Advanced-React/sick-fits/frontend/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Page;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Header = _interopRequireDefault(require("./Header"));

import React from "react";
var __jsx = React.createElement;

function Page(_ref) {
  var children = _ref.children,
      cool = _ref.cool;
  return __jsx("div", null, __jsx(_Header["default"], null), __jsx("h2", null, "I am the page component"), children, __jsx("h3", null, cool));
}

Page.propTypes = {
  cool: _propTypes["default"].string,
  children: _propTypes["default"].any
};