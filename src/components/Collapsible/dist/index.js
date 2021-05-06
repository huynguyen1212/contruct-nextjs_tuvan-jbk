"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
function Collapsible(_a) {
    var header = _a.header, content = _a.content, _b = _a.timing, timing = _b === void 0 ? 0.5 : _b;
    react_1.useEffect(function () {
        var collapsible = document.getElementsByClassName('collapsible');
        var _loop_1 = function (i) {
            var header_1 = collapsible[i].getElementsByClassName('header')[0];
            header_1 === null || header_1 === void 0 ? void 0 : header_1.addEventListener('click', function () {
                var content = header_1 === null || header_1 === void 0 ? void 0 : header_1.nextElementSibling;
                if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                    content.style.maxHeight = '0px';
                }
                else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
                console.log(content.scrollHeight, content);
            });
        };
        for (var i = 0; i < collapsible.length; i++) {
            _loop_1(i);
        }
    }, []);
    return (react_1["default"].createElement(SCollapsible, { className: "collapsible" },
        react_1["default"].createElement("div", { className: "header" }, header),
        react_1["default"].createElement("div", { className: "content", style: { transition: timing + "s max-height" } }, content)));
}
exports["default"] = Collapsible;
var SCollapsible = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .header {\n    cursor: pointer;\n    user-select: none;\n  }\n  .content {\n    max-height: 0px;\n    overflow: hidden;\n  }\n"], ["\n  .header {\n    cursor: pointer;\n    user-select: none;\n  }\n  .content {\n    max-height: 0px;\n    overflow: hidden;\n  }\n"])));
var templateObject_1;
