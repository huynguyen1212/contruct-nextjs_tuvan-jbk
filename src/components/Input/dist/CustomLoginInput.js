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
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var index_1 = require("./index");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var theme_1 = require("styles/theme");
var CustomInputStyle = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", " {\n    font-size: 16px;\n    border: none;\n  }\n  display: flex;\n  background-color: white;\n  align-items: center;\n  padding: 5px 15px;\n  margin-bottom: 15px;\n  border-radius: 4px;\n  button {\n    outline: none;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    color: ", ";\n  }\n"], ["\n  ", " {\n    font-size: 16px;\n    border: none;\n  }\n  display: flex;\n  background-color: white;\n  align-items: center;\n  padding: 5px 15px;\n  margin-bottom: 15px;\n  border-radius: 4px;\n  button {\n    outline: none;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    color: ", ";\n  }\n"])), index_1["default"], theme_1["default"].color.icon_2);
var eyeOn = react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEye });
var eyeOff = react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEyeSlash });
function CustomLoginInput(_a) {
    var name = _a.name, placeholder = _a.placeholder, icon = _a.icon, type = _a.type, register = _a.register;
    var _b = react_1.useState(true), isSecured = _b[0], setIsSecured = _b[1];
    return (react_1["default"].createElement(CustomInputStyle, null,
        react_1["default"].createElement("img", { src: icon, alt: "" }),
        react_1["default"].createElement(index_1["default"], __assign({}, { placeholder: placeholder, name: name }, { ref: register, type: type && type === 'password' && isSecured ? 'password' : 'text' })),
        type === 'password' && (react_1["default"].createElement("button", { type: 'button', onClick: function () { return setIsSecured(function (prev) { return !prev; }); } }, isSecured ? eyeOff : eyeOn))));
}
exports["default"] = CustomLoginInput;
var templateObject_1;
