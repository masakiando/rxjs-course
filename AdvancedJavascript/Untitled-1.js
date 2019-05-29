// 関数がbindとapplyを呼び出すのは何なのか
// 
function a(param1, param2) {
    console.log('this', this); 
}

a()
console.log(a.name); 
a.moo = 1
console.log(a.moo); 
console.log(a.toString());
a.call();


