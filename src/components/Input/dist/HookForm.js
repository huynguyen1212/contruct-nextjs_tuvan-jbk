"use strict";
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
// icon
var react_1 = require("react");
var index_1 = require("./index");
var react_hook_form_1 = require("react-hook-form");
var react_number_format_1 = require("react-number-format");
var Select_1 = require("./Select");
var InputNumberFormat = function (_a) {
    var controller = _a.controller, numberFormat = _a.numberFormat;
    return (react_1["default"].createElement(react_hook_form_1.Controller, __assign({}, controller, { render: function (_a) {
            var name = _a.name, onChange = _a.onChange, value = _a.value;
            return (react_1["default"].createElement(react_number_format_1["default"], __assign({ onValueChange: function (obj) { return onChange(obj.floatValue); }, value: value, name: name, customInput: index_1["default"] }, numberFormat)));
        } })));
};
var InputSelect = function (_a) {
    var controller = _a.controller, select = _a.select;
    return (react_1["default"].createElement(react_hook_form_1.Controller, __assign({}, controller, { render: function (props) { return react_1["default"].createElement(Select_1["default"], __assign({}, props, select)); } })));
};
exports["default"] = { InputNumberFormat: InputNumberFormat, InputSelect: InputSelect };
