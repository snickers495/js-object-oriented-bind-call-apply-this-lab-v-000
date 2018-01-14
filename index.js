 function justInvoke(fn){
   return fn();
 }
 function setThisWithCall(fn, name, age){
   let callBack = fn(age)
   return callBack.call(name)
 }
