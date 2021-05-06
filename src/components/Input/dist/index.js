"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.DatePicker = exports.SelectBase = exports.Select = exports.Radio = exports.Checkbox = void 0;
/**
 *
 * Input
 * make by  huyro1212
 */
var styled_components_1 = require("styled-components");
var theme_1 = require("styles/theme");
var Checkbox_1 = require("./Checkbox");
exports.Checkbox = Checkbox_1["default"];
var Radio_1 = require("./Radio");
exports.Radio = Radio_1["default"];
var Select_1 = require("./Select");
exports.Select = Select_1["default"];
var DatePicker_1 = require("./DatePicker");
exports.DatePicker = DatePicker_1["default"];
var SelectBase = require("./SelectBase");
exports.SelectBase = SelectBase;
var Input = styled_components_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 40px;\n  background: ", ";\n  border: 1px solid #e3e8f0;\n  box-sizing: border-box;\n  border-radius: 2px;\n  width: 100%;\n\n  // text\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  padding: 0 16px;\n  color: ", ";\n\n  &:focus {\n    outline: none;\n  }\n  &::placeholder {\n    color: ", ";\n  }\n  &:disabled {\n    background: #e3e8f0;\n  }\n"], ["\n  height: 40px;\n  background: ", ";\n  border: 1px solid #e3e8f0;\n  box-sizing: border-box;\n  border-radius: 2px;\n  width: 100%;\n\n  // text\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  padding: 0 16px;\n  color: ", ";\n\n  &:focus {\n    outline: none;\n  }\n  &::placeholder {\n    color: ", ";\n  }\n  &:disabled {\n    background: #e3e8f0;\n  }\n"])), theme_1["default"].color.white, theme_1["default"].color.text_chinh, theme_1["default"].color.text_phu_2);
exports["default"] = Input;
var templateObject_1;
