//Named IIFE

(function bolo(name){
    console.log(`ha bol bhai! ${name} !!`)
})("rajendra");

//NOTE:- Need to terminate IIFE if u wanr to use multiple IIFEs


((place) => {
    console.log(`chal na bhai vudar ${place} me jara!!`)
})("garden")

//1.Encapsulation and Scope Isolation:IFEs help in creating a private scope for variables and functions, preventing them from polluting the global scope. This is particularly useful in large codebases or when working with multiple scripts to avoid naming conflicts.

// (function(value) {
//     // Private variables and functions
//     var counter = value;
  
//     function incrementCounter() {
//       counter++;
//     }
  
//     // Expose only what's needed
//     window.Map = {
//       increment: incrementCounter
//     };
//   })();
  
//   myApp.increment();

//2.Module Pattern: IIFEs are often used in conjunction with the module pattern to create modules with private and public members. This pattern is useful for organizing code into smaller, reusable components.

  var myModule = (function() {
    var privateVar = 'This is private';
  
    function privateFunction() {
      console.log(privateVar);
    }
  
    return {
      publicFunction: function() {
        privateFunction();
      }
    };
  })();
  
  myModule.publicFunction();
  
  