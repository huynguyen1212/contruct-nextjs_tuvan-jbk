"use strict";
exports.__esModule = true;
exports.HandleError = exports.HandleSuccess = void 0;
var Alert_1 = require("components/Alert");
exports.HandleSuccess = function (res) {
    // console.log("res", res);
    Alert_1.Alert({
        icon: 'success',
        name: 'Thành công.'
    });
};
exports.HandleError = function (err) {
    Alert_1.Alert({
        name: err.response ? err.response.data.message : '',
        icon: 'error'
    });
};
