//Task1
function fibonacci(max) {
    var result = [0, 1],
        val;
    for (var i = 1; result[i] < max; i++) {
        val = result[i] + result[i - 1]
        val < max && result.push(val);
    }
    return result
}
console.log(fibonacci(8));
console.log(fibonacci(610));

//Task2
function difference(arr1,arr2) {
  
    var a1= flatten(arr1,true);
    var a2= flatten(arr2,true);
    
   var a=[], diff=[];
    for(var i=0;i< a1.length;i++)
      a[a1[i]]=false;
    for(i=0;i< a2.length;i++)
    if(a[a2[i]]===true) 
       { delete a[a2[i]];}
      else a[a2[i]]=true;
    for(var k in a)
      diff.push(k);
    return diff;   
    }
  
  var flatten = function(a, shallow,r){
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
  var result = str1.search(search_str);

  return (result > 0) ? "Matched" : "Not Matched";  
}

console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess')); 
