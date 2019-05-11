"use strict";



0 === 0
// true
0 !== 1
// true
0 == 0
// true
0 != 1
// true


'' == '0' 
//false 理にかなっている
0 == '' 
// true 物事は少し奇妙になり始める
0 == '0' 
// true 少し変
0 === '' 　
// false　厳密な等価演算子なら
0 === '0' 
// false 厳密な等価演算子なら
0 === 0
// true 厳密な等価演算子なら

0 == '0' // 奇妙
// true 二重等価演算子を使用する場合、変換する方法を知的に把握しようとする 。　左数字　右文字列を検出すると左の数値を文字列にする。　
String(0)
// "0" このようなことをする
String(0) == '0'
// true　
'0' == '0'
// true

// Booleanと文字列の時は
false == 'false'
// false 奇妙にならない この場合、それは変換しようとしていません
String(false)
// 'false'
'false' == 'false'
// true
Boolean('false')
// true
false ==  true
// false

// dorey.github.io/JavaScript-Equality-Table/
