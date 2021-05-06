"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Wrap = void 0;
var theme_1 = require("styles/theme");
var styled_components_1 = require("styled-components");
var bgr_svg_1 = require("./bgr.svg");
exports.Wrap = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  position: relative;\n  background-color: ", ";\n  \n  background-image: url(", ");\n  background-position: top left;\n  background-repeat: no-repeat;\n"], ["\n  overflow: hidden;\n  position: relative;\n  background-color: ", ";\n  \n  background-image: url(", ");\n  background-position: top left;\n  background-repeat: no-repeat;\n"])), theme_1["default"].color.background, bgr_svg_1["default"]);
var templateObject_1;
