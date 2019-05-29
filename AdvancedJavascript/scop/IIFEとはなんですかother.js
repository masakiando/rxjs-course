"use strict";

// What is an IIFE and why might you use it ?

// グローバル変数
// var other = {'hello': 'other'};
// console.log('other: ', other);

// 内部で宣言されている疑似グローバル変数
(function() {
    var thing = {'hello': 'other'};
    console.log('other', thing);
})();



