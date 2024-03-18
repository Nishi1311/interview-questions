//"use strict";
{/*//polyfill of call ,apply and bind
const obj={
    name:'nishi',
    age:24,
    profession:'engineer'
}
function info(location,city){
    console.log( `i am ${this.name},${this.age}years old ${this.profession} who lives in ${location},${city}`)
}

//call


Function.prototype.mycall=function(objj,...args){
    objj.fn=this;
    return objj.fn(...args)
}
info.mycall(obj,'whitefield','Bangalore')
//apply
Function.prototype.myapply=function(objj,args){
    objj.fn=this;
   return objj.fn(...args)
}
info.myapply(obj,['whitefield','Bangalore'])
//bind
Function.prototype.mybind = function(objj, ...args) {
    const objjj = this;
    return function(...innerArgs) {
        return objjj.mycall(objj, ...args, ...innerArgs);
    }
}
var ab=info.mybind(obj,'whitefield','Bangalore')
ab()

//polyfill of map ,filter and reduce
const arr=[1,2,3,4,5]
//callback function for map
var cbmap=function(x){
    return x *2
}
//callback function for filter
var cbfilter=function(x){
    if(x>3){
    return x
}
}
//callback function for reduce
var cbreduce=function(x,acc){
    return acc + x
}
//map without using prototype
function mymap(cb,arr55){
    let arr33=[]
    for(i=0;i<arr55.length;i++){
        arr33.push(cb(arr55[i]))
    }
    return arr33
}




var abb=mymap(cbmap,arr) 
console.log(abb)

//filter without using prototype
function myfiter(cb,arr66){
    let arr44=[]
    for(i=0;i<arr66.length;i++){
        if(cb(arr66[i])){
            arr44.push(cb(arr66[i])) 

        }
      
    }
    return arr44
}



var abc= myfiter(cbfilter,arr) 
console.log(abc)
//reduce without using prototype
function myreduce(cb,arr77,acc){
    let ac=acc
    for(i=0;i<arr77.length;i++){
       ac=cb(arr77[i],ac)

        }
      return ac
    }




var abcd= myreduce(cbreduce,arr,0) 
console.log(abcd)
//map with using prototype
Array.prototype.mymapp=function(cb){
    let arr99=[]
    for(i=0;i<this.length;i++){
        arr99.push(cb(this[i]))
    }
    return arr99
    }




var abcd= arr.mymapp(cbmap) 
console.log(abcd)
//filter with using prototype
Array.prototype.myfiter=function(cb){
    let arr1113=[]
    for(i=0;i<this.length;i++){
        if(cb(this[i])){
            arr1113.push(cb(this[i])) 

        }
    }
    return arr1113
    }




var abcde= arr.myfiter(cbfilter) 
console.log(abcde)
//reduce with using prototype
Array.prototype.myreduce=function(cb,acc){
   let aa=acc
    for(i=0;i<this.length;i++){
       
           
            aa=cb(this[i],aa)

        }
        return aa
    }
    





var abcdef= arr.myreduce(cbreduce,0) 
console.log(abcdef)

//throttling

let i=1
function printi(){
    console.log(i++)
}function Debounce(cb,delay){
    let timer;
    return function(){
        let context=this;
        let args=arguments
        clearTimeout(timer)
        timer=setTimeout(()=>{
cb.apply(context,args)
        },delay)

    }

}
//let betterfunction = Debounce(printi, 1000);




function throttle(fun,delay){
    let flag=true;
    return function(){
        let context=this;
        let args=arguments;
        if(flag){
            fun.apply(context,args)
            flag=false
            setTimeout(()=>{
                flag=true
                        },delay)

        }

    }
}
let betterfunction = throttle(printi, 1000);
//reverse string
let abc='my name is nishi priya'

console.log(abc.split('').reverse().join(''))
//reverse number
let abcc=1234566556

console.log(abcc.toString().split('').reverse().join(''))
//remove duplicate from array
let arr=['khjhj','t','t','u',888,888,'khjhj',7,4]
let cc=new Set(arr)
let ccg=Array.from(cc)

console.log(ccg)



// Using reduce to create an object with frequency of each element
const arr1 = [6, 6, 7, 8, 9, 9, 9, 4, 5, 7, 8, 9];
const data=arr1.reduce((acc,curr)=>{
    acc[curr]=(acc[curr] || 0)+1
    return acc

},{})
console.log(data)
//count vowel
const inputString = "Hello World";
function countVowel(str){
    let vowelregex=/[aeiou]/gi
    let test=str.match(vowelregex)
    return test ? test.length : 0;
}

let result=countVowel(inputString)
console.log(result)
//count consonant
const input = "Hello World";
function countConsonant(str){
    let consonantregex=/[bcdfghjklmnpqrstvwxyz]/gi
    let test=str.match(consonantregex)
    return test ?  test.length : 0;
}

let result22=countConsonant(input)
console.log(result22)
//code for finding missing number from array(if there is only one missing number)
const numbers = [0, 1, 2, 4, 5];

function findMissingNumber(arr) {
    let n=arr[arr.length-1]
      let sum = 0;
      let sum1=0
     
      for (let i = 0; i <=n; i++) {
        sum += i;
    }
    for (let i = 0; i < arr.length; i++) {
      sum1= sum1 +arr[i]
    }
      
    
    
      return sum-sum1;
    }
    
    
    const missingNumber = findMissingNumber(numbers);
    console.log("Missing number:", missingNumber);
    //code for finding missing number from array(if there is multiple missing number)
    const arr11=[7,8,5]
    let n=arr11.max()
    console.log(n)

//call apply bind

//let abc=10;



console.log(1+'2')//12
console.log([...'nishi'])// n i s h i
let obj1={}
let obj2={}
console.log(obj1==obj2)//false
console.log(obj1===obj2)//false
//can we iterate over string====================================yes
let str = "Hello";

for (let i=0;i<str.length; i++) {
    console.log(str[i]); // Output each character of the string
}

let arr=[2,4,6]
console.log(typeof(obj1))//object
console.log(typeof(arr))//object
console.log(typeof(null))//object
console.log(typeof(undefined))//undefined
//closure
function a(){
    let b=10;
   return function c(){
        console.log(b++)
        
    
    
    }


}
let cccc=a()
cccc()
cccc()
cccc()
//benefits of closure
Closures enable the creation of private variables and functions within the scope
of an outer function. This means that variables declared within the outer function
are not accessible from outside the function scope, but inner functions (nested within the outer function)
have access to these variables. This allows for data hiding and prevents external manipulation of data,
promoting better encapsulation and data privacy.*/}
{/*Closures enable functions to maintain and manage their own internal state.
 Since inner functions have access to the variables of their outer functions, 
they can retain references to these variables even after the outer function has finished executing. 
This allows functions to remember and update their state across multiple invocations.*/}
//disvantage of closure
{/*the variable declared inside a closure are not garbage collected and too many closures can slow down your application*/}
//uses of closure
//in callback function
 {/*here's an example of closures in a callback function in JavaScript:


function greet(name) {
    console.log('Hello, ' + name + '!');

    // Inner function serving as a callback
    function sayGoodbye() {
        console.log('Goodbye, ' + name + '!');
    }

    // Returning the inner function
    return sayGoodbye;
}

// Calling the greet function
const goodbye = greet('Alice');

// Invoking the returned callback function
goodbye(); // Output: Goodbye, Alice!
//in memoization

//reverse string without using any inbuilt function
let str1 = "Hello nishi";
let str11=''

for (let i=str1.length-1;i>=0; i--) {
str11=str11 +str1[i]
  
}
console.log(str11)
//reverse number without using any inbuilt function
let num = 676878667;
let num1=num.toString()
let num2='';

for (let i=num1.length-1;i>=0; i--) {
num2=num2+num1[i]
  
}
let num3=parseInt(num2)
console.log(num3)
//find max no in array without using any inbuit function
let arry=[4,5,2,5,0,6,9,12];
function findmax(arry){
let max=arry[arry.length-2]
for (let i=0;i<=arry.length-1; i++) {
    

if(arry[i]>=max){
    
    max=arry[i]
   
}
}
return max
  
}
const fff=findmax(arry)
console.log(fff)
//find min no in array without using any inbuit function
let arry7=[4,5,2,56,9,12];
function findmin(arry7){
let min=arry7[arry7.length-2]
for (let i=0;i<=arry7.length-1; i++) {
    

if(arry7[i]<=min){
    
    min=arry7[i]
   
}
}
return min
  
}
const ffff=findmin(arry7)
console.log(ffff)
//sort array without using any inbuit function
let arrrr=[7,8,3,4,5,9]

function sortInAscen(arrrr){
    for(let i=1;i<=arrrr.length-1;i++){
        let temp=arrrr[i]
        let j=i-1
        while(j>=0 && arrrr[j]>temp){
            console.log('hi')
            arrrr[j+1]=arrrr[j]
            j--
        }
        arrrr[j+1]=temp
    }
}
sortInAscen(arrrr)
console.log(arrrr)

//find missing no in array without using any inbuit function
let sum=0
let sum1=0
let n=arrrr[arrrr.length-1]
for(let i=0;i<=arrrr.length-1;i++){
    sum=sum +arrrr[i]
    
    }
for(let i=arrrr[0];i<=n;i++){
        sum1=sum1 + i;
        
        }
  
    console.log(sum1-sum)
    //fetch('https://jsonplaceholder.typicode.cm/posts').then((response)=>console.log(response.json())).catch((error)=>console.log(error))
   


    let aaaaa=[9,6,7,4,8]
    aaaaa.sort((a,b)=>{return a-b})
    console.log(aaaaa)

    let aaaaaa=[[9,6],[7,4],[8,2]]
    aaaaaa.sort((a,b)=>{return a[1]-b[1]})
    console.log(aaaaaa)
    let arr = [[9,6],[7,4],[8,2]];

arr.sort((a, b) => a[1] - b[1]);

console.log(arr);
let arr1 = [[9,6],[7,4],[8,2]];

arr1.sort((a, b) => a[0] - b[0]);

console.log(arr1);
let arr2 = [[9,6],[7,4],[8,2]];

arr2.sort((a, b) => a[2] - b[2]);

console.log(arr2);

//promise.all->wait for all promise to get resolved and get data of each resolved promise in the form of array like [val1,val2,val3,etc] 
but if as soon as any first promise get rejected it will give arror without taking care of any other promise whether they are resolved or rejected.
//promise.allSettled->wait for all promise to get settled  and get data of each settled promise in the form of array let's have one example[val1,error,val3,etc] 
/promise.race->return result of first settled promise whether it is resolved or rejected let's have one example val1 or error
//promise.any-> wait for first resolved but if all fails then will get aggregated error




    











