//千分位分割(",")
const numWithCommas = (num) => {
    if (num === null || num === undefined) return '-';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//test
var testData = 4872648294;
console.log(numWithCommas(testData)); //输出：872,648,294

var a = 8462948.74564;
// a.toLocaleString();
// //8,462,948.24

console.log(a.toLocaleString()); //输出：8,462,948.75
// console.log(a.toString(10));
console.log(typeof(a.toFixed(7)));
// console.log(a.toLocaleString('zh-Hans-CN', { style: 'currency', currency: 'CNY' })) //将数字转换为货币（中国）
console.log();

var a = 222122122.6754;
var b = a.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); //使用正则替换，每隔三个数加一个',' 
console.log(b)