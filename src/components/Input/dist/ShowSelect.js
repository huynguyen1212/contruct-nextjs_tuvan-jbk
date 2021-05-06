"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var __1 = require("..");
var options = Array.from({ length: 5 }, function (_, i) { return ({
    label: String((i + 1) * 5),
    value: String((i + 1) * 5)
}); });
function ShowSelect(_a) {
    var onChange = _a.onChange, defaultValue = _a.defaultValue;
    return (react_1["default"].createElement(SSelect, { options: options, defaultValue: defaultValue, onChange: onChange }));
}
exports["default"] = ShowSelect;
var SSelect = styled_components_1["default"](__1.Select)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 78px;\n  margin-left: 12px;\n  & > div {\n    border: 1px solid #e3e8f0;\n  }\n  @media(max-width: 767px){\n    margin-left: 0;\n  }\n"], ["\n  min-width: 78px;\n  margin-left: 12px;\n  & > div {\n    border: 1px solid #e3e8f0;\n  }\n  @media(max-width: 767px){\n    margin-left: 0;\n  }\n"])));
var templateObject_1;
