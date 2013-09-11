// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var Engine, Parser, Scanner, iced, __iced_k, __iced_k_noop;

  iced = require('iced-coffee-script').iced;
  __iced_k = __iced_k_noop = function() {};

  Scanner = require('./scanner').Scanner;

  Parser = require('./parser').Parser;

  exports.Engine = Engine = (function() {
    function Engine(filename) {
      this.filename = filename;
      this.scanner = new Scanner(this.filename);
      this.parser = new Parser(this.scanner);
    }

    Engine.prototype.run = function(cb) {
      var err, records, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/engine.iced",
          funcname: "Engine.run"
        });
        _this.scanner.open(__iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              return err = arguments[0];
            };
          })(),
          lineno: 13
        }));
        __iced_deferrals._fulfill();
      })(function() {
        (function(__iced_k) {
          if (typeof err === "undefined" || err === null) {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "src/engine.iced",
                funcname: "Engine.run"
              });
              _this.parser.parse(__iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return records = arguments[0];
                  };
                })(),
                lineno: 14
              }));
              __iced_deferrals._fulfill();
            })(__iced_k);
          } else {
            return __iced_k();
          }
        })(function() {
          return cb(err, records);
        });
      });
    };

    return Engine;

  })();

}).call(this);