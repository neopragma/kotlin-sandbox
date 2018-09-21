if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'greeter'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'greeter'.");
}
var greeter = function (_, Kotlin) {
  'use strict';

  alert('In the greeter function');

  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Greeter(name) {
    this.name = name;
  }
  Greeter.prototype.greet = function () {
    println('Hello, ' + this.name + '!');
  };
  Greeter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Greeter',
    interfaces: []
  };
  _.Greeter = Greeter;
  Kotlin.defineModule('greeter', _);

  alert('just before the return statement');

  return _;
}

greeter();
alert('after closing curly');

(typeof greeter === 'undefined' ? {} : greeter, kotlin);
