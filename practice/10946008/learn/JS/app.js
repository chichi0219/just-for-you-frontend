/*
console.log("Hello \n Word"); //換行"\n"

let user_name = window.prompt("請輸入你的姓名"); //有一個視窗跳出來
window.alert("歡迎來到網站" + user_name);

let n1 = 20;
let n2 = 30;
let name = "Johnson";
let n3 = 10;
let n4 = 15;

console.log(n1 + n2 + name); //50Johnson
console.log(n1 + n2 + name + n3 + n4); //50Johnson1015

let age = 27;
console.log(typeof age.toString()); //string

const pi = 3.1415926;
console.log(typeof pi.toFixed(2)); //string 確認資料類型

let x = 10;
console.log(x.toString()); //()括號很重要

let str = "Wilson Ren";
let str1 = ""; //empty string

console.log(str.length); //10
console.log(str1.length); //0
console.log(str.indexOf("Ren")); //7 表示從第7個找到Ren 所以是7
console.log(str[str.length - 1]); //n  從0, 1 ,2, 3, 4, 5開始 string長度為x 最後文字index是x-1

let sentence = "Today is a good day";

let result = sentence.split(" "); //Array"  "表示空白格切一刀
console.log(result);

console.log(!false); //!可以將Boolean反轉 所以結果變成true

console.log(3 == 5); //== 等於 comparison operators運算結果= boolean 值
console.log(3 !== 5); //!= 不等於
console.log(3 === "3"); //== 代表去檢查operators的值,也檢查data type的值 結果為fals1e 因為type不一樣
console.log(true && false); //&&且
console.log(true || false); //||或

let age = prompt("請輸入年齡(阿拉伯數字):");

age = Number(age);

if (age >= 0 && age <= 12) {
  alert("兒童票 100元");
} else if (age > 12 && age <= 65) {
  alert("成人票 250元");
} else if (age > 65 && age <= 125) {
  alert("敬老票 150元");
}

//Falsy Values 有false 、 0,-0,0n 、 "" '' ``(empty string) 、 null 、 undefined 、 NaN
//&&規則中 left is true, 顯示right值
console.log(3 && 10);
//left is not true,顯示left值
console.log(-0 && 100);

//||規則中 left is true,顯示left值
console.log(6 || 100);
//left is not true,顯示right值
console.log(null || 100);

//定義function
function f() {
  console.log("這是我的第一個function");
}
//執行function
f();

function sayHi(name, age) {
  console.log("你好，我的名字是" + name);
  console.log("我今年" + age + "歲");
}

sayHi("Mike", 35);

//circle function的參數為一個半徑，功能為算出圓面積
function circle(r) {
  return 3.14 * r * r;
}

let area1 = circle(10);
let area2 = circle(5);
console.log(area1 + area2);

//攝氏轉華氏
function convertor(c) {
  return c * 1.8 + 32;
}

let input = Number(prompt("請輸入溫度：(°C)"));
let result = convertor(input);
alert("換算後的溫度為" + result + "°F");

let friends = ["Grace", "Mike", "Spencer", "Esther", "Slade", "Wilson"];
//array的值被稱為元素(element)
let anotherVariable = friends;
anotherVariable[0] = "Michael";

console.log("friends array變成是：");
console.log(friends);
console.log("anotherVariable array變成是：");
console.log(anotherVariable);

let deposit = 500;
let anotherDeposit = deposit;
anotherDeposit = 600;
console.log("deposit為", deposit, "anotherDepossit為", anotherDeposit);
//121
let frieds = ["Grace", "Mike", "Spencer", "Esther", "Slade"];
let returnValue = frieds.push("Jared");
console.log(returnValue);
//陣列後push<=>pop,陣列前shift<=>unshift
let myArr = [
  ["name", "address", "age"],
  ["Mike", "台灣", 35],
  ["Grace", "美國", 26],
];
console.log(myArr[1][0]);

//125
function hello() {
  console.log("Hello World");
}
hello();

let Wilson = {
  //properties(key-value pair),methods
  first_name: "Wilson",
  last_name: "Ren",
  age: 26,
  is_married: true,
  spouse: "Grace",
  //this指Wilson這個正在執行的物件
  sayHi() {
    console.log(this.first_name + "says hi");
  },

  walk() {
    console.log("Wilson is walking...");
  },

  speak(words) {
    console.log("Wilson says" + words);
  },
};
Wilson.sayHi();
Wilson.walk();
Wilson.speak("今天心情不錯");

function hello() {
  console.log("hello");
  console.log(this);
}
hello();
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); //object

function hello() {
  console.log("hello world");
}
console.log(typeof hello);
//function, array are both special types of object

let arrr = [1, 2, 3, 4, 5];
//判斷是否為array
console.log(Array.isArray(arrr));
*/
//126
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("for loop執行完畢");
//宣告一個計數器
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);

for (let i = 0; i < 100; i++) {
  console.log(i);
}

let j = 0;
while (j < 100) {
  console.log(j);
  j++;
}


