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
/**
 *
 * Modal
 * make by  huyro1212
 */
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var styled_components_1 = require("styled-components");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var theme_1 = require("styles/theme");
var icon_close_svg_1 = require("@assets/images/icon-close.svg");
var mixins_1 = require("styles/mixins");
var Modal = function (_a) {
    var isShowing = _a.isShowing, toggleModal = _a.toggleModal, title = _a.title, children = _a.children, overwrite = _a.overwrite, overwriteChild = _a.overwriteChild;
    // clear scroll bar
    react_1.useEffect(function () {
        if (isShowing)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'auto';
        return function () {
            document.body.style.overflow = 'auto';
        };
    }, [isShowing]);
    return isShowing
        ? react_dom_1["default"].createPortal(react_1["default"].createElement(Styles, __assign({}, overwrite),
            react_1["default"].createElement("div", __assign({ className: "modal" }, overwriteChild),
                react_1["default"].createElement("div", { className: "modal-header" },
                    title,
                    react_1["default"].createElement("img", { src: icon_close_svg_1["default"], alt: "close modal", onClick: function () { return toggleModal(!isShowing); } })),
                react_1["default"].createElement("div", { className: "modal-content" }, children))), document.body)
        : null;
};
exports["default"] = Modal;
var Styles = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 35px 0;\n  overflow: auto;\n  z-index: 999;\n  ", ";\n\n  .modal {\n    min-width: 300px;\n    max-width: 1200px;\n    background-color: ", ";\n    padding: 52px 44px;\n    border-radius: 4px;\n    margin: 0 auto;\n    overflow-y: auto;\n    ", ";\n    animation: open 0.2s forwards ease-out;\n    opacity: 0;\n\n    .modal-header {\n      position: relative;\n      padding-bottom: 72px;\n      font-family: ", ";\n      font-size: 24px;\n      line-height: 28px;\n\n      img {\n        cursor: pointer;\n        position: absolute;\n        right: 0;\n        top: 0;\n      }\n    }\n  }\n\n  @media (max-width: 991px) {\n    .modal {\n      padding: 40px 20px;\n      .modal-header {\n        padding-bottom: 40px;\n      }\n    }\n  }\n\n  @media (max-width: 767px) {\n    .modal {\n      padding: 20px 15px;\n      .modal-header {\n        padding-bottom: 20px;\n      }\n    }\n  }\n\n  @keyframes open {\n    from {\n      opacity: 0;\n      transform: translateY(-50%);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n"], ["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 35px 0;\n  overflow: auto;\n  z-index: 999;\n  ", ";\n\n  .modal {\n    min-width: 300px;\n    max-width: 1200px;\n    background-color: ", ";\n    padding: 52px 44px;\n    border-radius: 4px;\n    margin: 0 auto;\n    overflow-y: auto;\n    ", ";\n    animation: open 0.2s forwards ease-out;\n    opacity: 0;\n\n    .modal-header {\n      position: relative;\n      padding-bottom: 72px;\n      font-family: ", ";\n      font-size: 24px;\n      line-height: 28px;\n\n      img {\n        cursor: pointer;\n        position: absolute;\n        right: 0;\n        top: 0;\n      }\n    }\n  }\n\n  @media (max-width: 991px) {\n    .modal {\n      padding: 40px 20px;\n      .modal-header {\n        padding-bottom: 40px;\n      }\n    }\n  }\n\n  @media (max-width: 767px) {\n    .modal {\n      padding: 20px 15px;\n      .modal-header {\n        padding-bottom: 20px;\n      }\n    }\n  }\n\n  @keyframes open {\n    from {\n      opacity: 0;\n      transform: translateY(-50%);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n"])), mixins_1.mixinsScrollBar, theme_1["default"].color.white, mixins_1.mixinsScrollBarNone, theme_1["default"].fonts['K2D-Regular']);
var templateObject_1;
