"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
/**
 *
 * Loading
 *
 */
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var icon_loading_svg_1 = require("./icon-loading.svg");
function Loading(_a) {
    var active = _a.active;
    react_1.useEffect(function () {
        if (active)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'auto';
    }, [active]);
    if (active)
        return (react_1["default"].createElement(StylesLoading, null,
            react_1["default"].createElement("img", { src: icon_loading_svg_1["default"], alt: "loading..." })));
    return null;
}
var StylesLoading = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.45);\n  align-items: center;\n  display: flex;\n  z-index: 9999;\n  justify-content: center;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.45);\n  align-items: center;\n  display: flex;\n  z-index: 9999;\n  justify-content: center;\n"])));
exports["default"] = react_1.memo(Loading);
var templateObject_1;
