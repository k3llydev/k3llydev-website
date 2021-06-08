function _templateObject_c978c280c89c11ebbc24df5f1d878864() {
  var data = babelHelpers.taggedTemplateLiteral(["\n      <style>\n        \n  .console-background {\n    opacity: 0.5;\n    z-index: 0;\n    position: absolute;\n    overflow: hidden;\n}\n\n.background-container {\n  background: green;\n}\n\n.App-logo {\n    overflow: hidden;\n    width: 200px; height: 200px;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n}\n\n.console-wrapper{\n    width: 100%;\n    height: 100%;\n}\n\n\n.console-wrapper * {\n    font-family: 'Ubuntu Mono', monospace;\n    font-size: 1.2rem;\n}\n\n.console-bar{\n    width: 100%;\n    background: rgb(235, 235, 235);\n    display: block;\n    height: 30px;\n    border-radius: 15px 15px 0 0;\n}\n\n.console-bar-items{\n    display: table-cell;\n    height: 100%;\n    width: 10%;\n    padding-left: 10px;\n    vertical-align: middle;\n}\n\n.console-bar-close{\n    height: 15px;\n    width: 15px;\n    vertical-align: middle;\n    border-radius: 50%;\n    background: rgba(248, 73, 72, 0.9);\n    display: inline-block;\n    margin-top: 7px;\n    margin-left: 5px;\n}\n\n.console-bar-minimize{\n    height: 15px;\n    width: 15px;\n    vertical-align: middle;\n    border-radius: 50%;\n    background: #febd2e;\n    display: inline-block;\n    margin-top: 7px;\n    margin-left: 5px;\n}\n\n.console-bar-maximize{\n    height: 15px;\n    width: 15px;\n    vertical-align: middle;\n    border-radius: 50%;\n    background: #3fc650;\n    display: inline-block;\n    margin-top: 7px;\n    margin-left: 5px;\n}\n\n.console-bar-close:hover, .console-bar-minimize:hover, .console-bar-maximize:hover{\n    cursor: pointer;\n    filter: opacity(0.7);\n}\n\n\n.console{\n    background: rgba(12,12,12, 0.8);\n    color: #FFF;\n    padding: 20px;\n    border-radius: 0 0 5px 5px;\n    height: 300px;\n    overflow-y: scroll;\n}\n\n.console::-webkit-scrollbar {\n    width: 12px;\n}\n \n\n \n.console::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \n}\n\n\n\n.console-input-control, .console-input{\n    background: transparent;\n    border: 0;\n    caret-color: var(--k3-text-color-main-light, #33d8ff);\n    color: var(--k3-text-color-main-light, #FFF);\n    font-size: 18px;\n}\n\n.console-input {\n  display: flex;\n}\n\n.console-cursor {\n  color: var(--k3-text-color-main-light, #33d8ff);\n  font-weight: bolder;\n}\n\n.console-input-control{\n    width: 65%;\n}\n\n.console-input-control:focus {\n    outline-width: 0;\n}\n\n.command{\n    margin-top: 3px;\n    margin-bottom: 3px;\n}\n      </style>\n      <div class=\"console-wrapper\" on-click=\"focusInput\">\n        <div class=\"console-window\">\n            <div class=\"console-bar\">\n                <div class=\"console-bar-items\">\n                    <div class=\"console-bar-close\"></div>\n                    <div class=\"console-bar-minimize\"></div>\n                    <div class=\"console-bar-maximize\"></div>\n                </div>\n            </div>\n            <div class=\"console\">\n                <div class=\"console-display\">\n                  <template is=\"dom-repeat\" items=\"{{commands}}\">\n                    <div class=\"command\">\n                      {{item}}\n                    </div>\n                  </template>\n                </div>\n                <div class=\"console-input\"><span class=\"console-cursor\">[[domain]]@website:&nbsp;</span><input spellCheck=\"false\" id=\"inpt\" on-keydown=\"handleInput\" class=\"console-input-control\" type=\"text\" /></div>\n            </div>\n        </div>\n    </div>\n    "]);

  _templateObject_c978c280c89c11ebbc24df5f1d878864 = function _templateObject_c978c280c89c11ebbc24df5f1d878864() {
    return data;
  };

  return data;
}

import { html, PolymerElement } from "../../../node_modules/@polymer/polymer/polymer-element.js";
import "../../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { CommandList } from './commands/main.js';
/**
 * `poly-console`
 * Simply, a console for a browser.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

var PolyConsole =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(PolyConsole, _PolymerElement);

  function PolyConsole() {
    babelHelpers.classCallCheck(this, PolyConsole);
    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PolyConsole).apply(this, arguments));
  }

  babelHelpers.createClass(PolyConsole, [{
    key: "handleInput",
    value: function handleInput(event) {
      var commands = this.commands;

      if (event.key === "Enter" && event.target.value !== '') {
        this.executeCommand(event.target.value);
        this.executed++;
        event.target.value = '';
        this.backsteps = 0;
      }

      if (event.keyCode === 38) {
        this.backsteps++;
        console.log(this.backsteps);
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      babelHelpers.get(babelHelpers.getPrototypeOf(PolyConsole.prototype), "connectedCallback", this).call(this);
      this.addEventListener('click', this.focusInput);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.removeEventListener('click', this.focusInput);
    }
  }, {
    key: "ready",
    value: function ready() {
      var _this = this;

      babelHelpers.get(babelHelpers.getPrototypeOf(PolyConsole.prototype), "ready", this).call(this);
      setTimeout(function (_) {
        _this.println('Web console v1.0.3');
      }, 300);
      setTimeout(function (_) {
        _this.println('Still in development, @k3llydev');
      }, 1000);
    }
  }, {
    key: "executeCommand",
    value: function executeCommand(text) {
      var _this2 = this;

      var subCommand = text.split(' ');
      var command = subCommand.shift();
      console.log("Command is: " + command + " And subcommand is: " + subCommand);

      if (!CommandList[command]) {
        this.println("Command " + command + " not found.");
        return; //Command undefined, so print in console it doesn't exist.
      }

      if (typeof CommandList[command].action != "undefined") {
        //If command has to manipulate component
        var result = CommandList[command].action(subCommand); //Let command manipulate state

        if ("updateState" in result) {
          //If command needs to update the state
          Object.keys(result.updateState).forEach(function (key) {
            return _this2[key] = result.updateState[key];
          });
        }

        if ("output" in result) {
          //If command has output, show it
          this.println(result.output);
        }
      } else {
        this.println(CommandList[command]);
      }
    }
  }, {
    key: "focusInput",
    value: function focusInput(e) {
      this.$.inpt.focus();
    }
  }, {
    key: "println",
    value: function println(string) {
      this.push('commands', string);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        commands: {
          type: Array,
          value: function value() {
            return [];
          }
        },
        domain: {
          type: String,
          value: function value() {
            return document.domain;
          }
        }
      };
    }
  }, {
    key: "template",
    get: function get() {
      return html(_templateObject_c978c280c89c11ebbc24df5f1d878864());
    }
  }]);
  return PolyConsole;
}(PolymerElement);

window.customElements.define('poly-console', PolyConsole);