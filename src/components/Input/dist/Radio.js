"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
// icon
var radio_svg_1 = require("./radio.svg");
var radio_active_svg_1 = require("./radio-active.svg");
var Radio = styled_components_1["default"].input.attrs(function (props) { return ({ type: 'radio' }); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  transition: all 0.25s ease;\n  width: 0;\n  height: 20px;\n  cursor: pointer;\n  margin: 5px 10px 5px 20px;\n  visibility: hidden;\n\n  &::after {\n    visibility: visible;\n    position: absolute;\n    content: '';\n    width: 20px;\n    height: 20px;\n    left: -15px;\n    background-size: ", ";\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: 0s all;\n  }\n\n  &::after {\n    background-image: url(", ");\n  }\n\n  &:checked {\n    &::after {\n      background-image: url(", ");\n    }\n  }\n"], ["\n  position: relative;\n  transition: all 0.25s ease;\n  width: 0;\n  height: 20px;\n  cursor: pointer;\n  margin: 5px 10px 5px 20px;\n  visibility: hidden;\n\n  &::after {\n    visibility: visible;\n    position: absolute;\n    content: '';\n    width: 20px;\n    height: 20px;\n    left: -15px;\n    background-size: ",
    ";\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: 0s all;\n  }\n\n  &::after {\n    background-image: url(", ");\n  }\n\n  &:checked {\n    &::after {\n      background-image: url(", ");\n    }\n  }\n"])), function (props) {
    return (props.width || 20) + "px " + (props.height || 20) + "px";
}, radio_svg_1["default"], radio_active_svg_1["default"]);
exports["default"] = Radio;
var templateObject_1;
