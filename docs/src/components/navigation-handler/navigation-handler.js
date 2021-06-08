function _templateObject_c9719690c89c11ebbc24df5f1d878864() {
  var data = babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host { \n          display: block;\n          width: 100%; \n          height: 60px; \n          background: var(--k3-main-background-color, #333333);\n          font-family: var(--k3-main-font-family, 'Ubuntu Mono', monospace);\n          color: white;\n          font-size: calc(1em + 1vw);\n          @apply --navigation-handler;\n        }\n\n        header {\n          display: flex;\n          justify-content: space-between;\n          height: 100%;\n          @apply --navigation-handler-header;\n        }\n\n        :host div {\n          margin: auto 1rem;\n        }\n\n        .link {\n          color: var(--k3-primary-color, #a432a8);\n          @apply --navigation-handler-link;\n        }\n\n        a:hover {\n          cursor: pointer;\n        }\n      </style>\n      <header id=\"navigation-header\">\n        <div class=\"topleft-name\">k3llydev (<a on-click=\"_gotoPortfolio\"><span class=\"link\">[[leftLink]]</span></a>)</div>\n        <div class=\"topright-blog\">(<a on-click=\"_gotoBlog\"><span class=\"link\">[[rightLink]]</span></a>)</div>\n      </header>\n    "]);

  _templateObject_c9719690c89c11ebbc24df5f1d878864 = function _templateObject_c9719690c89c11ebbc24df5f1d878864() {
    return data;
  };

  return data;
}

import { html, PolymerElement } from "../../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * `navigation-handler`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

var NavigationHandler =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(NavigationHandler, _PolymerElement);
  babelHelpers.createClass(NavigationHandler, null, [{
    key: "template",
    get: function get() {
      return html(_templateObject_c9719690c89c11ebbc24df5f1d878864());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        left: {
          type: String,
          value: 'portfolio'
        },
        right: {
          type: String,
          value: 'blog'
        },
        leftLink: String,
        rightLink: String
      };
    }
  }]);

  function NavigationHandler() {
    var _this;

    babelHelpers.classCallCheck(this, NavigationHandler);
    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(NavigationHandler).call(this));

    _this._updateLinks();

    return _this;
  }

  babelHelpers.createClass(NavigationHandler, [{
    key: "_updateLinks",
    value: function _updateLinks() {
      this.set('leftLink', this.left);
      this.set('rightLink', this.right);
    }
  }, {
    key: "_gotoPortfolio",
    value: function _gotoPortfolio() {
      this._redirect(0);
    }
  }, {
    key: "_gotoBlog",
    value: function _gotoBlog() {
      this._redirect(1);
    }
  }, {
    key: "_fireNavigation",
    value: function _fireNavigation(to) {
      this.dispatchEvent(new CustomEvent("navigate-to-".concat(to), {
        bubbles: true,
        composed: true,
        detail: {
          navigateTo: to
        }
      }));
    }
  }, {
    key: "_redirect",
    value: function _redirect(to) {
      var updater = to === 0 ? 'leftLink' : 'rightLink';

      if (this[updater] === 'home') {
        this._updateLinks();

        this._fireNavigation('home');

        return;
      }

      var reseted = to !== 0 ? ['left', 'leftLink'] : ['right', 'rightLink'];

      this._fireNavigation(this[updater]);

      this.set(updater, 'home');
      this.set(reseted[1], this.get(reseted[0], this));
    }
  }]);
  return NavigationHandler;
}(PolymerElement);

window.customElements.define('navigation-handler', NavigationHandler);