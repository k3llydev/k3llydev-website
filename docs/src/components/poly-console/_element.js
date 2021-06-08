function _templateObject_c9734440c89c11ebbc24df5f1d878864() {
  var data = babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <h2>Hello [[prop1]]!</h2>\n    "]);

  _templateObject_c9734440c89c11ebbc24df5f1d878864 = function _templateObject_c9734440c89c11ebbc24df5f1d878864() {
    return data;
  };

  return data;
}

import { html, PolymerElement } from "../../../node_modules/@polymer/polymer/polymer-element.js";
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

  babelHelpers.createClass(PolyConsole, null, [{
    key: "template",
    get: function get() {
      return html(_templateObject_c9734440c89c11ebbc24df5f1d878864());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        prop1: {
          type: String,
          value: 'poly-console'
        }
      };
    }
  }]);
  return PolyConsole;
}(PolymerElement);

window.customElements.define('poly-console', PolyConsole);