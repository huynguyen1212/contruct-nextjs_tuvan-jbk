"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var theme_1 = require("styles/theme");
var Checkbox = styled_components_1["default"].input.attrs(function (props) { return ({ type: 'checkbox' }); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  transition: all 0.25s ease;\n  width: 30px;\n  height: 15px;\n  cursor: pointer;\n\n  &::after,\n  &::before {\n    position: absolute;\n    content: '';\n    transition: all 0.35s ease;\n  }\n\n  &::before {\n    width: 100%;\n    height: 100%;\n    background-color: ", ";\n    border-radius: 25px;\n    box-shadow: #fff 0 0 0 10px;\n  }\n\n  &::after {\n    width: 9px;\n    height: 9px;\n    border-radius: 50%;\n    background-color: ", ";\n    left: 3px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  &:checked {\n    &::before {\n      background-color: ", ";\n    }\n    &::after {\n      right: 3px;\n      left: unset;\n    }\n  }\n"], ["\n  position: relative;\n  transition: all 0.25s ease;\n  width: 30px;\n  height: 15px;\n  cursor: pointer;\n\n  &::after,\n  &::before {\n    position: absolute;\n    content: '';\n    transition: all 0.35s ease;\n  }\n\n  &::before {\n    width: 100%;\n    height: 100%;\n    background-color: ", ";\n    border-radius: 25px;\n    box-shadow: #fff 0 0 0 10px;\n  }\n\n  &::after {\n    width: 9px;\n    height: 9px;\n    border-radius: 50%;\n    background-color: ", ";\n    left: 3px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  &:checked {\n    &::before {\n      background-color: ", ";\n    }\n    &::after {\n      right: 3px;\n      left: unset;\n    }\n  }\n"])), theme_1["default"].color.gray, theme_1["default"].color.white, theme_1["default"].color.green);
exports["default"] = Checkbox;
var templateObject_1;
