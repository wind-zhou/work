# 常用的utils函数库

## 简介

>前端领域的工作中经常会有一些数据处理的操作，这里做一下汇总，以方便之后查阅。

## 对数字进行千分位分割

(1)使用Number对象的toLocalString方法

>　toLocaleString() 　可把一个 Number 对象转换为本地格式的字符串
>
>　　返回值：数字的字符串表示，由实现决定，根据本地规范进行格式化，**可能影响到小数点或千分位分隔符采用的					标点符号**
>
>- toLocalString方法参考链接
>- [Number的toLocalString方法](https://blog.csdn.net/cuk0051/article/details/108343042?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control)

```js
var a = 8462948.749925;
console.log(a.toLocaleString());  //输出：8,462,948.75
```

（2）使用正则表达式

```js
//千分位分割(",")
const numWithCommas = (num) => {
    if (num === null || num === undefined) return '-';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//test
var testData = 872648294;
console.log(numWithCommas(testData)); //输出：872,648,294
```

