module.exports = function (options) {
  options = options || {};
  var robotName = options.robot || "alpha";
  function sayHello(name) {
    console.log('Hello ' + name + ' from ' + robotName + '!');
  }
  return {
    name: 'myModule',
    version: '0.1.0',
    
    //public API
    sayHello: sayHello,
  };
};