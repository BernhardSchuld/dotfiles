
/*
Requires https://github.com/FriendsOfPHP/phpcbf
 */

(function() {
  "use strict";
  var Beautifier, PHPCBF,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Beautifier = require('./beautifier');

  module.exports = PHPCBF = (function(_super) {
    __extends(PHPCBF, _super);

    function PHPCBF() {
      return PHPCBF.__super__.constructor.apply(this, arguments);
    }

    PHPCBF.prototype.name = "PHPCBF";

    PHPCBF.prototype.link = "http://php.net/manual/en/install.php";

    PHPCBF.prototype.options = {
      _: {
        standard: [
          "standard", function(standard) {
            if (standard) {
              return standard;
            } else {
              return "PEAR";
            }
          }
        ]
      },
      PHP: true
    };

    PHPCBF.prototype.beautify = function(text, language, options) {
      var isWin, tempFile;
      this.debug('phpcbf', options);
      isWin = this.isWindows;
      if (isWin) {
        return this.Promise.all([options.phpcbf_path ? this.which(options.phpcbf_path) : void 0, this.which('phpcbf')]).then((function(_this) {
          return function(paths) {
            var exec, isExec, path, phpcbfPath, tempFile, _;
            _this.debug('phpcbf paths', paths);
            _ = require('lodash');
            path = require('path');
            phpcbfPath = _.find(paths, function(p) {
              return p && path.isAbsolute(p);
            });
            _this.verbose('phpcbfPath', phpcbfPath);
            _this.debug('phpcbfPath', phpcbfPath, paths);
            if (phpcbfPath != null) {
              isExec = path.extname(phpcbfPath) !== '';
              exec = isExec ? phpcbfPath : "php";
              return _this.run(exec, [!isExec ? phpcbfPath : void 0, "--no-patch", options.standard ? "--standard=" + options.standard : void 0, tempFile = _this.tempFile("temp", text)], {
                ignoreReturnCode: true,
                help: {
                  link: "http://php.net/manual/en/install.php"
                },
                onStdin: function(stdin) {
                  return stdin.end();
                }
              }).then(function() {
                return _this.readFile(tempFile);
              });
            } else {
              _this.verbose('phpcbf not found!');
              return _this.Promise.reject(_this.commandNotFoundError('phpcbf', {
                link: "https://github.com/squizlabs/PHP_CodeSniffer",
                program: "phpcbf.phar",
                pathOption: "PHPCBF Path"
              }));
            }
          };
        })(this));
      } else {
        return this.run("phpcbf", ["--no-patch", options.standard ? "--standard=" + options.standard : void 0, tempFile = this.tempFile("temp", text)], {
          ignoreReturnCode: true,
          help: {
            link: "https://github.com/squizlabs/PHP_CodeSniffer"
          },
          onStdin: function(stdin) {
            return stdin.end();
          }
        }).then((function(_this) {
          return function() {
            return _this.readFile(tempFile);
          };
        })(this));
      }
    };

    return PHPCBF;

  })(Beautifier);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL2FybmVzY2hyZXVkZXIvLmRvdGZpbGVzL2F0b20vYXRvbS5zeW1saW5rL3BhY2thZ2VzL2F0b20tYmVhdXRpZnkvc3JjL2JlYXV0aWZpZXJzL3BocGNiZi5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBOztHQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUEsWUFKQSxDQUFBO0FBQUEsTUFBQSxrQkFBQTtJQUFBO21TQUFBOztBQUFBLEVBS0EsVUFBQSxHQUFhLE9BQUEsQ0FBUSxjQUFSLENBTGIsQ0FBQTs7QUFBQSxFQU9BLE1BQU0sQ0FBQyxPQUFQLEdBQXVCO0FBQ3JCLDZCQUFBLENBQUE7Ozs7S0FBQTs7QUFBQSxxQkFBQSxJQUFBLEdBQU0sUUFBTixDQUFBOztBQUFBLHFCQUNBLElBQUEsR0FBTSxzQ0FETixDQUFBOztBQUFBLHFCQUdBLE9BQUEsR0FBUztBQUFBLE1BQ1AsQ0FBQSxFQUNFO0FBQUEsUUFBQSxRQUFBLEVBQVU7VUFBQyxVQUFELEVBQWEsU0FBQyxRQUFELEdBQUE7QUFDckIsWUFBQSxJQUFJLFFBQUo7cUJBQ0UsU0FERjthQUFBLE1BQUE7cUJBQ2dCLE9BRGhCO2FBRHFCO1VBQUEsQ0FBYjtTQUFWO09BRks7QUFBQSxNQU1QLEdBQUEsRUFBSyxJQU5FO0tBSFQsQ0FBQTs7QUFBQSxxQkFZQSxRQUFBLEdBQVUsU0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixPQUFqQixHQUFBO0FBQ1IsVUFBQSxlQUFBO0FBQUEsTUFBQSxJQUFDLENBQUEsS0FBRCxDQUFPLFFBQVAsRUFBaUIsT0FBakIsQ0FBQSxDQUFBO0FBQUEsTUFFQSxLQUFBLEdBQVEsSUFBQyxDQUFBLFNBRlQsQ0FBQTtBQUdBLE1BQUEsSUFBRyxLQUFIO2VBRUUsSUFBQyxDQUFBLE9BQU8sQ0FBQyxHQUFULENBQWEsQ0FDb0IsT0FBTyxDQUFD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

//# sourceURL=/Users/arneschreuder/.dotfiles/atom/atom.symlink/packages/atom-beautify/src/beautifiers/phpcbf.coffee