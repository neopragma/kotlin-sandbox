if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'jsgreeter'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'jsgreeter'.");
}
var jsgreeter = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('Hello JavaScript!');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('jsgreeter', _);
  return _;
}(typeof jsgreeter === 'undefined' ? {} : jsgreeter, kotlin);
