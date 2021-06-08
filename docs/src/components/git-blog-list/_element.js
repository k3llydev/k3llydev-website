function _templateObject_c9586940c89c11ebbc24df5f1d878864() {
  var data = babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <h2>Hello [[prop1]]!</h2>\n    "]);

  _templateObject_c9586940c89c11ebbc24df5f1d878864 = function _templateObject_c9586940c89c11ebbc24df5f1d878864() {
    return data;
  };

  return data;
}

import { html, PolymerElement } from "../../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * `git-blog-list`
 * A component to load blog posts based on GIT
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

var GitBlogList =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(GitBlogList, _PolymerElement);

  function GitBlogList() {
    babelHelpers.classCallCheck(this, GitBlogList);
    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(GitBlogList).apply(this, arguments));
  }

  babelHelpers.createClass(GitBlogList, null, [{
    key: "template",
    get: function get() {
      return html(_templateObject_c9586940c89c11ebbc24df5f1d878864());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        prop1: {
          type: String,
          value: 'git-blog-list'
        }
      };
    }
  }]);
  return GitBlogList;
}(PolymerElement);

window.customElements.define('git-blog-list', GitBlogList);