// 定义：对数组中的每个元素执行一个自定义的累计器，将其结果汇总为单个返回值
// array.reduce(function(total, cur, index, arr){
//     return
// }, initValue)

// arr.reduce((t, v, i, a) => {}, indexValue)

/*
   参数：

        callback：回调函数（累计器）(必选)
        initValue：初始值(可选)
 
        回调函数的参数：

        total(t)：累计器完成计算的返回值(必选)
        currentValue(v)：当前元素(必选)
        index(i)：当前元素的索引(可选)
        array(a)：当前元素所属的数组对象(可选)

        过程：

        以 t 作为累计结果的初始值，不设置 t 则以数组第一个元素为初始值
        开始遍历，使用累计器处理 v，将 v 的映射结果累计到 t 上，结束此次循环，返回 t
        进入下一次循环，重复上述操作，直至数组最后一个元素
        结束遍历，返回最终的 t
*/
const arr = ['hello', 'world', 'tuo', 'hello', 'tuo']
 
const obj = arr.reduce((acc, cur) => {
  if (cur in acc) {
    acc[cur]++
  } else {
    acc[cur] = 1
  }
  return acc
}, {})
console.log(obj) // { hello: 2, world: 1, tuo: 2 }

let str = "asdzxcjiasjdvnjsnoiawjirnaklsjfnzxlknvlkz";
// var p = str.split('');
// console.log(p);
[
    'a', 's', 'd', 'z', 'x', 'c', 'j',
    'i', 'a', 's', 'j', 'd', 'v', 'n',
    'j', 's', 'n', 'o', 'i', 'a', 'w',
    'j', 'i', 'r', 'n', 'a', 'k', 'l',
    's', 'j', 'f', 'n', 'z', 'x', 'l',
    'k', 'n', 'v', 'l', 'k', 'z'
];
let result = str.split('').reduce((acc, cur) => {
    console.log('acc', acc);
    console.log('cur', cur);
    if (acc[cur]!==undefined) {
        acc[cur]++;
    } else {
        acc[cur] = 1;
    }
    return acc;
    // if (acc.hasOwnProperty(cur)) {
    //     acc[cur]++;
    // } else {
    //     acc[cur] = 1;
    // }
    // acc[cur]?acc[cur]++:acc[cur]=1;
}, {});
console.log('result', result);

// let arr = [10, 20, 30, 40];
// let initNum = -10;
// let sum = arr.reduce((previousValue, currentValue, index, ) => {
//   console.log("previousValue", previousValue, "index: ", index, "currentValue: ", currentValue);
//   return previousValue += currentValue;
// }, initNum);
// let sum = arr.reduce((previousValue, currentValue, index, ) => {
//     console.log("previousValue", previousValue, "index: ", index, "currentValue: ", currentValue);
//     return previousValue + currentValue;
//   });
// console.log(sum);

// 二维数组到一维平面数组：
// var matrix = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8, 9]
// ];
// // console.log(matrix[0][1]);  //现在返回一维数组
// var csserFlatten = matrix.reduce(function (previous, current) {
//     console.log('previosu', previous, 'current',current);
//    return previous.concat(current);
// });
// console.log(csserFlatten); // [1, 2, 3, 4, 5, 6]

// function sum(arr) {
    //     var s = 0;
    //     arr.forEach((item) => {
        //         console.log(item);
        //         s = s + item;
        //     });
        //     return s;
        // }

        // function sum(arr) {
            //     var s = 0;
            //     for(var i = 0; i<arr.length; i++){
                //         console.log(arr[i]);
                //         s+=arr[i];
                //     }
                //     return s;
                // }

// var arr2 =[1,2,3,4,5];
// const s =                                                                                                                                                                                                                                                                           
//  arr2.reduce(function(total, cur, index, arr){
//     return total+cur;
// });
// console.log(s);
// function sum(arr) {
//    return  arr.reduce((pre, cur) => pre + cur);
// }
// console.log(sum(arr2));
