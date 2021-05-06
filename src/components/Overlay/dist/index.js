"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var OverlayStyle = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 0;\n  /* display: none; */\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 0;\n  /* display: none; */\n"])));
var Overlay = function (_a) {
    var show = _a.show;
    return (react_1["default"].createElement(OverlayStyle, { id: "overlay", style: { display: show ? ' block' : 'none' } }));
};
exports["default"] = Overlay;
var templateObject_1;
