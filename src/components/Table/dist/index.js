"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.STable = void 0;
/**
 *
 * Table
 * make by  huyro1212
 */
var react_1 = require("react");
var styled_components_1 = require("styled-components");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var theme_1 = require("styles/theme");
var react_loading_skeleton_1 = require("react-loading-skeleton");
var validate_1 = require("@helpers/validate");
var mixins_1 = require("styles/mixins");
var b = "1px solid " + theme_1["default"].color.line;
var Table = function (_a) {
    var style = _a.style, isLoading = _a.isLoading, thead = _a.thead, tbody = _a.tbody;
    return (react_1["default"].createElement(exports.STable, __assign({}, style),
        react_1["default"].createElement("table", null,
            react_1["default"].createElement("thead", null, thead),
            react_1["default"].createElement("tbody", null, isLoading ? (Array(10)
                .fill(null)
                .map(function (k) { return (react_1["default"].createElement("tr", null,
                react_1["default"].createElement("td", { colSpan: 100 },
                    react_1["default"].createElement(react_loading_skeleton_1["default"], { height: 52, duration: 0.8 })))); })) : tbody.length > 0 ? (tbody) : (react_1["default"].createElement("tr", null,
                react_1["default"].createElement("td", { colSpan: 100 }, validate_1["default"].NOTHING_HERE)))))));
};
exports.STable = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 28px 16px 12px;\n  border: ", ";\n  box-sizing: border-box;\n  font-size: 14px;\n  line-height: 16px;\n  color: ", ";\n  overflow: auto;\n  ", ";\n\n  table {\n    border: none;\n    border-spacing: 0 4px;\n    width: 100%;\n    border-collapse: separate;\n    text-align: center;\n    min-width: ", ";\n\n    thead {\n      font-size: 16px;\n      line-height: 19px;\n      font-style: normal;\n      color: ", ";\n      th {\n        font-weight: normal;\n        padding-bottom: 16px;\n      }\n    }\n    tbody {\n      tr {\n        height: 52px;\n        td {\n          border-top: ", ";\n          border-bottom: ", ";\n          max-width: 250px;\n\n          &:nth-child(1) {\n            border-left: ", ";\n          }\n          &:nth-last-child(1) {\n            border-right: ", ";\n          }\n        }\n      }\n    }\n  }\n"], ["\n  padding: 28px 16px 12px;\n  border: ", ";\n  box-sizing: border-box;\n  font-size: 14px;\n  line-height: 16px;\n  color: ", ";\n  overflow: auto;\n  ", ";\n\n  table {\n    border: none;\n    border-spacing: 0 4px;\n    width: 100%;\n    border-collapse: separate;\n    text-align: center;\n    min-width: ", ";\n\n    thead {\n      font-size: 16px;\n      line-height: 19px;\n      font-style: normal;\n      color: ", ";\n      th {\n        font-weight: normal;\n        padding-bottom: 16px;\n      }\n    }\n    tbody {\n      tr {\n        height: 52px;\n        td {\n          border-top: ", ";\n          border-bottom: ", ";\n          max-width: 250px;\n\n          &:nth-child(1) {\n            border-left: ", ";\n          }\n          &:nth-last-child(1) {\n            border-right: ", ";\n          }\n        }\n      }\n    }\n  }\n"])), function (props) { return (props.border ? b : 'unset'); }, theme_1["default"].color.text_phu, mixins_1.mixinsScrollBarHeight, function (props) { return (props.minWidth ? props.minWidth + 'px' : '500px'); }, theme_1["default"].color.text_chinh, b, b, b, b);
exports["default"] = Table;
var templateObject_1;
