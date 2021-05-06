"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ErrorMessage = exports.SError = exports.Warning = void 0;
/**
 *
 * Text
 * make by  huyro1212
 */
var styled_components_1 = require("styled-components");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var theme_1 = require("styles/theme");
var react_1 = require("react");
exports.Warning = styled_components_1["default"].p(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.SError = styled_components_1["default"].p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-style: italic;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 24px;\n  text-align: right;\n  color: ", ";\n"], ["\n  font-style: italic;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 24px;\n  text-align: right;\n  color: ", ";\n"])), theme_1["default"].color.red);
exports.ErrorMessage = function (_a) {
    var message = _a.message, messages = _a.messages;
    return react_1["default"].createElement(exports.SError, null, message);
};
var templateObject_1, templateObject_2;
