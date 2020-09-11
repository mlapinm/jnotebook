### Algorithms
### Data Structures

### Algorithms

[Introduction to the Coding Interview Algorithms](#Introduction-to-the-Coding-Interview-Algorithms)  
[1. Find the Symmetric Difference](#1.-Find-the-Symmetric-Difference)  
[2. Inventory Update](#2.-Inventory-Update)  
[3. No Repeats Please](#3.-No-Repeats-Please)  
[4. Pairwise](#4.-Pairwise)  
[5. Implement Bubble Sort](#5.-Implement-Bubble-Sort)  
[6. Implement Selection Sort](#6.-Implement-Selection-Sort)  
[7. Implement Insertion Sort](#7.-Implement-Insertion-Sort)  
[8. Implement Quick Sort](#8.-Implement-Quick-Sort)  
[9. Implement Merge Sort](#9.-Implement-Merge-Sort)



### Data Structures

[Introduction to the Coding Interview Data Structure Questions](#Introduction-to-the-Coding-Interview-Data-Structure-Questions)  
[1 Typed Arrays](#1-Typed-Arrays)  
[2 Learn how a Stack Works](#2-Learn-how-a-Stack-Works)  
[3 Create a Stack Class](#3-Create-a-Stack-Class)  
[4 Create a Queue Class](#4-Create-a-Queue-Class)  
[5 Create a Priority Queue Class](#5-Create-a-Priority-Queue-Class)  
[6 Create a Circular Queue](#6-Create-a-Circular-Queue)  
[7 Create a Set Class](#7-Create-a-Set-Class)  
[8 Perform a Union on Two Sets](#8-Perform-a-Union-on-Two-Sets)  
[9 Perform an Intersection on Two Sets of Data](#9-Perform-an-Intersection-on-Two-Sets-of-Data)  
[10 Perform a Difference on Two Sets of Data](#10-Perform-a-Difference-on-Two-Sets-of-Data)  
[11 Perform a Subset Check on Two Sets of Data](#11-Perform-a-Subset-Check-on-Two-Sets-of-Data)  
[12 Create and Add to Sets in ES6](#12-Create-and-Add-to-Sets-in-ES6)  
[13 Remove items from a set in ES6](#13-Remove-items-from-a-set-in-ES6)  
[14 Use has and size on an ES6 Set](#14-Use-has-and-size-on-an-ES6-Set)  
[15 Use Spread and Notes for ES5 Set() Integration](#15-Use-Spread-and-Notes-for-ES5-Set()-Integration)  
[16 Create a Map Data Structure](#16-Create-a-Map-Data-Structure)  
[17 Create an ES6 JavaScript Map](#17-Create-an-ES6-JavaScript-Map)  
[18 Create a Hash Table](#18-Create-a-Hash-Table)  
[19 Work with Nodes in a Linked List](#19-Work-with-Nodes-in-a-Linked-List)  
[20 Create a Linked List Class](#20-Create-a-Linked-List-Class)  
[21 Remove Elements from a Linked List](#21-Remove-Elements-from-a-Linked-List)  
[22 Search within a Linked List](#22-Search-within-a-Linked-List)  
[23 Remove Elements from a Linked List by Index](#23-Remove-Elements-from-a-Linked-List-by-Index)  
[24 Add Elements at a Specific Index in a Linked List](#24-Add-Elements-at-a-Specific-Index-in-a-Linked-List)  
[25 Create a Doubly Linked List](#25-Create-a-Doubly-Linked-List)  
[26 Reverse a Doubly Linked List](#26-Reverse-a-Doubly-Linked-List)  
[27 Add a New Element to a Binary Search Tree](#27-Add-a-New-Element-to-a-Binary-Search-Tree)  
[28 Find the Minimum and Maximum Value in a Binary Search Tree](#28-Find-the-Minimum-and-Maximum-Value-in-a-Binary-Search-Tree)  
[29 Check if an Element is Present in a Binary Search Tree](#29-Check-if-an-Element-is-Present-in-a-Binary-Search-Tree)  
[30 Check if Tree is Binary Search Tree](#30-Check-if-Tree-is-Binary-Search-Tree)  
[31 Find the Minimum and Maximum Height of a Binary Search Tree](#31-Find-the-Minimum-and-Maximum-Height-of-a-Binary-Search-Tree)  
[32 Use Depth First Search in a Binary Search Tree](#32-Use-Depth-First-Search-in-a-Binary-Search-Tree)  
[33 Use Breadth First Search in a Binary Search Tree](#33-Use-Breadth-First-Search-in-a-Binary-Search-Tree)  
[34 Delete a Leaf Node in a Binary Search Tree](#34-Delete-a-Leaf-Node-in-a-Binary-Search-Tree)  
[35 Delete a Node with One Child in a Binary Search Tree](#35-Delete-a-Node-with-One-Child-in-a-Binary-Search-Tree)  
[36 Delete a Node with Two Children in a Binary Search Tree](#36-Delete-a-Node-with-Two-Children-in-a-Binary-Search-Tree)  
[37 Invert a Binary Tree](#37-Invert-a-Binary-Tree)  
[38 Create a Trie Search Tree](#38-Create-a-Trie-Search-Tree)  
[39 Insert an Element into a Max Heap](#39-Insert-an-Element-into-a-Max-Heap)  
[40 Remove an Element from a Max Heap](#40-Remove-an-Element-from-a-Max-Heap)  
[41 Implement Heap Sort with a Min Heap](#41-Implement-Heap-Sort-with-a-Min-Heap)  
[42 Adjacency List](#42-Adjacency-List)  
[43 Adjacency Matrix](#43-Adjacency-Matrix)  
[44 Incidence Matrix](#44-Incidence-Matrix)  
[45 Breadth-First Search](#45-Breadth-First-Search)  
[46 Depth-First Search](#46-Depth-First-Search)  
 



### Algorithms

#### Introduction to the Coding Interview Algorithms
```
```
#### 1. Find the Symmetric Difference
```
function sym2(a,b){
  var c = sub(a,b).concat(sub(b,a));
  return c.sort();
}

function sub(a,b){
var s = new Set(a);
a = [...s];
a.sort();
s = new Set(b);
b = [...s];
b.sort();
var accum = [];
var k = 0;
var knext = 0;
var kmax = b.length
var c = []
for(var i=0; i<a.length;i++){
  k = knext;
  while(k < kmax){
    if(a[i]==b[k]){
      knext = k+1;
      break;
    }
    k++;
  }
    accum.push(a[i]);
  if(k==kmax){
      c.push(a[i]);
  }
}
return c;
}

function sym(...args){
var a = args[0];
var b =[];
for(var i=1;i<args.length;i++){
  b=sym2(a, args[i]);
  a = b;
}
  return b; 
}
sym2([1, 2, 4, 5],[1, 2, 3]);
var a = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
console.log(a)
```

#### 2. Inventory Update
```
function updateInventory(arr1, arr2) {

    var arrc = [];
    for(var i in arr1){

        for(var j=0; j<arr2.length;j++){
          if(arr1[i][1] == arr2[j][1] ){
arr1[i][0] +=arr2[j][0];
arr2.splice(j, 1);
break;
          }
      }
    }
    arrc = arr1.concat(arr2)
arrc.sort((a,b) => 
a[1]>b[1]?1:a[1]<b[1]?-1:0);
    console.log(arrc.length, arrc);
    // All inventory must be accounted for or you're fired!
    return arrc;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv,newInv);
```

#### 3. No Repeats Please
##### next
правое значение из левого массива надо
заменить на наименьшее значение из прового,
но которое больше этого значения.
а оставшийся правый массив отсортировать по порядку.
  
```
equalArrays next repeatFirst repeat setSymv nextAll fact
```

```
var log = console.log;

function equalArrays(arr1, arr2){
  return arr1.join()==arr2.join();
}

function getArrR(arr){
  var arrEnd=[];
  var k = arr.length - 1;
  var a0 = arr[k];
  var n=0;
  arrEnd.push(arr[k]);
  k--;
  while(k>=0){
    if(arr[k]<a0){
      break;
    }else{
      arrEnd.unshift(arr[k]);
      a0 = arr[k];
    }
    k--;
  }
  //log(arrEnd);
  return arrEnd;
}

function getArrL(arr, arrR)
{
  var arrEnd = [];
  arrEnd= arr.slice(0, -arrR.length);
  return arrEnd;
}
function plus(arrL, arrR){
  var arr1 = arrL.slice();
  var arr2 = arrR.slice();
  var arrEnd=[];
  var vr = arr1[arr1.length-1];
  arr1.splice(-1);
  arr2.sort();
  for(var i=0;i<arr2.length;i++){
    if(vr<arr2[i]){
      arr1.push(arr2[i]);
      arr2.splice(i, 1);
      arr2.push(vr);
      break;
    }
  }
  arr2.sort();

  arrEnd=arr1.concat(arr2);
  return arrEnd;
}

function next(arr){
  var endArr = [];
  var arrR = getArrR(arr);
  var arrL = getArrL(arr, arrR);
  endArr = plus(arrL, arrR);

  return endArr;
}

function nextAll(n){
  var res = 1;
  var arrFirst=[];
  var arrLast=[];
  for(var i=0;i<n;i++){
    arrFirst.push(i+1);
    arrLast.unshift(i+1);
  }
  var n = 0;
  var arr=arrFirst;
  var arrEnd = [];
  arrEnd.push(arr.concat());
  while(1){
    arr = next(arr);
    arrEnd.push(arr.concat());
    res++;
    if(equalArrays(arr,arrLast)){
      break;
    }
    n++;
  }
  return arrEnd;
}

function repeatFirst(arrv){
  var res = false;
  var arr = arrv.slice();
  arr.sort();
  var arrSum = [];
  var a0 = arr[0];
  arrSum.push([a0, 1]);
  var k = 0;
  for(var i=1; i<arr.length; i++){
    if(arr[i] == a0){
     arrSum[k][1]+=1;
    }else{
      arrSum.push([arr[i], 1]);
      a0 = arr[i];
      k++;
    }
  }
  if(arrSum.length == 1){
    if(arrSum[0][1]>1)
    return true;
    else return false;
  }
arrSum.sort((a,b)=>b[1]-a[1]);
var v = arrSum.reduce((a,v,i)=>{
  if(i>0){
  return a+v[1];
  }else{return a;}
},0);
arrSum[1][1] = v;
if(arrSum[0][1]-arrSum[1][1]>=2){
  res = true;
}
  return res;
}


function repeat(arrv){
  var res = false;
  var arr = arrv.slice();
  var a0 = arr[0];
  for(var i=1;i<arr.length;i++){
    if(a0 == arr[i]){
      res = true;
      break;
    }
    a0 = arr[i];
  }
  return res;
}

function setSymv(arra, arr1){
  var arrRes = [];
  for(var i in arr1){
    arrRes[i] = arra[arr1[i]-1];
  }
  return arrRes;
}

function fact(k){
  var arr = [1, 2, 6, 24, 120, 720, 5040, 40320];
  return +arr[k-1];
}

function permAlone(str) {
  var t= []; 
  var arrav = str.split("");
  if(repeatFirst(arrav)){
    return 0;
  }
  var length = arrav.length;
  var arr1v = [];
  for(var i in arrav){
    arr1v.push(+i+1);
  }
  var count = fact(length);
  var arr1=arr1v.slice();
  var arra=arrav.slice();
  var arrb = [];
  var noRepeat = 0; 
  for(var i=0;i<count;i++){
    arrb = setSymv(arra,arr1);
    if(!repeat(arrb)){
      noRepeat++;
    }
    arr1=next(arr1);
//    log(arr1,arrb,repeat(arrb));
  }
  t = count;
  log(t.length,t);
  return noRepeat;
}

var nr = permAlone('aab');
log(nr);
```

#### 4. Pairwise
```
var log = console.log;

function pairwise(arr, arg) {
  var count = arr.length;
  var arrUse = [];
  for(var i in arr){
    arrUse.push(0);
  }
  var arri = [];
  var j = 0;
  for(var i=0;i<count;i++){
    j = i+1;
    while(j<count){
       if(arr[i]+arr[j]==arg){
         if(arrUse[i]+arrUse[j]==0){
         arri.push([i,j]);
         arrUse[i]=1;
         arrUse[j]=1;
         }
       }
      j++;
    }
  }
  var sum = 0
  for(var i in arri){
    sum += arri[i][0] + arri[i][1];
  }
//  log(sum, arri, arrUse);
  return sum;
}

var arr = [];var arg;
arr = [1,4,2,3,0,5];arg=7;
//arr = [7, 9, 11, 13, 15];arg=20;
var t = pairwise(arr, arg);
log(t);
```

#### 5. Implement Bubble Sort
```
var log = console.log;

function bubbleSort(array) {
  // change code below this line
  var count=array.length;
  var arr = array.slice();
  var i = count;
  while(i > 0){
    var j = 1;
    var a0 = arr[0];
    while(j < i){
      if(a0>arr[j]){
        arr[j-1] = arr[j];
        arr[j] = a0;
      }
      a0 = arr[j];
//      log(arr);
      j++;
    }
    i--;
  }
  return arr;
  // change code above this line
}

var arr = [];
arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
//arr = [1, 4, 2, 8];

var t = bubbleSort(arr);
log(t);
```

#### 6. Implement Selection Sort
```
var log = console.log;

function selectionSort(arr) {
  var i = 0;
  var count = arr.length;
  var index = 0;
  while(i < count){
    var j = i + 1;
    var a0 = arr[i];
    index = i;
    while(j<count){
      if(arr[j]<a0){
        a0 = arr[j];
        index = j;
      }
      j++;
    }
    a0=arr[index];
    arr[index]=arr[i];
    arr[i]=a0;
    i++;
  }
  return arr;
  // change code above this line
}

var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
//arr = [5, 1, 3];
selectionSort(arr);
log(arr);
```



#### 7. Implement Insertion Sort
```
var log = console.log;
function insert(arr, a){
var arrRes = [];
var count = arr.length;
var i = 0;
var once = true;
while(i<count){
  if(arr[i]>a){
    if(once){
      arrRes.push(a);
      once = false;
    }
  }
  arrRes.push(arr[i]);
  i++;
}
if(once){
  arrRes.push(a);
}
return arrRes;
}

function insertionSort(arrv) {
  var arrRes=[];
  var arr = [arrv[0]];
  // change code below this line
  var count = arrv.length;
  var i = 1;
  while(i < count){
    arr = insert(arr, arrv[i]); 
    i++;
  }
  return arr;
  // change code above this line
}

var arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
//arr = [5, 1, 3, 2];
var res = insertionSort(arr);
log(res);
```





```
```

#### 8. Implement Quick Sort
Пивотом назначается 1-й элемент(с нулевым индексом) самый левый элемент.
Массив перебирается со 2-го элемента.
Перебирается следующим образом. 
Получается разбивка массива на две части, левая - меньше пивота, правая больше. 
Если элемент меньше пивота, то индекс правого края левого массива ползет вправо.
Если элемент больше, то индекс останавливается.
Если попадаются элементы меньше, то они меняются местами с первым элементом правого массива и соответственно этот элемент становится правым элементом левого массива.
По окончаниии сортировки пивот встает на правый край левого массива. 
функция возвращает индек пивота.  
Дальше.
если левый индекс равен правому возвращаем массив. Если это не так, то бьем массив на две части и для каждой части вызываем сортировку.



[Информатика в JavaScript: Быстрая сортировка (Quicksort)](https://medium.com/devschacht/nicholas-c-zakas-computer-science-in-javascript-quicksort-afa07c0a47f0)  
```
//Swapping array elements via ES6 array destructuring
function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

//Pivot function returns the fixed pivot point
function pivot(arr, left = 0, right = arr.length - 1) {
  let shift = left;
  for (let i = left + 1; i <= right; i++) {
    //Move all the small elements on the left side
    if (arr[i] < arr[left]) swap(arr, i, ++shift);
  }

  //Finally swapping the last element with the left
  swap(arr, left, shift);
  return shift;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    //Recusrively calling the function to the left of the pivot and to the right of the pivot
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}
console.log(quickSort([5,1,3]))
```
ddddddddddddddddddddd
```
var log = console.log;
var k = 0;
function swap(arr, x, y){
  [arr[x],arr[y]]=[arr[y],arr[x]];
}

function pivot(arr, left=0, right=arr.length-1){
let shift=left;
for(let i=left+1;i<=right;i++){
   if(arr[i]<arr[left]){
     swap(arr, i, ++shift)
   }
}
   swap(arr, left, shift);
   return shift;
}

function quickSort(arr, left=0, right=arr.length-1) {
  // change code below this line
  if( left < right){
    let index = pivot(arr, left, right);
    quickSort(arr, left, index);
    quickSort(arr, index+1, right);
  }
  //log(k++,arr);
    return arr;
}

// test array:
// 
var arr;
arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
//arr = [4, 5, 3];
var res = quickSort(arr);
log(res);

```

#### 9. Implement Merge Sort
[Сортировка слиянием, JavaScript.](https://medium.com/@alivander/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%81%D0%BB%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5%D0%BC-javascript-1c0b0e8ff737)  
```
var log = console.log;

const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let j = 0;
    let i = j = 0;
    // сравниваем два массива, поочередно сдвигая указатели
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }
    // обрабатываем последний элемент при разной длине массивов
    // и возвращаем один отсортированный массив
    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};


const mergeSort = arr => {
    // Проверяем корректность переданных данных
    if (!arr || !arr.length) {
        return null;
    }
    //Если массив содержит один элемент просто возвращаем его
    if (arr.length <= 1) {
        return arr;
    }
    // Находим середину массива и делим его на два
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    // Для новых массивов снова вызываем сортировку,
    // сливаем их и возвращаем снова единый массив
    return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};
var arr;
arr = mergeSort([5,1,3]);
log(arr);
```

```
var log = console.log;

function merge(arrl, arrr){
  var arrRes = [];
  var cl = arrl.length;
  var cr = arrr.length;
  var i=0,j=0; 
  var n=0;
  while((i<cl || j<cr)&& n++<40){
    if(i<cl && j<cr){
    if(arrl[i]<arrr[j]){
      arrRes.push(arrl[i]);
      i++;
    }else{
      arrRes.push(arrr[j]);
      j++;
    }
    }else{
      if(i<cl){
        arrRes.push(arrl[i]);
        i++;
      }
      if(j<cr){
        arrRes.push(arrr[j]);
        j++;
      }
    }
  }
  return arrRes;
}

function sortArray(arr){
var count = arr.length;
if(count==1){
  return arr;
}

var count2 = count/2;
var arr1 = arr.slice(0,count2);
var arr2 = arr.slice(count2);
var c1 = arr1.length;
var c2 = arr2.length;

return merge(sortArray(arr1), sortArray(arr2));
}

function mergeSort(array) {
  // change code below this line
var arr = sortArray(array);
  // change code above this line
  return arr;
}
// test array:
var arr;
arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
var res = mergeSort(arr);
log(res);
```

### Data Structures

#### Introduction to the Coding Interview Data Structure Questions
#### 1 Typed Arrays
```
```
First create a buffer that is 64-bytes. Then create a Int32Array typed array with a view of it called i32View.  
```
var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);
```
#### 2 Learn how a Stack Works
```
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line

homeworkStack.pop();
homeworkStack.push("CS50");
console.log(homeworkStack);
```


#### 3 Create a Stack Class
```
function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function(val){
    collection.push(val);
  };
  this.pop = function(){
    return collection.pop();
  };
  this.peek = function(){
    return collection[0];
  };
  this.isEmpty = function(){
    return collection.length==0? true: false;
  };
  this.clear = function(){
    collection=[];
  };
 
  // Only change code above this line
}
var stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(5);
stack.pop();
stack.peek();
stack.print();
```


#### 4. Create a Queue Class
```
var log = console.log;

function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = function(val){
    collection.push(val);
  }
  this.dequeue = function(){
    return collection.shift();
  }
  this.front = function(){
    return collection[0];
  }
  this.size = function(){
    return collection.length;
  }
  this.isEmpty = function(){
    return collection.length == 0 ? true : false;
  }

  // Only change code above this line
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3); 
var res;
res = queue.dequeue();
log(res);
```
#### 5 Create a Priority Queue Class
```
var log = console.log;
function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
this.enqueue = function(val){
  var count = this.collection.length;
  if(count==0){
    this.collection.push(val);
    return;
  }
  if(count==1){
    if(this.collection[0][1]<=val[1]){
      this.collection.push(val);
    }else{
      this.collection.unshift(val);
    }
    return;
  }
  var index0 = count - 1;
  var once = false;
  for(var i=count-1;i>=0;i--){
    if(val[1]<this.collection[i][1]){
      index0 = i;
      once = true;
    }else{
      break;
    }
  }
if(once){
this.collection = [
...this.collection.slice(0,index0),
val,
...this.collection.slice(index0)];
}else{
  this.collection.push(val);
}
}
this.dequeue = function(){
  return this.collection.shift()[0];
}
  this.front = function(){
    return this.collection[0];
  }
  this.size = function(){
    return this.collection.length;
  }
  this.isEmpty = function(){
    return this.collection.length == 0 ? true : false;
  }
    // Only change code above this line
}

var queue = new PriorityQueue();
queue.enqueue(['a',3]);
queue.enqueue(['c',1]);
queue.enqueue(['d',3]); 
queue.enqueue(['b',1]);
 var res;
 queue.printCollection();
 res = queue.dequeue();
 queue.printCollection();
```

#### 6 Create a Circular Queue
```
var log = console.log

class CircularQueue {
   constructor(size) {

     this.queue = [];
     this.read = 0;
     this.write = 0;
     this.max = size - 1;

     while (size > 0) {
        this.queue.push(null);
        size--;
     }
   }

   print() {
     return this.queue;
   }

   enqueue(item) {
    // Only change code below this line
    if(this.write > this.max){
      this.write = 0
    }
var val = this.queue[this.write]
if(val == null){
  this.queue[this.write] = item;
  this.write++
  return item
}else{
  return null
}    
    // Only change code above this line
   }

   dequeue() {
    // Only change code below this line
var res = null    
if(this.read >= this.max+1){
  this.read = 0
}
res = this.queue[this.read]
this.queue[this.read] = null
if(res != null){
this.read++;
}
this.r = this.write - this.read
return res
    // Only change code above this line
   }
}

var cq = new CircularQueue(5)
cq.enqueue(1)
cq.enqueue(2)
log(cq.write, cq.read, cq.queue)
log(cq.dequeue())
log(cq.write, cq.read, cq.queue)
// 2 0 [ 1, 2, null, null, null ]
// 1
// 2 1 [ null, 2, null, null, null ]

```

#### 7 Create a Set Class
```
var log = console.log

class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = [];
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary.indexOf(element) !== -1;
  }

  // This method will return all the values in the set as an array
  values() {
    return this.dictionary;
  }

  // change code below this line
  // write your add method here
  add(item){
    if(this.dictionary.indexOf(item)==-1){
   this.dictionary.push(item)
   this.length++
   return true
    }
   return false 
  }
  // write your remove method here
  remove(item){
    if(this.dictionary.indexOf(item) == -1){
      return false
    }else{
      this.dictionary=this.dictionary.filter(v => v != item)
      this.length--
      return true
    }
  }
  // write your size method here
    size(){
      return this.length
    }
  // change code above this line
}

var set = new Set()
set.add(1)
set.add(3)
set.remove(1)
log(set.has(3),set, set.size())
//true { dictionary: [ 3 ], length: 1 } 1
```

#### 8 Perform a Union on Two Sets
```
var log = console.log

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }
    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }
    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })
    return newSet;
  }
  // change code above this line
}

var setA = new Set()
setA.add("a")
setA.add("b")
setA.add("c")
var setB = new Set()
setB.add("c")
setB.add("d")
log(setA.union(setB).values())
//[ 'a', 'b', 'c', 'd' ]
```

#### 9 Perform an Intersection on Two Sets of Data
```
var log = console.log

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method from that lesson
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })

    return newSet;
  }
  // change code below this line
  intersection(setB){
    var setC = new Set()
    this.values().forEach(i=>{
      setB.values().forEach(j=>{
        if(i==j){
          setC.add(i)
        }
      })
    })
    return setC
  }
  // change code above this line
}

var setA = new Set()
setA.add("a")
setA.add("b")
setA.add("c")
var setB = new Set()
setB.add("a")
setB.add("b")
setB.add("d")
setB.add("e")
log(setA.intersection(setB).values())
//[ 'a', 'b' ]
```

#### 10 Perform a Difference on Two Sets of Data
```
var log = console.log
class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // this method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }
    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }
    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method from that lesson
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    })
    set.values().forEach(value => {
      newSet.add(value);
    })
    return newSet;
  }
  // This is our intersection method from that lesson
  intersection(set) {
    const newSet = new Set();
    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }
    smallSet.values().forEach(value => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    })
    return newSet;
  }
  // change code below this line
difference(setB){
  var setC = new Set()
this.values().forEach(i=>{
  var br = false
  setB.values().forEach(j=>{
    if(i == j){
      br = true
      return
    }
  })
  if(br == false){
    setC.add(i)
  }
})
  return setC
}  
  // change code above this line
}

var setA = new Set()
setA.add("a")
setA.add("b")
setA.add("c")
var setB = new Set()
setB.add("a")
setB.add("b")
setB.add("d")
setB.add("e")
log(setA.difference(setB).values())
//[ 'c' ]
```

#### 11 Perform a Subset Check on Two Sets of Data
```
isSubsetOf(setB){
//если длина массива одинаковых элементов равна длине подмассива  
  var res = false
  var count = this.length
  var c = 0
  this.values().forEach(i=>{
  var eq = false
  setB.values().forEach(j=>{
    if(i == j){
      eq = true
      c++
      return
    }
   })
  })
  if(c == count){
    res = true
  }
  return res
}
  // change code above this line
}
//['a','b'] isSubsetOf ['a','b','c','d'] true
```

#### 12 Create and Add to Sets in ES6
```
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // change code below this line
set.add('Taco')
set.add('Cat')
set.add('Awesome')
  // change code above this line
  console.log(Array.from(set));
  return set;
}
checkSet();
//[ 1, 2, 3, 'Taco', 'Cat', 'Awesome' ]
```

#### 13 Remove items from a set in ES6
```
function checkSet(){
   var set = new Set([1, 2, 3, 4, 5])//Create a set with values 1, 2, 3, 4, & 5
   set.delete(2)
   set.delete(5)
   //Remove the value 2
   //Remove the value 5
   //Return the set
   return set;
}
console.log(Array.from(checkSet())) 
//[ 1, 3, 4 ]
```

#### 14 Use .has and .size on an ES6 Set
```
function checkSet(arrToBeSet, checkValue){
   // change code below this line
var set = new Set(arrToBeSet);
var check = set.has(2)
return [check, set.size]
   // change code above this line
}

console.log(checkSet([ 1, 2, 3], 2)); // Should return [ true, 3 ]
```

#### 15 Use Spread and Notes for ES5 Set() Integration
```
function checkSet(set){
   // change code below this line
   var set = new Set(set)
   return Array.from(set)
   // change code above this line
}

console.log(checkSet([1,2,3]))
//[ 1, 2, 3 ]
```

#### 16 Create a Map Data Structure
```
var log = console.log
var Map = function() {
  this.collection = {}; 
  // change code below this line
  // change code above this line
  this.add = function(key, value){
    this.collection[key]=value
    return this.collection[key] 
    } 
  this.remove = function(key){
    if(this.collection[key] != undefined){
    //this.collection[key].delete()
    //Object.delete(this.collection[key])
    delete this.collection[key]
    }
  }
this.get = function(key){
  return this.collection[key]
}

this.has = function(key){
    if(this.collection[key]==undefined){
      return false
    }  
    return true
}
this.values = function(){
  var arr = []
  for(var v in this.collection){
    arr.push(this.collection[v])
  }
  //var arr = Object.entries(this.collection) 
  return arr
}
this.size = function(){
  return Object.entries(this.collection).length
}
this.clear = function(){
  this.collection={}
}
}; 

var map = new Map()
map.add('a','b')
map.add('c','d')
//map.remove('c')
//log(map.size())
//log(map.get('a'))
log(map.values())
//[ 'b', 'd' ]
```











#### 17 Create an ES6 JavaScript Map
```
// change code below this line

var myMap = new Map()
myMap.set('freeCodeCamp','Awesome!')
myMap.set('a', 2)
console.log(...myMap.values()) 
console.log(...myMap.entries()) 
console.log(...myMap.keys())
//Awesome! 2
//[ 'freeCodeCamp', 'Awesome!' ] [ 'a', 2 ]
//freeCodeCamp a
```

#### 18 Create a Hash Table

hasOwnProperty

[codepen.io Hash Tables](https://codepen.io/beaucarnes/pen/VbYGMb?editors=0012) 
[youtube Hash Tables - Beau teaches JavaScript](https://www.youtube.com/watch?v=F95z5Wxd9ks) 
[]() 
[]() 


add - key, val
 - индекса нет - добавляется пустой объкт
 - записываетс индекс, кей, валуе

remove - key
 - коллекция с индексом имеет ключ - удаляем ключ
 - при нулевой длине индекса, удаляем и ключ
 
lookup - key - null, val
 -  при наличие индекса - по ключу возвращаем вад
 - нет индекса - null

```
var log = console.log
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
 
  this.add = function(key, val){
    var index = hash(key)
    var collectIndex = this.collection[index] 
    if(this.collection[index] == undefined){
      this.collection[index] = {}
    }
    this.collection[index][key] = val 
  }
 
  this.remove = function(key, val){
  var index = hash(key)
  if(this.collection[index]!=undefined){
    if(this.collection[index][key]!=undefined){
      delete this.collection[index][key]
    }
    if(Object.keys(this.collection[index]).length == 0){
      delete this.collection[index]
    }
  }
}
  this.lookup = function(key){
    var index = hash(key)
    if(this.collection[index]!=undefined){
      if(this.collection[index][key]!=undefined){
        return this.collection[index][key]
      }
      return null
    }

    log(index, this.collection[index])
return null
  }
  
  // change code above this line
};

var ht = new HashTable()
ht.add('a','b')
// ht.add('a','bb') 
// ht.add('a','b')
// ht.add('a','bbb')  
//ht.remove('a','b')

log(ht.lookup('a'))
```

##### варианты
- index[ { a: 'bb' }, { a: 'bbb' } ]
- index{a: ['bb', 'bbb']}
- index{a:b}

```
00:00
a hash-table is used to implement
00:02
associative arrays or mappings of key
00:05
value pairs hash tables are a common way
00:08
to implement the map data structure or
00:10
objects they are widely used because of
00:13
how efficient they are the average time
00:15
for each lookup is not tied to the
00:17
number of elements stored in the table
00:19
in fact the average time complexity of
00:22
hash tables and big notation is o of 1
00:25
for a search insert and delete that's
00:28
very fast the way a hash table works is
00:32
that it takes a key input and then runs
00:35
it through a hash function a hash
00:37
function basically just Maps strings to
00:40
numbers and usually the numbers just
00:42
correspond to indexes in an array so for
00:45
example here are the strings we pass
00:48
through the hash function and then we
00:50
get the numbers over here a hash
00:52
function needs to be consistent so when
00:55
you run a key through the hash function
00:57
it always gives the same number and it
01:00
should map different words to different
01:02
numbers if two words get hashed to the
01:05
same number this is called a collision
01:08
you can see in this example John Smith
01:10
gets hashed to two Lisa Smith gets
01:13
hashed to what was either one Sam dofor
01:17
and then Sandra D also gets hashed to
01:19
two so this is a collision because both
01:21
these names once they run through the
01:23
hash function get turned into the same
01:26
number or the same index for the array
01:29
one way to handle collisions is just to
01:32
store both key value pairs at that index
01:34
then upon lookup of either you would
01:38
have to iterate through the bucket of
01:39
items to find the key you are looking
01:41
for this could take a little extra time
01:44
because of the iteration so here's
01:47
another example where it's showing that
01:48
the names are going through the hash
01:50
function and then it's showing basically
01:52
the information that's being stored in
01:55
the bucket so this would be the array
01:57
index and then in that array index or
02:00
the bucket we would store the phone
02:02
number so this would be like a phone
02:04
book the numerical value from the hash
02:07
function is then you
02:09
and the index to store that information
02:11
then if you try to access the same key
02:14
again the hashing function will process
02:16
the key and return the same numerical
02:18
result which will then be used to look
02:21
up the associate value which just means
02:23
that once you store all these things in
02:25
the array once you want to get the
02:28
number again you would just pass in the
02:31
key John Smith into the hash function it
02:33
would give you the exact same array
02:35
index too and then you would get the
02:37
information returned to you which is the
02:39
phone number
02:40
now you will probably never have to
02:42
implement hash tables yourself because
02:45
most languages including Java Script
02:47
already have them built-in in JavaScript
02:49
hash tables are usually used to
02:51
implement objects however it can be
02:53
helpful to see how they are implemented
02:55
just to gain a better understanding so
02:58
I'm going to show you the code for a
02:59
hash table so you can see how they work
03:02
first of all we have our hash function
03:04
where we're gonna pass in the string
03:07
that we want to hash and then the Max
03:09
Max is the number of buckets that we're
03:12
using in our hash table to store values
03:15
we're gonna start with hash being 0 and
03:18
we are going to for each character in
03:21
the string string that length for as
03:22
long as the string is we are going to
03:25
add the care code of each character each
03:30
string character has a numerical value
03:32
associated with it so basically we're
03:35
just adding up the character codes for
03:37
each character in the string and putting
03:39
into the hash now instead of returning
03:42
the hash we're gonna return hash modulus
03:45
maths that just means we are going to
03:48
divide by the number of buckets and then
03:51
return the remainder so if we had 5
03:54
buckets if we're divided by 5 the
03:57
remainder is either there going to be 0
03:58
1 2 3 or 4 and then that would be the
04:01
index that we're going to place the item
04:03
into the array now this is a very simple
04:06
hash function just for an example but
04:09
they can get much more complicated now
04:11
let's go into the hash table function so
04:15
in the hash table function we're gonna
04:16
have our storage array which is where
04:18
we're gonna store all that data we're
04:21
putting
04:21
to it and the storage limit now this is
04:24
the number of buckets in the array at
04:27
first I'm just gonna show you with just
04:28
four different buckets but normally
04:30
actually this number would be much
04:31
higher and this is just a utility
04:34
function just for this example so I can
04:37
easily print all the items in this
04:39
storage array I can easily log them so
04:42
here's where the real methods come in
04:43
for the hash table if we want to add
04:46
some information so first you're gonna
04:48
pass in a key and a value we're gonna
04:50
figure out the index of the array by
04:53
running it through the hash function so
04:55
we create this hash function where we're
04:57
gonna pass in the key and the storage
04:58
limit the number of buckets that we're
05:01
gonna have in our hash table and that's
05:04
going to return an index that we went
05:06
over before if there's nothing in that
05:09
index in the storage array if it's
05:11
undefined we're just going to set the
05:14
index to be this key value pair array
05:17
else if it's not undefined that means
05:20
there's already something in that bucket
05:22
so first we're gonna set insert it to
05:24
false and then we're gonna go through
05:26
each index to see if the key already
05:30
exists if the key already exists we're
05:33
gonna set the new value here and set
05:36
insert the true if the key does not
05:39
exist then insert is still gonna be
05:42
equal to false so we're going to push in
05:45
the new item that's where we'll get
05:47
multiple entries into one bucket so the
05:51
next thing is if we're going to remove
05:53
an item from the hash table so if we're
05:56
gonna remove you're just passing the key
05:58
of what you want to remove and now we're
06:00
gonna look up the index by passing it
06:02
into the hash function if the index that
06:05
length equals one that means there's
06:07
only going to be one item in that bucket
06:08
and the item in that bucket equals the
06:13
key that you passed in then you can just
06:16
delete that index you can just sleep
06:18
that item
06:18
but if it does not equal one that means
06:22
there's probably a few different items
06:24
at that index and we want to only delete
06:27
the item associated with that key so
06:30
we're going to go through each item in
06:32
that bucket or in the
06:33
next and if the key equals the key we
06:37
passed in then we can delete that item
06:39
the zero index is the key the one index
06:44
is the value so let's go how we would
06:47
look up an item again we're gonna set
06:49
the index using our hash function with
06:51
the key that we passed in and the
06:53
storage limit if the index there is
06:55
undefined we just return undefined it's
06:57
not the item is not in the hash table
07:00
else we're going to go through each
07:02
element in that bucket if the element
07:05
equals the key then we can return that
07:08
element so let's look at a few examples
07:10
first I'm going to show you an example
07:12
of the hash function here if we run that
07:15
for me three and every time I run that
07:17
you'll see in the console three three
07:19
three every time I put Bo it's gonna put
07:22
three but if I put a different name here
07:24
and I run that you can see on the
07:28
console it's gonna be five and now every
07:29
time I run that's gonna be five so with
07:31
this hash function it's going to always
07:33
be a number between zero and nine
07:35
because we're passing in ten as the
07:38
number of buckets so now let's actually
07:40
see the hash table so here we're gonna
07:44
create a new hash table called hte for a
07:47
hash table we're gonna add Bo who's a
07:49
person and find out it was a dog retsu
07:52
the dinosaur tux who's a penguin then
07:54
we're gonna look up tux and then we're
07:57
just gonna print the entire thing so
07:59
let's see what happens in the console so
08:02
we saw that tux is a penguin now let me
08:06
bring this over a little bit it's going
08:09
to show our entire half state well not
08:11
normally you're never gonna print out
08:13
the hash table like I did to the console
08:15
but I just did that just for learning
08:17
purposes if you remember up here we have
08:22
the storage limit set up for so we only
08:25
have four buckets the reason why I had
08:28
it set up for is so we'll see what it
08:30
looks like when there's a collision when
08:32
there's two things in one bucket just by
08:35
coincidence the first buck is undefined
08:37
that means none of these words hashed to
08:40
zero and then if we look at the second
08:44
bucket that's right here there's
08:45
actually two key value pairs
08:47
in the second bucket so both bow and tux
08:51
both gave one when it went through the
08:54
hash function and then you can see in
08:57
this bucket right here
08:59
we just have one item and then this
09:01
bucket right here we just have one item
09:03
so when we pass in Rex to the hash
09:05
function we got three returned but if we
09:07
go up here and we change the number of
09:10
buckets to something like 14 now I'm
09:14
gonna try running that again if you look
09:16
right here now there's a lot more
09:18
undefined because most of the buckets
09:20
are now empty but this bucket only has
09:22
one item that bug is one item and then
09:27
the last two bucks have one item and
09:28
there are no collisions now each bucket
09:31
only has one item now this has just been
09:34
a pretty simple example of a hash table
09:37
implementation but it's enough to give
09:39
you a basic idea of the hash table
09:41
thanks for watching my name is Bo Carnes
09:44
don't forget to subscribe and remember
09:47
use your code for good
Hash Tables - Beau teaches JavaScript
39 715 просмотров•15 апр. 2
```

#### 19 Work with Nodes in a Linked List
```
var log = console.log
var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// only add code below this line
var Cat = new Node('Cat')
Puppy.next = Cat
var Dog = new Node('Dog')
Cat.next = Dog

// test your code
//console.log(Kitten.next);  
log(Kitten.next)
```

#### 20 Create a Linked List Class
add - element
- length++
- if list empty
  - new Node
  - head to Node
- for if one ore more
  - ищется элемент у которого next == null


```
var log = console.log
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
var node = new Node(element)
var nodeVal = head
//log(nodeVal)
if(length==0){
  head = node
}else{
  for(var i=0;i<length;i++)
  {
    // log(i, nodeVal)
  if(nodeVal.next == null){
    nodeVal.next = node 
  }else{
    nodeVal = nodeVal.next
  }
  }
}
length++
    // Only change code above this line
  };
}

var ll = new LinkedList()
ll.add('a')
ll.add('b')
ll.add('c')
ll.add('d')
var node = ll.head()
for(var i=0;i<ll.size();i++){
    log(i, node.element, node.next!=null ? node.next.element:null)
  if(node!=null){
    node = node.next
  }
}
// 0 a b
// 1 b c
// 2 c d
// 3 d null
```

#### 21 Remove Elements from a Linked List
```
```

```
var log = console.log
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add = function(data){
  var node = this.head
  if(node == null){
    var nodeNew = new Node(data, null)
    this.head = nodeNew
    this.tail = nodeNew
//    log(nodeNew)
    return
  }
  var nodePrev = null
  while(node!=null){
    nodePrev = node
    node = node.next
  }
  var nodeNew = new Node(data, nodePrev)
  nodePrev.next = nodeNew
  this.tail = nodeNew
  }

  this.remove = function(data){
  var node = this.head
  var nodePrev = null
  while(node!=null){
    if(node.data==data){
// log(data)
    if(nodePrev!=null){
      nodePrev.next = node.next
    }else{
      this.head = node.next
    }
    if(node.next!=null){
      node.next.prev = nodePrev
    }else{
      this.tail=node
    }

    }
    nodePrev = node
    node = node.next
  }

  }
  // change code above this line
};

var dll = new DoublyLinkedList()
dll.add('a')
dll.add('b')
dll.add('c')

dll.remove('c')

var node = dll.head
var s = ""
while(node!=null){
  s += node.data + ", "
  // log(node.prev!=null?node.prev.data:null, node.data)
  node = node.next
}
//log(s)
//log(dll)
```

#### 22 Search within a Linked List
```
```



```
var log = console.log
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }
        currentNode.next = node;
    }
    length++;
  };

  this.remove = function(element){
    // Only change code below this line
var nodePrev = this.head()
if(nodePrev!=null){
  var node = this.head().next
  if(this.head().element==element){
    head = node
    length--
    return
  }
}
for(var i=0;i<length-1;i++){
  if(node.element==element){
  nodePrev.next = node!=null ? node.next: null
  length--
}
  nodePrev = node
  node = node.next
}
    // Only change code above this line
  };
}


var log=console.log
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line
this.isEmpty = function(){
return this.head()==null?true:false
}

this.indexOf = function(element){
  var res = -1
  var node = this.head()
  for(var i=0;i<length;i++){
    if(node.element==element){
      res = i
      break
    }
    node = node.next
  }
  return res
}

this.elementAt = function(number){
  var node = this.head()
  for(var i=0;i<length;i++){
    if(i==number){
      break
    }
    node = node.next
  }
  return node!=null?node.element:undefined
}
  // Only change code above this line
}

var ll = new LinkedList()
ll.add('a')
ll.add('b')
ll.add('c')

// log(ll.isEmpty())
//log(ll.indexOf('a'))
log(ll.elementAt(2))
var node = ll.head()
while(node!=null){
  log(node.element)
  node = node.next
}
```

#### 23 Remove Elements from a Linked List by Index
```
```
##### Удаление элемента из листа
- Находится элемент списка по имени
- Предыдущему элементу  назначается в качестве следующего элемента элемент следующий за найденным
- удаляется найденный элемент  




```
var log = console.log
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line
this.removeAt=function(number){

var node = this.head()
var nodePrev = null
for(var i=0;i<length;i++){
  if(i==number){
    if(nodePrev===null){
      head = node.next
      length--
      return node.element      
    }
    nodePrev.next = node.next
    length--
    return node.element      
  }
  nodePrev = node
  node = node.next
}
return null
}
  // Only change code above this line
}

var ll = new LinkedList()
ll.add('a')
ll.add('b')
ll.add('c')
ll.removeAt(3)
var node = ll.head()
while(node!=null){
  log(node.element)
  node = node.next
}
```

#### 24 Add Elements at a Specific Index in a Linked List
```
```


```
var log = console.log
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
this.addAt = function(index,element){
  var res = false
  var nodeNew = new Node(element)
  var node = this.head()
  var nodePrev = null
  for(var i=0;i<length;i++){
    if(i==index){
    //  log(index, element)
     if(nodePrev!=null){
       nodePrev.next = nodeNew
     }else{
       head = nodeNew
     }
     nodeNew.next = node
     length++
     res = true
     break
    }
    nodePrev = node
    node = node.next
  }
  return res
}
  // Only change code above this line
}

var ll = new LinkedList()
ll.add('a')
ll.add('b')
ll.add('c')

ll.addAt(2, 'dd')

var node = ll.head()
var s = ""
while(node!=null){
  s += node.element + ", "
  node = node.next
}
log(s)

```

#### 25 Create a Doubly Linked List
```
var log = console.log
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add = function(data){
  var node = this.head
  if(node == null){
    var nodeNew = new Node(data, null)
    this.head = nodeNew
    this.tail = nodeNew
//    log(nodeNew)
    return
  }
  var nodePrev = null
  while(node!=null){
    nodePrev = node
    node = node.next
  }
  var nodeNew = new Node(data, nodePrev)
  nodePrev.next = nodeNew
  this.tail = nodeNew
  }

  this.remove = function(data){
  var node = this.head
  var nodePrev = null
  while(node!=null){
    if(node.data==data){
// log(data)
    if(nodePrev!=null){
      nodePrev.next = node.next
    }else{
      this.head = node.next
    }
    if(node.next!=null){
      node.next.prev = nodePrev
    }else{
      this.tail=node
    }

    }
    nodePrev = node
    node = node.next
  }

  }
  // change code above this line
};

var dll = new DoublyLinkedList()
dll.add('a')
dll.add('b')
dll.add('c')

dll.remove('c')

var node = dll.head
var s = ""
while(node!=null){
  s += node.data + ", "
  // log(node.prev!=null?node.prev.data:null, node.data)
  node = node.next
}
log(s)
//log(dll)
```


#### 26 Reverse a Doubly Linked List
```
var log = console.log
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add = function(data){
  var node = this.head
  if(node == null){
    var nodeNew = new Node(data, null)
    this.head = nodeNew
    this.tail = nodeNew
//    log(nodeNew)
    return
  }
  var nodePrev = null
  while(node!=null){
    nodePrev = node
    node = node.next
  }
  var nodeNew = new Node(data, nodePrev)
  nodePrev.next = nodeNew
  this.tail = nodeNew
  }


  this.reverse = function(){
    var node = this.head
    while(node!=null){
      log(node.data)
      // log(node)
      var prev = node.prev
      node.prev = node.next
      node.next = prev
      node = node.prev
    }
    var tail = this.tail
    this.tail = this.head
    this.head = tail
  }
  // change code above this line
};

var dll = new DoublyLinkedList()
dll.add('a')
dll.add('b')
dll.add('c')

dll.reverse()

var node = dll.head
var s = ""
while(node!=null){
  s += node.data + ", "
  // log(node.prev!=null?node.prev.data:null, node.data)
  node = node.next
}
log(s)
```


#### 27 Add a New Element to a Binary Search Tree

```
	10
null
add(9)
    10
9	
```

##### рекурсивная searchTree
- node - параметр(первый вызов не null(this.root))
- если node.left == null, то node.left = new Node(val)
- если node.left - node, то вызов себя с параметром node.left  
  
  
- создает node c соответствующим value
1. Первый вызов, вызов сомой себя
 1. Первый вызов, в качестве параметра node - this root, который не null
 2. Если значение(внешнее из add) меньше значения node(параметра)
 3. Если node.left == null, то тогда new Node(


##### алгоритм inOrder
1. обход bst, наполнение массива arr элементами node.value c помощью рекурсивной traverseTree  

    1. traverseTree - параметр node (первый вызов node - this.root)
    1. если node - null возвращаем null
    1. если node.left, не null, то вызываем traverseTree c параметром node.left 
    1. Добавляем в массив node.value
    1. если node.right, не null, то вызываем traverseTree c параметром node.right 








```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.add = function(value){
    var nodeNew = new Node(value)
    var node = this.root
    var nodePrev = null
    while(node!=null){
      nodePrev = node
      if(value<node.value){
        node = node.left
      }else{
        node = node.right
      }
    }
      node = nodeNew
      if(nodePrev!=null){
    if(value<nodePrev.value){
      nodePrev.left = node
    }else{
      nodePrev.right = node
    }
      }else{
   this.root = nodeNew      
   }
  } 
  // change code above this line
}

var bst = new BinarySearchTree()
bst.add(8)
bst.add(7)

displayTree(bst)
```




#### 28 Find the Minimum and Maximum Value in a Binary Search Tree
```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.add = function(value){
    var nodeNew = new Node(value)
    var node = this.root
    var nodePrev = null
    while(node!=null){
      nodePrev = node
      if(value<node.value){
        node = node.left
      }else{
        node = node.right
      }
    }
      node = nodeNew
      if(nodePrev!=null){
    if(value<nodePrev.value){
      nodePrev.left = node
    }else{
      nodePrev.right = node
    }
      }else{
   this.root = nodeNew      
   }
  } 

this.findMax = function(){
    var node = this.root
    if(node==null){
      return null
    }
    var res = null
    var val = node.value
    while(node!=null){
      res = node.value
      node = node.right
    }
    return res
  }

this.findMin = function(){
    var node = this.root
    if(node==null){
      return null
    }
    var res = null
    var val = node.value
    while(node!=null){
      res = node.value
      node = node.left
    }
    return res
  }
  // change code above this line
}

var bst = new BinarySearchTree()
bst.add(8)
bst.add(7)
bst.add(9)

log(bst.findMax(), bst.findMin())
//displayTree(bst)
```




#### 29 Check if an Element is Present in a Binary Search Tree
```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.add = function(value){
    var nodeNew = new Node(value)
    var node = this.root
    var nodePrev = null
    while(node!=null){
      nodePrev = node
      if(value<node.value){
        node = node.left
      }else{
        node = node.right
      }
    }
      node = nodeNew
      if(nodePrev!=null){
    if(value<nodePrev.value){
      nodePrev.left = node
    }else{
      nodePrev.right = node
    }
      }else{
   this.root = nodeNew      
   }
  }

  this.isPresent = function(value){
    var res = false
    var node = this.root
    while(node!=null){
      if(value == node.value){
        res = true
        break
      }
      if(value>node.value){
        node = node.right
      }else{
        node= node.left
      }
    }
    return res
  } 
  // change code above this line
}

var bst = new BinarySearchTree()
bst.add(10)
bst.add(12)
bst.add(17)
bst.add(25)

log(bst.isPresent(12),bst.isPresent(9))
//displayTree(bst)
```




#### 30 Check if Tree is Binary Search Tree
```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.add = function(value){
    var nodeNew = new Node(value)
    var node = this.root
    var nodePrev = null
    while(node!=null){
      nodePrev = node
      if(value<node.value){
        node = node.left
      }else{
        node = node.right
      }
    }
      node = nodeNew
      if(nodePrev!=null){
    if(value<nodePrev.value){
      nodePrev.left = node
    }else{
      nodePrev.right = node
    }
      }else{
   this.root = nodeNew      
   }
  }

  // change code above this line
}

function isBinarySearchTree(vbst){
  var isTree = true
  function checkNode(node){
    log(node.value)
    if(node==null){
      return null
    }
    if(node.left!=null){
      if(node.left.value>node.value){
        isTree = false
      }else{
        checkNode(node.left)
      }
    }
    if(node.right!=null){
      if(node.right.value<node.value){
        isTree = false
      }else{
        checkNode(node.right)
      }
    }
  }
  checkNode(vbst.root)
  return isTree
}

var bst = new BinarySearchTree()
bst.add(10)
var node = new Node(7)
// bst.root.right = node
bst.add(12)
bst.add(17)
bst.add(25)
bst.add(9)

log(isBinarySearchTree(bst))
// displayTree(bst)
```



#### 31 Find the Minimum and Maximum Height of a Binary Search Tree

##### алгоритм
BinarySearchTree  
findMinHeight  
Ищется высота левых узлов  
ищеся высота правых узлов  
возвращается минимальное значение плюс 1 (root)  

findMinHeight   
Если узел null, возвращается -1  
если у узла левый потомок и правый потомок null  
возвращаем 0  
*** если дошли до сюда, значит какой, то потомок есть  
если левый null, то ищем правый  
возвращаем правый вызывая себя + 1  
если правый null, то ищем левый  
возвращаем левый вызывая себя + 1  
Замечание  
1. сначала с левым разборки, потом с правым
2. сделать проверку на не null


```
```

```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.kk = 0
  this.root = null;
  // change code below this line
  this.add = function(value){
    var nodeNew = new Node(value)
    var node = this.root
    var nodePrev = null
    while(node!=null){
      nodePrev = node
      if(value<node.value){
        node = node.left
      }else{
        node = node.right
      }
    }
      node = nodeNew
      if(nodePrev!=null){
    if(value<nodePrev.value){
      nodePrev.left = node
    }else{
      nodePrev.right = node
    }
      }else{
   this.root = nodeNew      
   }
  }

this.findMinHeight = function(node = this.root){
if(node == null){
  return -1
}
if(node.left==null && node.right==null){
  return 0
}
if(node.right==null){
  return this.findMinHeight(node.left) + 1
}
if(node.left==null){
  var t = this.findMinHeight(node.right) + 1
  return t
}
var lHeight = this.findMinHeight(node.left)
var rHeight = this.findMinHeight(node.right)
return Math.min(lHeight, rHeight)+1
}

this.findMaxHeight = function(node = this.root){
if(node == null){
  return -1
}
if(node.left==null && node.right==null){
  return 0
}
if(node.right==null){
  return this.findMaxHeight(node.left) + 1
}
if(node.left==null){
  var t = this.findMaxHeight(node.right) + 1
  return t
}
var lHeight = this.findMaxHeight(node.left)
var rHeight = this.findMaxHeight(node.right)
return Math.max(lHeight, rHeight)+1
}
this.isBalanced = function(){
var min = this.findMinHeight()
var max = this.findMaxHeight()
if(max == min){
  return true
}
return false
}

  // change code above this line
}

var bst = new BinarySearchTree()
bst.add(10)
var node = new Node(7)
// bst.root.right = node
bst.add(12)
bst.add(17)
bst.add(25)
bst.add(29)
bst.add(9)
bst.add(8)
bst.add(7)
bst.add(6)

log(bst.findMinHeight(), bst.findMaxHeight(), bst.isBalanced())
// displayTree(bst)
```

#### Факториал

```
function f(x){
  if(x==1){
    return 1
  }else
  return f(x-1)*x
}
//1!*2, 2!*3, 3!*4

function f2(x){
  var res = 1
  for(var i=1;i<=x;i++){
    res *= i
  }
  return res
}

log(f(5), f2(5))
```

##### Числа от 1 до 3
```
function f(x){
// f(1) - 1
// f(2) - f(1), 2 - 1, 2
// f(3) - f(2), 3 - 1, 2, 3
if(x==1){
  return "1"
}
var t = f(x-1)+", "+x
log(t)
return t  
}

log( f(3) )

1, 2
1, 2, 3
1, 2, 3
// 1 1, 2
// 1 1, 2, 3
// 2 1, 2, 3
```

```
function f(x){
  if(x==1){
    return [1]
  }
return f(x-1).concat(x)  
}
//[ 1, 2, 3 ]
```

[Рекурсия. Занимательные задачки](https://habr.com/ru/post/275813/)

#### 32 Use Depth First Search in a Binary Search Tree
[Binary Search Tree: Traversal & Height - Beau teaches JavaScript](https://www.youtube.com/watch?v=Aagf3RyK3Lw)  
[CodePen Home
Binary Search Tree](https://codepen.io/beaucarnes/pen/ryKvEQ?editors=0011)  
[]()  
[]()  
[]()  
[]()  


```
// arrPush(0)=4
//   arrPush(1)=11
//     arrPush(2)=30
// res.push(2)=30
// res.push(1)=11
// res.push(0)=4

var arr = [1, 2, 3]
function mArr(arr){
//[1,2,3] - input
//[ 30, 11, 4 ] - output 
var res = new Array()
function arrPush(index=0){
  if(arr[index+1]!=undefined){
    arrPush(index+1)
  }
  res.push(arr[index]**3+3)
}
arrPush()
return res
}

log(mArr(arr))
```



```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.kk = 0
  this.root = null;
  // change code below this line
  this.add = function(value){
    var nodeNew = new Node(value)
    var node = this.root
    var nodePrev = null
    while(node!=null){
      nodePrev = node
      if(value<node.value){
        node = node.left
      }else{
        node = node.right
      }
    }
      node = nodeNew
      if(nodePrev!=null){
    if(value<nodePrev.value){
      nodePrev.left = node
    }else{
      nodePrev.right = node
    }
      }else{
   this.root = nodeNew      
   }
  }

this.inorder = function(){
     if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {       
        node.left && traverseInOrder(node.left);
        result.push(node.value);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
 }

this.preorder = function(node = this.root){
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.value);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
}

this.postorder = function(node = this.root){
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.value);
      };
      traversePostOrder(this.root);
      return result;
    }
}
  // change code above this line
}

var bst = new BinarySearchTree()
bst.add(10)
var node = new Node(7)
// bst.root.right = node
bst.add(12)
bst.add(17)
bst.add(25)
bst.add(29)
bst.add(9)
bst.add(8)
bst.add(7)
bst.add(6)


log(bst.postorder())
// displayTree(bst)
```



```
/* Binary Search Tree */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
  findMinHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMinHeight(node.left);
      let right = this.findMinHeight(node.right);
      if (left < right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
  findMaxHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMaxHeight(node.left);
      let right = this.findMaxHeight(node.right);
      if (left > right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {       
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }
  
  levelOrder() {
      let result = [];
      let Q = []; 
      if (this.root != null) {
          Q.push(this.root);
          while(Q.length > 0) {
              let node = Q.shift();
              result.push(node.data);
              if (node.left != null) {
                  Q.push(node.left);
              };
              if (node.right != null) {
                  Q.push(node.right);
              };
          };
          return result;
      } else {
          return null;
      };
  };
}



const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());```


##### moy
```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.kk = 0
  this.root = null;
  // change code below this line
  this.add = function(value){
    var nodeNew = new Node(value)
    var node = this.root
    var nodePrev = null
    while(node!=null){
      nodePrev = node
      if(value<node.value){
        node = node.left
      }else{
        node = node.right
      }
    }
      node = nodeNew
      if(nodePrev!=null){
    if(value<nodePrev.value){
      nodePrev.left = node
    }else{
      nodePrev.right = node
    }
      }else{
   this.root = nodeNew      
   }
  }

this.inorder = function(node = this.root){
  if(node == null){
    return null
  }
  if(node.left==null&&node.right==null){
    return [node.value]
  }
  if(node.left==null){
    // return this.inorder(node.right).concat(node.value) 
    return [node.value].concat(this.inorder(node.right))
  }
  if(node.right==null){
    // return this.inorder(node.left).concat(node.value) 
    return [node.value].concat(this.inorder(node.left))
  }
  log(node.value)
  return 1
}

this.preorder = function(node = this.root){
  if(node == null){
    return null
  }
  
  return 2
}

this.postorder = function(node = this.root){
  if(node == null){
    return null
  }
  if(node.left==null&&node.right==null){
    return [node.value]
  }
  if(node.left==null){
    // return this.postorder(node.right).concat(node.value) 
    return [node.value].concat(this.postorder(node.right))
  }
  if(node.right==null){
    return node.left
  }
  log(node.value)
  return 1
}
  // change code above this line
}

var bst = new BinarySearchTree()
bst.add(10)
var node = new Node(7)
// bst.root.right = node
bst.add(12)
bst.add(17)
bst.add(25)
bst.add(29)
bst.add(9)
bst.add(8)
bst.add(7)
bst.add(6)


log(bst.inorder(bst.root.left))
// displayTree(bst)

```



```
this.inorder = function(node = this.root){
  if(node == null){
    return 0
  }
  if(node.left==null&&node.right==null){
    return [node.value]
  }
  if(node.left==null){
    // return this.inorder(node.right).concat(node.value) 
    return [node.value].concat(this.inorder(node.right))
  }
  if(node.right==null){
    return node.left
  }
```

#### 33 Use Breadth First Search in a Binary Search Tree
```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.kk = 0
  this.root = null;
  // change code below this line
  this.add = function(value){
    var nodeNew = new Node(value)
    var node = this.root
    var nodePrev = null
    while(node!=null){
      nodePrev = node
      if(value<node.value){
        node = node.left
      }else{
        node = node.right
      }
    }
      node = nodeNew
      if(nodePrev!=null){
    if(value<nodePrev.value){
      nodePrev.left = node
    }else{
      nodePrev.right = node
    }
      }else{
   this.root = nodeNew      
   }
  }

this.levelOrder = function(root = this.root){
//log(root)
if(!root) return null
  var res = []
  var queue = [root]
  while(queue.length>0){
    let node = queue.shift()
    res.push(node.value)    
    if(node.left){
      queue.push(node.left)
    }
    if(node.right){
      queue.push(node.right)
    }
  }
  return res
}

this.reverseLevelOrder = function(root = this.root){
if(!root) return null
  var res = []
  var queue = [root]
  var nodeSum = []
  var nodePaire = []
  var s = ""
  while(queue.length>0){
    let node = queue.shift()
    s += " - " + node.value
    res.push(node.value)    
    if(node.right){
      s += " *"
      queue.push(node.right)
    }
    if(node.left){
      s += " #"
      queue.push(node.left)
    }
  }
  log(s)
  return res
}
//  change code above this line
}

var bst = new BinarySearchTree()
bst.add(10)
var node = new Node(7)
// bst.root.right = node
bst.add(11)
bst.add(12)
// bst.add(25)
// bst.add(29)
bst.add(9)
bst.add(8)
// bst.add(7)
// bst.add(6)


// log(bst.levelOrder())
log(bst.reverseLevelOrder())
// displayTree(bst)

```


#### 34 Delete a Leaf Node in a Binary Search Tree
```

```

```
```

```
```

```
```

```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.kk = 0
  this.root = null;
  // change code below this line

  this.add = function(value){
    var nodeNew = new Node(value)
    var node = this.root
    var nodePrev = null
    while(node!=null){
      nodePrev = node
      if(value<node.value){
        node = node.left
      }else{
        node = node.right
      }
    }
      node = nodeNew
      if(nodePrev!=null){
    if(value<nodePrev.value){
      nodePrev.left = node
    }else{
      nodePrev.right = node
    }
      }else{
   this.root = nodeNew      
   }
  }

this.remove = function(val){
  if(this.root == null){
    return null
  }else if(this.root.left==null&&this.root.right==null){
    this.root = null
    return null
  }
  
  var arr1 = []
  var arr2 = []
  var arr3 = []
  var nodePrev = null
  var node2=null, nodePrev2=null
function traverseLeftNode(node){
  arr1.push(node.value)
  if(node.value == val){
    node2 = node
    nodePrev2 = nodePrev 
  }
  nodePrev = node
  if(node.left){
    traverseLeftNode(node.left)
  }
}
traverseLeftNode(this.root)
if(nodePrev2!=null){
  nodePrev2.left =null
  return
}
function traverseRightNode(node){
  arr2.push(node.value)
  if(node.value == val){
    node2 = node
    nodePrev2 = nodePrev 
  }
  nodePrev = node
  if(node.right){
    traverseRightNode(node.right)
  }
}
traverseRightNode(this.root)
if(nodePrev2!=null){
  nodePrev2.right =null
  return
}
  return null
}
//  change code above this line
}

var bst = new BinarySearchTree()
bst.add(10)
var node = new Node(7)
// bst.root.right = node
bst.add(11)
bst.add(12)
// bst.add(25)
// bst.add(29)
bst.add(9)
bst.add(8)
// bst.add(7)
// bst.add(6)


// log(bst.levelOrder())
log(bst.remove(12))
displayTree(bst)
```

#### 35 Delete a Node with One Child in a Binary Search Tree
```
```


```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.kk = 0
  this.root = null;
  // change code below this line

  this.add = function(value){
    var nodeNew = new Node(value)
    var node = this.root
    var nodePrev = null
    while(node!=null){
      nodePrev = node
      if(value<node.value){
        node = node.left
      }else{
        node = node.right
      }
    }
      node = nodeNew
      if(nodePrev!=null){
    if(value<nodePrev.value){
      nodePrev.left = node
    }else{
      nodePrev.right = node
    }
      }else{
   this.root = nodeNew      
   }
  }

this.remove = function(val){
  if(this.root == null){
    return null
  }else if(this.root.left==null&&this.root.right==null){
    this.root = null
    return null
  }
  
  var arr1 = []
  var arr2 = []
  var arr3 = []
  var nodePrev = null
  var node2=null, nodePrev2=null
function traverseLeftNode(node){
  arr1.push(node.value)
  if(node.value == val){
    node2 = node
    nodePrev2 = nodePrev 
  }
  nodePrev = node
  if(node.left){
    traverseLeftNode(node.left)
  }
}
traverseLeftNode(this.root)
if(nodePrev2!=null){
  log(nodePrev2.value, node2.value)
  if(!node2){
    nodePrev2.left = null
  }else{
    nodePrev2.left = node2.left?node2.left:null
  }
  return
}
else if(node2&&node2.value == this.root.value){
   log(node2.value)
this.root = node2.right ? node2.right : null
this.root.left = node2.left
// this.root = node2.left ? node2.left : null
// this.root.right = node2.right
return
}
function traverseRightNode(node){
  arr2.push(node.value)
  if(node.value == val){
    node2 = node
    nodePrev2 = nodePrev 
  }
  nodePrev = node
  if(node.right){
    traverseRightNode(node.right)
  }
}
traverseRightNode(this.root)
if(nodePrev2!=null){
//  log(11)
  if(!node2){
    nodePrev2.right = null
  }else{
    nodePrev2.right = node2.right?node2.right:null
  }
  return
}
  return null
}
//  change code above this line
}

var bst = new BinarySearchTree()
bst.add(10)
var node = new Node(7)
// bst.root.right = node
bst.add(11)
bst.add(12)
// bst.add(25)
// bst.add(29)
bst.add(9)
bst.add(8)
// bst.add(7)
// bst.add(6)

log(bst.remove(11))
displayTree(bst)
```

#### 36 Delete a Node with Two Children in a Binary Search Tree
[youtube Binary Search Tree - Beau teaches JavaScript](https://www.youtube.com/watch?v=5cU1ILGy6dM)  
[codepen](https://codepen.io/beaucarnes/pen/ryKvEQ?editors=0011)  


```
bst.add(10);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(2);
bst.add(7);
bst.add(6);
bst.add(8);
bst.add(22);
bst.add(5);
bst.add(20);
bst.add(11);
bst.remove(4)
--------------------------
         10
	  4      17
    3   7   11     22
  2    6  8      20
      5
--------------------------
	  5      17
    3   7   11     22
  2    6  8      20      
--------------------------
remove 4 с двумя детьми
- при удалении узла его значение замещается наименьшим из правой ветки
--------------------------										
```

```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // case 1: target has no children, change code below this line

  this.add = function(data){
    let node = this.root
    if(!node){
      this.root = new Node(data)
      return
    }
    // log(this.root)
    function searchTree(node){
      if(data < node.value){
        if(!node.left){
          let nodeNew = new Node(data)
          node.left = nodeNew
        }else{
          return searchTree(node.left)
        }
      }else{
        if(!node.right){
          let nodeNew = new Node(data)
          node.right = nodeNew
        }else{
          return searchTree(node.right)
        }
      }
    }
    searchTree(node)
  }

  this.inOrder = function(nodev = this.root){
    let arr = []
    function traverseNode(node = nodev){
      if(!node){
        return null
      }
      if(node.left){
        traverseNode(node.left)
      }
        arr.push(node.value)
      if(node.right){
        traverseNode(node.right)
      } 
// log(333)
    }
    traverseNode()
    return arr
  }

  this.findMin = function(){
    let node = this.root
    while(node.left){
      node = node.left
    }
    return node.value
  }

  this.findMax = function(){
    let node = this.root
    while(node.right){
      node = node.right
    }
    return node.value
  }

  this.find = function(value){
    let node = this.root
    if(node == null){
      return null
    }
    while(node.value != value){
      if(value < node.value){
        node = node.left
      }else if(value > node.value){
        node = node.right
      }
      if(!node){
        return null
      }
    }
    return node
  }

  this.isPresent = function(value){
    let node = this.root
    while(node){
      if(value == node.value){
        return true
      }
      if(value < node.value){
        node = node.left
      } else if(value > node.value){
        node = node.right
      }
    }
    return false
  }

  this.remove = function(value) {
    function removeNode(node, value){
      if(!node){
        return null
      }
      if(value == node.value){
// node has no children        
      if(!node.left && !node.right){
        // log(node.value)
          return null
        }
// node has no right children
      if(!node.right){
        return node.left
      }        
// node has no left children
      if(!node.left){
        return node.right
      }        
// node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        log(node.value, node.right.value)
        node.right = removeNode(node.right, tempNode.value);
        return node;
      }else{
        if(value < node.value){
         node.left = removeNode(node.left, value)
         return node
        }else if(value > node.value){
         node.right = removeNode(node.right, value)
         return node
        }
      }

    }
    this.root = removeNode(this.root, value)
  }


}

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

let bst = new BinarySearchTree()
bst.add(10);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(2);
bst.add(7);
bst.add(6);
bst.add(8);
bst.add(22);
bst.add(5);
bst.add(20);
bst.add(11);
bst.remove(4)

// bst.add(9)
// bst.add(8)
// bst.add(11)
// bst.add(12)
// bst.remove(11)
log(bst.inOrder())
displayTree(bst)
```

```
(function foo(node = this.root){
}.bind(this)());
```

```
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target = this.root;
    var parent = null;

    // find the target value and its parent
    (function findValue(node = this.root){
       if(value == node.value){
         target = node
         return
       }
       if(value < node.value){
         if(node){
           parent = node
           findValue(node.left)
         }else{
           return null
         }
       }
       if(value > node.value){
         parent = node
         findValue(node.right)
       }else{
         return null
       }
    }.bind(this)());
    // count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // case 1: target has no children
    if (children === 0) {
      if(target.value = value){
        if(target == this.root){
         this.root = null
         return 
        }
      if(parent.left == target){
         parent.left = null
//        log(value)
      }else{
        parent.right = null
      }  
      }
    }
    // case 2: target has one child, change code below this line
    if(children == 1){
      if(target == this.root){
        if(target.left){
          this.root = target.left
        }else{
          this.root = target.right
        }
        return
      }
      if(target == parent.left){
        parent.left = target.left
      } else {
        parent.right = target.right
      }   
    // log(parent.value, target.value, children)
    }
    // case 3: target has two child, change code below this line
    if(children == 2){

    }
  };

  this.add = function(value){
    let node = this.root
    if(this.root == null){
      this.root = new Node(value)
      return
    }
    function searchTree(node){
      if(value < node.value){
        if(!node.left){
          node.left = new Node(value)
        }else{
          searchTree(node.left)
        }
      }else if(value > node.value){
        if(!node.right){
          node.right = new Node(value)
        } else {
          searchNode(node.right)
        }
      }
    }
    searchTree(node)
  }

  this.inOrder = function(){
    let node = this.root
    if(!node){
      return null
    }
    let arr = []
    function traverse(node){
      if(node.left){
        traverse(node.left)
      }
      arr.push(node.value)
      if(node.right){
        traverse(node.right)
      }
    }
    traverse(node)
    return arr
  }
}

let log = console.log
let bst = new BinarySearchTree()
bst.add(10)
bst.add(9)
// bst.add(8)
bst.add(11)
bst.remove(10)
log(bst.inOrder())```

```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.kk = 0
  this.root = null;
  // change code below this line

  this.add = function(value){
    var nodeNew = new Node(value)
    var node = this.root
    var nodePrev = null
    while(node!=null){
      nodePrev = node
      if(value<node.value){
        node = node.left
      }else{
        node = node.right
      }
    }
      node = nodeNew
      if(nodePrev!=null){
    if(value<nodePrev.value){
      nodePrev.left = node
    }else{
      nodePrev.right = node
    }
      }else{
   this.root = nodeNew      
   }
  }

this.remove = function(val){
  if(this.root == null){
    return null
  }else if(this.root.left==null&&this.root.right==null){
    this.root = null
    return null
  }
  
  var arr1 = []
  var arr2 = []
  var arr3 = []
  var nodePrev = null
  var node2=null, nodePrev2=null
function traverseLeftNode(node){
  arr1.push(node.value)
  if(node.value == val){
    node2 = node
    nodePrev2 = nodePrev 
  }
  nodePrev = node
  if(node.left){
    traverseLeftNode(node.left)
  }
}
traverseLeftNode(this.root)
if(nodePrev2!=null){
  log(nodePrev2.value, node2.value)
  if(!node2){
    nodePrev2.left = null
  }else if(node2.right){
    node2.right.left = node2.left
    nodePrev2.left = node2.right
  }else{
    nodePrev2.left = node2.left?node2.left:null
  }
  return
}
else if(node2&&node2.value == this.root.value){
   log(node2.value)
this.root = node2.right ? node2.right : null
this.root.left = node2.left
// this.root = node2.left ? node2.left : null
// this.root.right = node2.right
return
}
function traverseRightNode(node){
  arr2.push(node.value)
  if(node.value == val){
    node2 = node
    nodePrev2 = nodePrev 
  }
  nodePrev = node
  if(node.right){
    traverseRightNode(node.right)
  }
}
traverseRightNode(this.root)
if(nodePrev2!=null){
//  log(11)
  if(!node2){
    nodePrev2.right = null
  }else if(node2.left){
    node2.right.left = node2.left
    nodePrev2.right = node2.right
  }else{
    nodePrev2.right = node2.right?node2.right:null
  }
  return
}
  return null
}
//  change code above this line
}

var bst = new BinarySearchTree()
bst.add(10)
bst.add(11)
bst.add(12)
bst.add(13)
// bst.add(25)
// bst.add(29)
bst.add(9)
bst.add(8)
var node = new Node(25)
bst.root.left.right = node
// bst.add(7)
// bst.add(6)

log(bst.remove(9))
displayTree(bst)
```

#### 37 Invert a Binary Tree
```
var log = console.log
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  
  // change code below this line
  this.inOrder = function(nodev = this.root){
  var res = []
  function traverseTree(node = nodev){
    if(!node){
      return null
    }
    if(node.left){
      traverseTree(node.left)
    }
    res.push(node.value)
    if(node.right){
      traverseTree(node.right)
    }
  }
    traverseTree()
  return res
}

this.invert = function(node = this.root){
  if(node){
    var tmp = node.right
    node.right = node.left
    node.left = tmp
    this.invert(node.left)
    this.invert(node.right)
  }
}
  // change code above this line
}

var bst = new BinarySearchTree()
var node = new Node(10)
bst.root = node
node = new Node(9)
bst.root.left = node
node = new Node(11)
bst.root.right = node

bst.invert()
log(bst.inOrder())
//displayTree(bst)
```




#### 38 Create a Trie Search Tree
[youtube Trie Data Structure - Beau teaches JavaScript](https://www.youtube.com/watch?v=7XmS8McW_1U)  
[codepen CodePen Home
Trie](https://codepen.io/beaucarnes/pen/mmBNBd?editors=0011)  
[]()  
[]()  
[]()  

```
```

##### алгоритм add
Принимает слово input  
располагает в Trie совокупность node из букв  
1. Если в input пустой - ставим признак this.end = true
1. Если нет ноды с ключом input[0], то создаем новую node
1. Если нода есть (else), то добавляем следующий символ


##### алгоритм print
возвращает массив слов words  
1. Создаем пустой массив words
1. Функция search
 1. Принимает node и string(для накопления)
 1. Если размер keys(Map) не ноль
 1. В for-e перебираем буквы
1. 

```
var log = console.log
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  this.root = new Node()
  // change code below this line

	this.add = function(input, node = this.root) {
    // log(input.length, input[0], node, node.keys.has(input[0]))
    if(!input.length){
      node.setEnd()
    }else if(!node.keys.has(input[0])){
      node.keys.set(input[0], new Node)
      this.add(input.substr(1), node.keys.get(input[0]))
    }else{
      this.add(input.substr(1), node.keys.get(input[0]))
    }
	};

	this.print = function() {
		let words = [];
		let search = function(node, string) {
      for(let a of node.keys.keys()){
        let s = string.concat(a)
        // log(s, string)
        search(node.keys.get(a), s)
      }
      if(node.isEnd()){
        words.push(string)
      }
				return;
		};
		search(this.root, new String());
		return words;
	};

  this.isWord = function(word){
    let res = false
   let node = this.root
   for(let i=0;i<word.length;i++){
     if(node.keys.has(word[i])){
       node = node.keys.get(word[i])
       if(node.isEnd()&& i==word.length-1){
         log(333, word[i])
         return true
       }
     } else {
       return false
     }
  }
    return false
  }
  // change code above this line
};

let trie = new Trie()
trie.add('ab')
trie.add('ac')

log(trie.isWord('ab'))

log(trie.print())
```

```
/* Trie Data Structure */

let Node = function() {
	this.keys = new Map();
	this.end = false;
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};

let Trie = function() {

	this.root = new Node();

	this.add = function(input, node = this.root) {
		if (input.length == 0) {
			node.setEnd();
			return;
		} else if (!node.keys.has(input[0])) {
			node.keys.set(input[0], new Node());
			return this.add(input.substr(1), node.keys.get(input[0]));
		} else {
			return this.add(input.substr(1), node.keys.get(input[0]));
		};
	};

	this.isWord = function(word) {
		let node = this.root;
		while (word.length > 1) {
			if (!node.keys.has(word[0])) {
				return false;
			} else {
				node = node.keys.get(word[0]);
				word = word.substr(1);
			};
		};
		return (node.keys.has(word) && node.keys.get(word).isEnd()) ? 
      true : false;
	};

	this.print = function() {
		let words = new Array();
		let search = function(node, string) {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), string.concat(letter));
				};
				if (node.isEnd()) {
					words.push(string);
				};
			} else {
				string.length > 0 ? words.push(string) : undefined;
				return;
			};
		};
		search(this.root, new String());
		return words.length > 0 ? words : mo;
	};

};

let myTrie = new Trie()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())
```

##### map
```
var map = new Map()
map.set('a','b')
log(map.get('a'))
map.forEach(function(x,i){
  log(i, x)
})
```

```
var log = console.log

var keys = new Map()
keys.set('a','b')
keys.set('c','d')
log(keys.size)
for(let letter of keys.keys()){
  log(letter, keys.get(letter))
}
var s = ''
for(let a of "abc"){
 s+=a
}
log(s)
log(keys.get('a'))
keys.forEach(function(x,i){
  log(i, x)
})
```

#### 39 Insert an Element into a Max Heap
[Heap Data Structure (max and min)- Beau teaches JavaScript](https://www.youtube.com/watch?v=dM_JHpfFITs)  
[Heaps](https://codepen.io/beaucarnes/pen/JNvENQ?editors=0010)  
[]()  
[]()  
[]()  
[]()  
```
```

##### Max Heap
- parent всегда старше
- одинаковые кучи:  

```
         12
	10         9
5     6       1
====================
         12
    9          10
6     5       1 

```


- Выводы:
 - без разницы, больше левый или правый потомок
 - без разницы, кому потомки принадлежат

```
=======================
         12
    9          10
14
[ null, 12, 9, 10, 14 ]
-----------------------
         12
    14         10
9
[ null, 12, 14, 10, 9 ]
-----------------------
         14
    12		   10
9
[ null, 14, 12, 10, 9 ]
-----------------------	
An element's left child: i * 2
An element's right child: i * 2 + 1
An element's parent: Math.floor( i / 2 )
```

##### Алгоритм insert
- в хвост дерева добавляется элемент
- проверяется больше ли он крайнего(своего) парента
- если больше, то парент меняется
- проверяется для этого же элемента, когда он стал парентом отношение с предыдущим парентом
- если больше, то с парентом меняются местами

```
let log = console.log
var MaxHeap = function() {
  let heap = [null]
  this.out = function(){
    return heap
  }
  // change code below this line
this.insert = function(num) {
heap.push(num)
let index = heap.length - 1
if(heap.length>2){
while(heap[index] > heap[Math.floor(index/2)] && index > 1){

{[heap[index], heap[Math.floor(index/2)]] = [heap[Math.floor(index/2)], heap[index]]}
index = Math.floor(index/2)
}
}
	};
this.print = function(){
  return heap
}
  // change code above this line
};

let maxHeap = new MaxHeap()
maxHeap.insert(9)
maxHeap.insert(10)
maxHeap.insert(12)
maxHeap.insert(14)
log(maxHeap.print())
```

```
```

##### функции для работы с деревом
```
//функции для работы с деревом
//getChildren(heap), printIndexes(getChildren(heap))
let log = console.log
let heap = []
heap = [null, 14, 12, 10, 9 ]

function getChildren(heap){
function getIndexChildren(heap){
let vheap = []
for(let i in heap){
  vheap.push(i+1)
}
let parents = [1]  
let childs = []
let indexes = [[1]]
let bBreak = false  
while(1){
  childs = []
  for(let i of parents){
    if(i*2 < vheap.length){
      childs.push(i*2)
    }else{
      bBreak = true
      break
    }
    if(i*2+1 < vheap.length){
      childs.push(i*2+1)
    }else{
      bBreak = true
      break
    }
    parents = childs.slice(0)
   }
   if(childs.length)
     indexes.push(childs)
  if(bBreak){
    break
  } 
}
// log(indexes)
return indexes
}
let indexes = getIndexChildren(heap)
let childrens = []
let arr = []  
for(let i of indexes){
  arr = []
  for(let j of i){
   arr.push(heap[j])
  }
  childrens.push(arr)
}
return childrens
}
log(getChildren(heap))

function printIndexes(indexes){
// 1                   
// 2         3         
// 4    5    6    7    
// 8 9 10 11 12 13 14 15    
function getSpace(n){
  let s = ""
  for(let i=0;i<n;i++){
    s += " "
  }
  return s
}
let s = ''
let k = 19
for(let i of indexes){
  for(let j of i){
    s += j + getSpace(k)
  }
  s += '\n'
  k = k/2-1
}
  log(s)
}

printIndexes(getChildren(heap))
```



#### 40 Remove an Element from a Max Heap
```
```


##### Алгоритм Max
```
добавил 14
         12
    11         10
14
         12
    14         10
11

         14
    12         10
11

---------------------------------
убрал 14
         14
    12         10
11

         12
    11         10 

* наверх ползет наибольшее из детей
```

##### Алгоритм remove() max
- Убирает старший элемент и его возвращает
- heap > 2 - нормальный случай
- heap - 2 - только убирается старший элемент
- heap - 1 - возвращает null, делать здесь нечего
- Запоминает старший элемент
- последний младший элемент на место старшего
- больший дитя на место родителя(старшего)
- это до тех пор пока не закончится ветка

```
let MaxHeap = function() {
	
	let heap = [null];
	
	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};

  this.remove = function(){
    if(heap.length > 2){
      // log(heap)
      let biggest = heap[1]
      heap[1] = heap[heap.length-1]
      heap.splice(heap.length-1)
      let index = 1
      let left = index*2
      let right = index*2+1
      while(heap[index] < heap[left] || heap[index] < heap[right]){
        if(heap[index] < heap[left]){
          {[heap[index],heap[left]] = [heap[left],heap[index]]}
        }else if(heap[index] < heap[right]){
          {[heap[index],heap[right]] = [heap[right],heap[index]]}
        }
      }
      return biggest
    }else if(heap.length == 2){
      return heap.splice(1)[0]
    }else {
      return null
    }
  }
};
let log = console.log
let maxHeap = new MaxHeap()
maxHeap.insert(12)
maxHeap.insert(10)
maxHeap.insert(9)
maxHeap.insert(14)
log(maxHeap.print())
log(maxHeap.remove())
log(maxHeap.print())
```

#### 41 Implement Heap Sort with a Min Heap
```
```


```
let log = console.log
/* Heaps */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2
// check if array is sorted
function isSorted(arr) {
  var check = i =>
    i == arr.length - 1 ? true : arr[i] > arr[i + 1] ? false : check(i + 1);
  return check(0);
}
// generate a randomly filled array
var array = new Array();
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return size > 1 ? createArray(size - 1) : undefined;
})(25);

var MinHeap = function() {
  // change code below this line
  let heap = [null];

  this.print = () => heap;

  this.insert = function(num){
    if(heap.length > 2){
     heap.push(num)
     let index = heap.length - 1
     while(heap[index] < heap[Math.floor(index/2)]){
        // log(heap)
     {[heap[index], heap[Math.floor(index/2)]] = [heap[Math.floor(index/2)], heap[index]]}
     index = Math.floor(index/2)
     }
    }else if(heap.length == 2){
     heap.push(num)
     if(heap[2] < heap[1]){
      [heap[1], heap[2]] = [heap[2], heap[1]]
     }
    }else{
     heap.push(num)
    } 
  }

  this.remove = function(){
    let smallest = heap[1]
   if(heap.length > 2){

			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};

    // log(heap)
    let index = 1
    let left = index * 2
    let right = index * 2 + 1
    while(heap[index] >= heap[left] || heap[index] >= heap[right]){
      if(heap[left] < heap[right]){
       {[heap[index], heap[left]] = [heap[left], heap[index]]}
        index = 2 * index
      }else {
       {[heap[index], heap[right]] = [heap[right], heap[index]]}
        index = 2 * index + 1
      }
        left = index * 2
        right = index * 2 + 1
      if(heap[left] == undefined || heap[right] == undefined){
        break 
      }
    }
    // log(heap)
    return smallest
   }else if(heap.length == 2){
     let smallest = heap[1]
     heap.splice(1)
     return smallest
   }else if(heap.lenth == 1){
     return null
   }
  }

	this.sort = function() {
		let result = new Array();
		while (heap.length > 1) {
      //log(heap.length)
			result.push(this.remove());
		};
		return result;
	};

  // change code above this line
};

let minHeap = new MinHeap()
for(let i of array){
	minHeap.insert(i)
}
log(minHeap.sort())  
log(minHeap.print())
```







#### 42 Adjacency List
```
var undirectedAdjList = {
  James: ["Jeff"],
  Jill: ["Jenny"],
  Jenny: ["Jill", "Jeff"],
  Jeff: ["Jenny", "James"]
};
```

#### 43 Adjacency Matrix
These five nodes have relationships between the first and fourth node, the first and third node, the third and fifth node, and the fourth and fifth node. All edge weights are one.

```
var adjMatUndirected = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0],
];
```

#### 44 Incidence Matrix
```
   1   -   2
     \   /
	   3
 1  1  0
 1	0  1  
 0  1  1 
```


```
1 | 0 1 1 1
2 | 1 1 0 0
3 | 1 0 0 1
4 | 0 0 1 0 
 
   2
  / \
 1 - 3
  \
   4 
```

These five nodes have the following relationships. The first edge is between the first and second node. The second edge is between the second and third node. The third edge is between the third and fifth node. The fourth edge is between the fourth and second node.

```
var incMatUndirected = [
[ 1, 0, 0, 0],
[ 1, 1, 0, 1],
[ 0, 1, 1, 0],
[ 0, 0, 0, 1],
[ 0, 0, 1, 0]
];
```

#### 45 Breadth-First Search
[]()  
[PL Data Structures and Algorithms - Beau teaches JavaScript](https://www.youtube.com/watch?v=t2CEgPsws3U&list=PLWKjhJtqVAbkso-IbgiiP48n-O-JQA9PJ&index=13)  
```
    0  1  2  3
 0 [0, 1, 0, 0],
 1 [1, 0, 1, 0],
 2 [0, 1, 0, 1],
 3 [0, 0, 1, 0]

       3
       2
       1
       0
{ '0': 3, '1': 2, '2': 1, '3': 0 }       
```

```
0
1      2
3   4

   0 1 2 3 4
0  0 1 1 0 0
1  1 0 0 1 1
2  1 0 0 0 0
3  0 1 0 0 0
4  0 1 0 0 0

{ '0': 0, '1': 1, '2': 1, '3': 2 , '4': 2 } 
```

##### алгоритм
```
{ '0': Infinity, '1': Infinity, '2': Infinity, '3': Infinity }
{ '0': Infinity, '1': Infinity, '2': Infinity, '3': 0 }
 3 [0, 0, 1, 0]
 2
 2 [0, 1(Infinity), 0, 1(0)],
{ '0': Infinity, '1': Infinity, '2': 0+1, '3': 0 }
 1
 1 [1, 0, 1(1), 0(0)],
{ '0': Infinity, '1': 1+1, '2': 1, '3': 0 }
 0
 0 [0, 1(2), 0(1), 0(0)],
{ '0': 2+1, '1': 2, '2': 1, '3': 0 }
```

```
nodesLen = { '0': Infinity, '1': Infinity, '2': Infinity, '3': 0 }
queue = [root]
while
current = 3(root)
curConnected = [[0, 0, 1, 0]]
neighborIdx = [2]
for neighborIdx.length
if nodesLen[2] == Infinity
 nodesLen[2] = nodesLen[3]
 queue.push(2)


словами
объект с длинами заполняем инфинити, начальный элемент 0 
nodesLen = { '0': Infinity, '1': Infinity, '2': Infinity, '3': 0 }
создаем очередь, где начальный элемент root
queue = [root]
Запускаем вайл, где будем перебирать ноды с их соседями.
Если соседний нод не инфинити, значит мы с него пришли, он не нужен.

while

из очереди берем текущую ноду(уже с расстоянием)
делаем массив из подключенных к ней нод
в форе проходимся по ним
и записываем сумму длины текущей ноды + 1
в очередь добавляем соответствующую ноду
все

current = 3(root)
curConnected = [[0, 0, 1, 0]]
neighborIdx = [2]
for neighborIdx.length
if nodesLen[2] == Infinity
 nodesLen[2] = nodesLen[3]
 queue.push(2)
```

```
let log = console.log
function bfs(graph, root) {
  // Distance object returned
  var nodesLen = {};
  for(let i in graph){
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0
  let queue = [root]
  let current
  while(queue.length){
    current = queue.shift()
    let nodeEdges = graph[current]
    let curIndexes = []
    let index = 0
    // nodeEdges[3] = 1   //////////////////////////
    while(nodeEdges.indexOf(1, index) != -1){
      index = nodeEdges.indexOf(1, index)
      if(nodesLen[index] == Infinity){
       curIndexes.push(index)
      }
      index++
    }
    for(let i of curIndexes){
      nodesLen[i] = nodesLen[current] + 1
      queue.push(i)
    }
  } 
  return nodesLen;
};

var exBFSGraph = []
exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(bfs(exBFSGraph, 3));
exBFSGraph = [
  [0, 1, 1, 0, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0]
];
console.log(bfs(exBFSGraph, 0));
// { '0': 3, '1': 2, '2': 1, '3': 0 }
// { '0': 0, '1': 1, '2': 1, '3': 2, '4': 2 }
```



#### 46 Depth-First Search  
[Depth First Search Algorithm | Graph Theory](https://www.youtube.com/watch?v=7fujbpJ0LB4)  
[]()  
[]()  
[]()  
```
```
#### алгоритм
- Уничтожается из стека крайний элемент
- идет возврат до root-a
- если все nodes пустые почистить steck
- длина всех nodes


```
==========================
   0 1 2 3 4
0  0 1 1 0 0
1  1 0 0 1 1
2  1 0 0 0 0
3  0 1 0 0 0
4  0 1 0 0 0

{ '0': 0, '1': 1, '2': 1, '3': 2 , '4': 2 } 
==========================
  [0, 1, 1, 0, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0]

   0 1 2 3 4
0  0 1 1 0 0
1  1 0 0 1 1
2  1 0 0 0 0
3  0 1 0 0 0
4  0 1 0 0 0

{ '0': 0, '1': Infinity, '2': Infinity, '3': Infinity , '4': Infinity }

stack = [root]
  [0, 1, 1, 0, 0],
1
  [1, 0, 0, 1, 1],
3
  [0, 1, 0, 0, 0],
1
  [1, 0, 0, 1, 1],
4
  [0, 1, 0, 0, 0]
1
0
  [0, 1, 1, 0, 0],
2
  [1, 0, 0, 0, 0],
```





##### Лексический анализ статьи про глубокий поиск.
- кроме широкого поиска, есть еще и глубокий
- чем он отличается от широкого поиска вообще
- чем он отличается от широкого поиска в частности
- полюбуйтесь на анимацию
- описание анимации
- описание алгоритма. С помощью чего. Стек.
- что этот алгоритм выдает. Что необходимо делать, когда этот алгоритм реализуется


- задача
- написать функцию
- что принимает функция
- уточнение принимаемых значений
- что функция должна возвращать


```
let log = console.log

function getPath(arrIn){
  let arrOut = []
  let index = 0
  while(arrIn.indexOf(1, index) != -1){
    index = arrIn.indexOf(1, index)
    arrOut.push(index)
    index++
  }
  return arrOut
}

function dfs(graph, root) {
  let path = graph[root]

  let stack = [root]
  let nodes = []
  for(let i in graph){
    nodes.push(Infinity)
  }
  // log(nodes)

  let current
  let nodesCurrent = []
  let nodesOut
  let k = 6
  while(stack.length){
    current = stack[stack.length-1]
    nodesCurrent.push(current)
    let pathOut
    if(nodes[current] == Infinity){
      pathOut = getPath(graph[current])
      let nodePrev = stack[stack.length-2]
      pathOut = pathOut.filter(i => i!=nodePrev)
      nodes[current] = pathOut
    }else{
      pathOut = nodes[current]
    }
    //log(stack)
    //log(nodes)
    if(pathOut.length > 0){
      stack.push(pathOut.shift())
      nodes[current] = pathOut
    }else{
      stack.pop()
      let c = 0
      for(let i of nodes){
        if(i != Infinity){
         c += i.length
        }
      }
      if(!c){
        stack = []
      }
      // log(c, ...nodes)
    }
  //  log(pathOut, nodes)
  }
  if(nodesCurrent.length > 2){
    nodesCurrent.shift()
  }
  return nodesCurrent
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
exDFSGraph = [
  [0, 1, 1, 0, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0]
];
exDFSGraph = [
[0, 1, 0, 0], 
[1, 0, 1, 0], 
[0, 1, 0, 1], 
[0, 0, 1, 0]
];
exDFSGraph = [
  [0, 1, 0, 0], 
  [1, 0, 1, 0], 
  [0, 1, 0, 0], 
  [0, 0, 0, 0]
  ]
console.log(dfs(exDFSGraph, 3));
```









[freecodecamp](https://www.freecodecamp.org/)  
[ditto-cp](https://ditto-cp.sourceforge.io/)  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  

