//Task1
function fibonacci(max) {
  let result = [0,1]; 
  
  if (max <= 0){
    result = []
  }

  for (let i = 1; result[i] < max; i++) {
    const val = result[i] + result[i - 1];

    if(val >= max){
      break;
    } else {
     result.push(val);
    }
  }
  return result
}
console.log('Task1');
console.log(fibonacci(0));
console.log(fibonacci(8));
console.log(fibonacci(610));

//Task2
function difference(arr1,arr2) {

let a1= flatten(arr1,true);
let a2= flatten(arr2,true);
  
let a=[], diff=[];
for(let i=0;i< a1.length;i++)
    a[a1[i]]=false;
  for(i=0;i< a2.length;i++)
  if(a[a2[i]]===true) 
     { delete a[a2[i]];}
    else a[a2[i]]=true;
  for(let k in a)
    diff.push(k);
  return diff;   
  }

let flatten = function(a, shallow,r){
  if(!r){ r = [];}
if (shallow) {
  return r.concat.apply(r,a);
  }  
   for(i=0; i< a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
}
console.log('Task2');
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//Task3 
function caseInsensitiveSearch(str1, str2) {
  return search_str = new RegExp(str2,'ig').test(str1) ? "Matched" : "Not Matched";  
}

console.log('Task3');
console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess')); 

//Task4
let user = {
  name: "Nikita",
  lastName: "Romanovich",
  isProgrammer: true
}

function transformObject() {

  let keysOld = Object.keys(user);
  let valuesOld = Object.values(user);
  let copyObject = {};

  for (let i = 0; i < valuesOld.length; i++) {
    let value = valuesOld[i];
    copyObject[value] = keysOld[i];
  }
  return copyObject;
}
console.log('Task4');
console.log(transformObject());

//Task5
const obj = {
  "1": 323,
  "2": 100,
  "3": 422,
}

const toNumericPairs = input => {
  const entries = Object.entries(input);
  return entries.map(entry => Object.assign(entry, { 0: +entry[0] }));
}

console.log('Task5');
console.log(toNumericPairs(obj));

//Task6 
function uncamelize(source,separator) {  
  if (typeof (separator) == "undefined") {
    separator = " ";
  }
 let str = source.replace(/[A-Z]/g, letter => {
    return separator + letter.toLowerCase();
  });
  return str.replace(/^_/, "");
}

console.log('Task6');
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_')); 

//Task7
function countSubstring(string,subString){
  return string.match(new RegExp(subString, 'gi')) ? subString.length : 0
}
console.log('Task7');
console.log("Count subString: " + countSubstring("Function to get a copy of the object where the keyshave become the values","the"));

//Task8
function flatAndSortArray(array) {
  let newArr = array.reduce((accumulator, currentValue) =>
  Array.isArray(currentValue) ? accumulator.concat(flatAndSortArray(currentValue)) : accumulator.concat(currentValue), []);
  newArr.sort((a,b) => a - b)
  return newArr;
}
console.log('Task8');
console.log(flatAndSortArray([1, 2, 1000, 300, [400, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6]]))
