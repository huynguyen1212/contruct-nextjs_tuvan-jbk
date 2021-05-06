"use strict";
/**
 *
 * config for react-select
 *
 */
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
exports.stylesCustom = void 0;
var heightStylesDefault = { height: '40px', minHeight: '40px' };
var stylesCustom = function (heightStylesProps) {
    var heightStyles = heightStylesProps || heightStylesDefault;
    return {
        control: function (provided) { return (__assign(__assign(__assign({}, provided), { borderColor: '#c0cce0', color: '#043468' }), heightStyles)); },
        valueContainer: function (provided) { return (__assign(__assign(__assign({}, provided), heightStyles), { padding: '0 6px' })); },
        input: function (provided) { return (__assign(__assign({}, provided), { margin: '0px' })); },
        indicatorSeparator: function (provided) { return (__assign(__assign({}, provided), { display: 'none' })); },
        indicatorsContainer: function (provided) { return (__assign(__assign({}, provided), heightStyles)); },
        singleValue: function (provided) { return (__assign(__assign({}, provided), { color: '#043468', minWidth: '100%' })); },
        menu: function (provided) { return (__assign(__assign({}, provided), { zIndex: 20 })); }
    };
};
exports.stylesCustom = stylesCustom;
