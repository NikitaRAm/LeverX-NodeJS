//Task1
function fibonacci(max) {
  let result = [0, 1],
      val;
  for (let i = 1; result[i] < max; i++) {
      val = result[i] + result[i - 1];
      val < max && result.push(val);
  }
  return result
}
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
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//Task3
function caseInsensitiveSearch(str1, str2) {
  let search_str = new RegExp(str2, "ig");
  let result = str1.search(search_str);
  return (result > 0) ? "Matched" : "Not Matched";  
}

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

console.log(toNumericPairs(obj));

//Task6
function uncamelize(str,separator) {  
  if (typeof (separator) == "undefined") {
    separator = " ";
}
  var str = str.replace(/[A-Z]/g, function (letter) {
    return separator + letter.toLowerCase();
  });
  return str.replace(/^_/, "");
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_')); 

//Task7
function countSubstring(string,subString){
  let count = (string.match(new RegExp(subString, 'gi')) || []).length;
  return count
}

console.log(countSubstring("Function to get a copy of the object where the keyshave become the values and the values the key","the"));
