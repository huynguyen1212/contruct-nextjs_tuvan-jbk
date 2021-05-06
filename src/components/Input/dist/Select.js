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
var react_1 = require("react");
var react_select_1 = require("react-select");
var SelectBase_1 = require("./SelectBase");
function Select(props) {
    return react_1["default"].createElement(react_select_1["default"], __assign({}, props, { styles: SelectBase_1.stylesCustom() }));
}
exports["default"] = Select;
