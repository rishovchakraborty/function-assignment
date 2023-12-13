function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
      
        return func(...args);
      } else {
       
        return function (...nextArgs) {
          return curried(...args, ...nextArgs);
        };
      }
    };
  }
  
 
  function addTwoNumbers(x, y) {
    return x + y;
  }
  
  const curriedAdd = curry(addTwoNumbers);
  
  
  const result1 = curriedAdd(5)(3);
  console.log(result1); 
  
  const result2 = curriedAdd(5, 3); 
  console.log(result2); 
  