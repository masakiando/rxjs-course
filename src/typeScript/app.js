"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var R = require("ramda");
var half = function (n) { return R.divide(R.__, n); };
half(42); // =>  1
console.log(half(42));
