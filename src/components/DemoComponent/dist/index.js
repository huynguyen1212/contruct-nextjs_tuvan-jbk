"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
/**
 *
 * DemoComponent
 *
 */
var react_1 = require("react");
var styled_components_1 = require("styled-components");
function DemoComponent(_a) {
    var name = _a.name;
    return react_1["default"].createElement(StylesDemoComponent, null,
        "this is ",
        name);
}
var StylesDemoComponent = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports["default"] = react_1.memo(DemoComponent);
var templateObject_1;
