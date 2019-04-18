"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var R = require("ramda");
// import { merge, interval, concat, timer, fromEvent, Observable, noop, of, forkJoin, Subject, BehaviorSubject, range, from} from 'rxjs';
// import { map, mapTo, tap, take, first, switchMap, reduce, max, min, combineLatest, buffer, scan, single } from 'rxjs/operators';
var pipe = function (functions) { return function (data) {
    return functions.reduce(function (value, func) { return func(value); }, data);
}; };
var price$ = 50;
var addSalesTax = function (total, taxRate) { return total * taxRate; };
var exchange = function (value) { return pipe([
    function (v) { return addSalesTax(v, 100); },
    function (v) { return addSalesTax(v, 8); }
])(value); };
console.log(exchange(price$));
// v => `Order Total = ${v.toFixed(2)}`
var getName = function (person) { return person.name; };
var uppercase = function (string) { return string.toUpperCase(); };
var get6Characters = function (string) { return string.substring(0, 6); };
var reverse = function (string) { return string
    .split('')
    .reverse()
    .join(''); };
console.log(reverse(get6Characters(uppercase(getName({ name: 'Buckethead' })))));
console.log(R.pipe(getName, uppercase, get6Characters, reverse)({ name: 'Buckethead' }));
var test = R.pipe(function (v) { return addSalesTax(v, 2); }, function (v) { return addSalesTax(v, 0.08); });
console.log(test(10));
