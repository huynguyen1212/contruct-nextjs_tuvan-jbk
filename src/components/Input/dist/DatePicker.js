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
exports.IconDatePicker = void 0;
var react_1 = require("react");
var DayPickerInput_1 = require("react-day-picker/DayPickerInput");
require("react-day-picker/lib/style.css");
var styled_components_1 = require("styled-components");
var index_1 = require("./index");
var mixins_1 = require("styles/mixins");
function DatePicker(props) {
    return (react_1["default"].createElement(Style, { left: props.left },
        react_1["default"].createElement(DayPickerInput_1["default"], __assign({ component: index_1["default"], placeholder: "Ch\u1ECDn ng\u00E0y" }, props)),
        react_1["default"].createElement(exports.IconDatePicker, null)));
}
exports["default"] = DatePicker;
exports.IconDatePicker = function () { return (react_1["default"].createElement("svg", { className: "icon-input", width: "25", height: "17", viewBox: "0 0 25 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react_1["default"].createElement("path", { fillRule: "evenodd", "clip-rule": "evenodd", d: "M12.6667 3.66634H12V2.99967C12 2.63301 11.7 2.33301 11.3333 2.33301C10.9667 2.33301 10.6667 2.63301 10.6667 2.99967V3.66634H5.33333V2.99967C5.33333 2.63301 5.03333 2.33301 4.66667 2.33301C4.3 2.33301 4 2.63301 4 2.99967V3.66634H3.33333C2.59333 3.66634 2.00667 4.26634 2.00667 4.99967L2 14.333C2 15.0663 2.59333 15.6663 3.33333 15.6663H12.6667C13.4 15.6663 14 15.0663 14 14.333V4.99967C14 4.26634 13.4 3.66634 12.6667 3.66634ZM12.6667 13.6663C12.6667 14.033 12.3667 14.333 12 14.333H4C3.63333 14.333 3.33333 14.033 3.33333 13.6663V6.99967H12.6667V13.6663ZM6 8.33301H4.66667V9.66634H6V8.33301ZM7.33333 8.33301H8.66667V9.66634H7.33333V8.33301ZM11.3333 8.33301H10V9.66634H11.3333V8.33301Z", fill: "#93A9C7" }),
    react_1["default"].createElement("line", { x1: "24.5", y1: "2.18557e-08", x2: "24.5", y2: "17", stroke: "#E3E8F0" }))); };
var Style = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  .DayPickerInput {\n    padding-left: 0;\n    width: 100%;\n\n    input {\n      padding-left: 40px;\n    }\n\n    .DayPickerInput-OverlayWrapper .DayPickerInput-Overlay {\n      right: ", ";\n      left: ", ";\n    }\n  }\n  .icon-input {\n    cursor: pointer;\n    ", ";\n    top: 50%;\n    transform: translateY(-50%);\n    left: 8px;\n  }\n"], ["\n  position: relative;\n\n  .DayPickerInput {\n    padding-left: 0;\n    width: 100%;\n\n    input {\n      padding-left: 40px;\n    }\n\n    .DayPickerInput-OverlayWrapper .DayPickerInput-Overlay {\n      right: ", ";\n      left: ", ";\n    }\n  }\n  .icon-input {\n    cursor: pointer;\n    ", ";\n    top: 50%;\n    transform: translateY(-50%);\n    left: 8px;\n  }\n"])), function (props) { return (props.left ? '0' : 'unset'); }, function (props) { return (props.left ? 'unset' : '0'); }, mixins_1.mixinAbsolute);
var templateObject_1;
