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
var notfound_image_jpg_1 = require("public/images/notfound-image.jpg");
function Image(props) {
    var onError = function (e) {
        e.target.onerror = null;
        e.target.src = notfound_image_jpg_1["default"];
    };
    return react_1["default"].createElement(SImage, __assign({ onError: onError }, props));
}
exports["default"] = Image;
var SImage = styled_components_1["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  animation: lazy 0.5s ease-in forwards;\n  @keyframes lazy {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"], ["\n  animation: lazy 0.5s ease-in forwards;\n  @keyframes lazy {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])));
var templateObject_1;
