"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
/**
 *
 * Button
 *
 */
var styled_components_1 = require("styled-components");
var theme_1 = require("styles/theme");
var color = {
    green: {
        text: theme_1["default"].color.white,
        bgr: theme_1["default"].color.green
    },
    gray: {
        text: '#6E7B97',
        bgr: '#E4EFFA'
    },
    red: {
        text: 'white',
        bgr: 'red'
    }
};
var Button = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 2px;\n  height: 40px;\n  font-weight: ", ";\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  color: ", ";\n  background: ", ";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 15px;\n  transition: all 0.25s ease;\n\n  &:hover {\n    box-shadow: 2px 2px 8px 0px rgb(0 0 0 / 30%);\n  }\n"], ["\n  border-radius: 2px;\n  height: 40px;\n  font-weight: ", ";\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  color: ", ";\n  background: ", ";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 15px;\n  transition: all 0.25s ease;\n\n  &:hover {\n    box-shadow: 2px 2px 8px 0px rgb(0 0 0 / 30%);\n  }\n"])), function (props) { return props.color === 'gray' ? 400 : 'bold'; }, function (props) { return color[props.color || 'green'].text; }, function (props) { return color[props.color || 'green'].bgr; });
exports["default"] = Button;
var templateObject_1;
