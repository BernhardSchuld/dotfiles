(function() {
  var defaultIndentChar, defaultIndentSize, defaultIndentWithTabs, scope, softTabs, tabLength, _ref, _ref1;

  scope = ['source.css'];

  tabLength = (_ref = typeof atom !== "undefined" && atom !== null ? atom.config.get('editor.tabLength', {
    scope: scope
  }) : void 0) != null ? _ref : 4;

  softTabs = (_ref1 = typeof atom !== "undefined" && atom !== null ? atom.config.get('editor.softTabs', {
    scope: scope
  }) : void 0) != null ? _ref1 : true;

  defaultIndentSize = (softTabs ? tabLength : 1);

  defaultIndentChar = (softTabs ? " " : "\t");

  defaultIndentWithTabs = !softTabs;

  module.exports = {
    name: "CSS",
    namespace: "css",

    /*
    Supported Grammars
     */
    grammars: ["CSS"],

    /*
    Supported extensions
     */
    extensions: ["css"],
    defaultBeautifier: "JS Beautify",
    options: {
      indent_size: {
        type: 'integer',
        "default": defaultIndentSize,
        minimum: 0,
        description: "Indentation size/length"
      },
      indent_char: {
        type: 'string',
        "default": defaultIndentChar,
        minimum: 0,
        description: "Indentation character"
      },
      selector_separator_newline: {
        type: 'boolean',
        "default": false,
        description: "Add a newline between multiple selectors"
      },
      newline_between_rules: {
        type: 'boolean',
        "default": true,
        description: "Add a newline between CSS rules"
      },
      preserve_newlines: {
        type: 'boolean',
        "default": false,
        description: "Retain empty lines. " + "Consecutive empty lines will be converted to a single empty line."
      },
      wrap_line_length: {
        type: 'integer',
        "default": 0,
        description: "Maximum amount of characters per line (0 = disable)"
      },
      end_with_newline: {
        type: 'boolean',
        "default": false,
        description: "End output with newline"
      },
      indent_comments: {
        type: 'boolean',
        "default": true,
        description: "Determines whether comments should be indented."
      },
      force_indentation: {
        type: 'boolean',
        "default": false,
        description: "if indentation should be forcefully applied to markup even if it disruptively adds unintended whitespace to the documents rendered output"
      },
      convert_quotes: {
        type: 'string',
        "default": "none",
        description: "Convert the quote characters delimiting strings from either double or single quotes to the other.",
        "enum": ["none", "double", "single"]
      },
      align_assignments: {
        type: 'boolean',
        "default": false,
        description: "If lists of assignments or properties should be vertically aligned for faster and easier reading."
      },
      no_lead_zero: {
        type: 'boolean',
        "default": false,
        description: "If in CSS values leading 0s immediately preceeding a decimal should be removed or prevented."
      },
      configPath: {
        title: "comb custom config file",
        type: 'string',
        "default": "",
        description: "Path to custom CSScomb config file, used in absense of a `.csscomb.json` or `.csscomb.cson` at the root of your project."
      },
      predefinedConfig: {
        title: "comb predefined config",
        type: 'string',
        "default": "csscomb",
        description: "Used if neither a project or custom config file exists.",
        "enum": ["csscomb", "yandex", "zen"]
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL2FybmVzY2hyZXVkZXIvLmRvdGZpbGVzL2F0b20vYXRvbS5zeW1saW5rL3BhY2thZ2VzL2F0b20tYmVhdXRpZnkvc3JjL2xhbmd1YWdlcy9jc3MuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQ0E7QUFBQSxNQUFBLG9HQUFBOztBQUFBLEVBQUEsS0FBQSxHQUFRLENBQUMsWUFBRCxDQUFSLENBQUE7O0FBQUEsRUFDQSxTQUFBOztnQ0FBaUUsQ0FEakUsQ0FBQTs7QUFBQSxFQUVBLFFBQUE7O2lDQUErRCxJQUYvRCxDQUFBOztBQUFBLEVBR0EsaUJBQUEsR0FBb0IsQ0FBSSxRQUFILEdBQWlCLFNBQWpCLEdBQWdDLENBQWpDLENBSHBCLENBQUE7O0FBQUEsRUFJQSxpQkFBQSxHQUFvQixDQUFJLFFBQUgsR0FBaUIsR0FBakIsR0FBMEIsSUFBM0IsQ0FKcEIsQ0FBQTs7QUFBQSxFQUtBLHFCQUFBLEdBQXdCLENBQUEsUUFMeEIsQ0FBQTs7QUFBQSxFQU9BLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0FBQUEsSUFFZixJQUFBLEVBQU0sS0FGUztBQUFBLElBR2YsU0FBQSxFQUFXLEtBSEk7QUFLZjtBQUFBOztPQUxlO0FBQUEsSUFRZixRQUFBLEVBQVUsQ0FDUixLQURRLENBUks7QUFZZjtBQUFBOztPQVplO0FBQUEsSUFlZixVQUFBLEVBQVksQ0FDVixLQURVLENBZkc7QUFBQSxJQW1CZixpQkFBQSxFQUFtQixhQW5CSjtBQUFBLElBcUJmLE9BQUEsRUFFRTtBQUFBLE1BQUEsV0FBQSxFQUNFO0FBQUEsUUFBQSxJQUFBLEVBQU0sU0FBTjtBQUFBLFFBQ0EsU0FBQSxFQUFTLGlCQURUO0FBQUEsUUFFQSxPQUFBLEVBQVMsQ0FGVDtBQUFBLFFBR0EsV0FBQSxFQUFhLHlCQUhiO09BREY7QUFBQSxNQUtBLFdBQUEsRUFDRTtBQUFBLFFB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

//# sourceURL=/Users/arneschreuder/.dotfiles/atom/atom.symlink/packages/atom-beautify/src/languages/css.coffee