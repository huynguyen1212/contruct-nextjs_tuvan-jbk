"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 *
 * ErrorBound
 *
 */
var react_1 = require("react");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var ErrorBound = /** @class */ (function (_super) {
    __extends(ErrorBound, _super);
    function ErrorBound(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ErrorBound.getDerivedStateFromError = function (error) {
        // Update state so the next render will show the fallback UI.
        console.log("Error Boundry", error);
        return { hasError: true };
    };
    ErrorBound.prototype.componentDidCatch = function (error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log("Error Boundry", error, errorInfo);
    };
    ErrorBound.prototype.render = function () {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return react_1["default"].createElement("span", null, "Error Boundry");
        }
        return this.props.children;
    };
    return ErrorBound;
}(react_1["default"].Component));
exports["default"] = ErrorBound;
