"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var theme_1 = require("styles/theme");
var CheckboxSmall = styled_components_1["default"].input.attrs(function (props) { return ({ type: 'checkbox' }); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  transition: all 0.15s ease;\n  width: 0;\n  cursor: pointer;\n  margin-right: 30px;\n\n  &::after,\n  &::before {\n    position: absolute;\n    content: '';\n    transition: all 0.35s ease;\n  }\n\n  &::before {\n    width: 16px;\n    height: 16px;\n    border-radius: 2px;\n    border: 2px solid ", ";\n    bottom: 0;\n    left: 0;\n  }\n  &::after {\n    bottom: 4px;\n    left: 7px;\n  }\n  &:checked {\n    &::after {\n      content: '\u2713';\n      display: inline-block;\n      height: 15px;\n      width: 8px;\n      color: red;\n      font-size: 26px;\n      left: 0;\n      bottom: 10px;\n    }\n  }\n"], ["\n  position: relative;\n  transition: all 0.15s ease;\n  width: 0;\n  cursor: pointer;\n  margin-right: 30px;\n\n  &::after,\n  &::before {\n    position: absolute;\n    content: '';\n    transition: all 0.35s ease;\n  }\n\n  &::before {\n    width: 16px;\n    height: 16px;\n    border-radius: 2px;\n    border: 2px solid ", ";\n    bottom: 0;\n    left: 0;\n  }\n  &::after {\n    bottom: 4px;\n    left: 7px;\n  }\n  &:checked {\n    &::after {\n      content: '\u2713';\n      display: inline-block;\n      height: 15px;\n      width: 8px;\n      color: red;\n      font-size: 26px;\n      left: 0;\n      bottom: 10px;\n    }\n  }\n"])), theme_1["default"].color.icon_2);
exports["default"] = CheckboxSmall;
var templateObject_1;
