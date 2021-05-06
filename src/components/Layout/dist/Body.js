"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Body = void 0;
var styled_components_1 = require("styled-components");
var CS_1 = require("./CS");
var SideBar_1 = require("./SideBar");
exports.Body = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding-left: ", ";\n  min-height: 100vh;\n  transition: all 0.3s ease;\n\n  @media (min-width: 1440px) {\n    padding-left: 214px;\n  }\n\n  @media (max-width: 991px) {\n    padding-left: unset;\n\n    ", " {\n      position: fixed;\n      top: 0;\n      z-index: 9;\n    }\n  }\n"], ["\n  position: relative;\n  padding-left: ", ";\n  min-height: 100vh;\n  transition: all 0.3s ease;\n\n  @media (min-width: 1440px) {\n    padding-left: 214px;\n  }\n\n  @media (max-width: 991px) {\n    padding-left: unset;\n\n    ", " {\n      position: fixed;\n      top: 0;\n      z-index: 9;\n    }\n  }\n"])), CS_1["default"].sidebar.width + 23 + 'px', SideBar_1.SideBar);
var templateObject_1;
