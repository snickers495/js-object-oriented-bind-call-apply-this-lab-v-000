 function justInvoke(fn){
   return fn();
 }
 function setThisWithCall(fn, name, age){
   return fn(age).call(name)
 }
