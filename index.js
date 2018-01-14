 function justInvoke(fn){
   return fn();
 }
 function setThisWithCall(fn, name, age){
   return fn(18).call(name)
 }
