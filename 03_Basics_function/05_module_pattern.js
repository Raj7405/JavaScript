// the module pattern is not limited to Immediately Invoked Function Expressions (IIFEs). While IIFEs are commonly used with the module pattern to create encapsulated modules, you can use other approaches as well. The key concept behind the module pattern is encapsulation and exposing selected functionalities, regardless of how you achieve it.

//1.Using Object Literals:
var myModule = {
    privateVar: 'This is private',
    privateFunction: function() {
      console.log(this.privateVar);
    },
    publicFunction: function() {
      this.privateFunction();
    }
  };
  
  myModule.publicFunction();

  //2.Using Constructors and Closures:
  function MyModule() {
    var privateVar = 'This is private';
  
    function privateFunction() {
      console.log(privateVar);
    }
  
    this.publicFunction = function() {
      privateFunction();
    };
  }
  
  var myModule = new MyModule();
  myModule.publicFunction();

  
  //3.Revealing Module Pattern:
  var myModule = (function() {
    var privateVar = 'This is private';
  
    function privateFunction() {
      console.log(privateVar);
    }
  
    function publicFunction() {
      privateFunction();
    }
  
    return {
      publicFunction: publicFunction
    };
  })();
  
  myModule.publicFunction();
  