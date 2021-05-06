"use strict";
exports.__esModule = true;
exports.Alert = void 0;
/**
 *
 * Alert
 *
 */
var sweetalert2_1 = require("sweetalert2");
function Alert(_a) {
    var name = _a.name, icon = _a.icon;
    return sweetalert2_1["default"].fire({
        title: name,
        icon: icon,
        position: 'top-right',
        toast: true,
        showConfirmButton: false,
        timer: 2500
    });
}
exports.Alert = Alert;
