function _templateObject_c97da480c89c11ebbc24df5f1d878864() {
  var data = babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n        :host div.top-row-container {\n          display: flex;\n          justify-content: space-between;\n        }\n        :host div.experience-container {\n          width: 68%;\n        }\n        :host div.experience-container .enterprise-title {\n          color: var(--portfolio-organism-enterprise-title-color, #000);\n        }\n        :host div.skills-container {\n          width: 30%;\n        }\n        :host div.experience-container h1, :host div.skills-container h1, :host div.certifications-container h1, :host div.projects-container h1 {\n          color: var(--portfolio-organism-main-titles-color, #000);\n        }\n        :host div.experience-item-container {\n          background: var(--portfolio-organism-experience-item-background, #D3D3D3);\n          padding: 0.5rem;\n          margin: 0.5rem 0;\n        }\n        :host div.experience-item-container h2, :host div.experience-item-container h3 {\n          margin: 0;\n          color: var(--portfolio-organism-experience-item-title-color, #000);\n        }\n        :host div.experience-item-container hr {\n          margin: 0;\n          border: 0.5px solid var(--portfolio-organism-experience-item-title-divider-color, #000);\n          width: 110%;\n        }\n        :host div.experience-item-head {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n        :host div.experience-item-head small {\n          color: var(--portfolio-organism-experience-item-head-date-color, #000);\n        }\n        :host div.experience-item-head small a {\n          color: var(--portfolio-organism-experience-item-head-source-color, #00F);\n        }\n        :host div.experience-item-description {\n          padding: 0.5rem 0 0 0;\n          color: var(--portfolio-organism-experience-item-description-color, #000);\n        }\n        :host ul.experience-item-skill-container li {\n          padding: 0 auto;\n          color: var(--portfolio-organism-experience-item-skill-text-color, #000);\n        }\n        :host div.experience-item-tools {\n          display: flex;\n          flex-wrap: wrap;\n          flex-direction: row;\n          align-items: flex-start;\n        }\n        :host div.experience-item-tools div.experience-item-tools-item {\n          padding: 0.250rem;\n          margin: 0.125rem 0.125rem;\n          border-radius: 5px;\n          background: var(--portfolio-organism-experience-item-tools-item-background, transparent);\n          border: 1px solid var(--portfolio-organism-experience-item-tools-item-border-color, #000);\n          color: var(--portfolio-organism-experience-item-tools-item-color, #000);\n        }\n        :host div.skills-item-container {\n          display: flex;\n          justify-content: space-between;\n          flex-direction: row;\n          align-items: flex-start;\n          flex-wrap: wrap;\n        }\n        :host div.skills-item-container span.skills-item {\n          background: var(--portfolio-organism-skills-container-item-background, #D3D3D3);\n          color: var(--portfolio-organism-skills-container-item-color, #000);\n          margin: 0.250rem 0;\n          padding: 0.5rem;\n        }\n        @media (max-width: 600px) {\n          :host div.top-row-container {\n            display: block;\n          }\n          :host div.top-row-container div.experience-container, :host div.top-row-container div.skills-container {\n            width: 100%;\n          }\n        }\n        :host .projects-item-container {\n          display: flex;\n          flex-wrap: wrap;\n        }\n        :host .projects-item {\n          background: var(--portfolio-organism-projects-item-background, #D3D3D3);\n          padding: 0.5rem;\n          max-width: 150px;\n        }\n        :host div.projects-item h3 {\n          text-align: center;\n          color: var(--portfolio-organism-projects-item-title-color, #000);\n        }\n        :host div.projects-item p {\n          text-align: center;\n          color: var(--portfolio-organism-projects-item-description-color, #000);\n        }\n        :host div.projects-item-container a {\n          text-align: center;\n          display: block;\n          color: inherit;\n          text-decoration: none;\n        }\n      </style>\n      <div class=\"top-row-container\">\n        <div class=\"experience-container\">\n          <h1>[[projectsTitle]]</h1>\n          <template is=\"dom-repeat\" items=\"[[portfolioData.projects]]\" as=\"project\">\n              <div class=\"experience-item-container\">\n                <div class=\"experience-item-head\">\n                  <h3>[[project.name]]<hr class=\"small-divider\"></h3><small>[[_hasEndDate(project.endDate)]] - <a target=\"_blank\" href=\"[[project.url]]\">View source</a></small>\n                </div>\n                <div class=\"experience-item-content-container\">\n                  <div class=\"experience-item-description\">[[project.description]]</div>\n                  <div class=\"experience-item-labours\">\n                    <ul class=\"experience-item-skill-container\">\n                      <template is=\"dom-repeat\" items=\"[[project.tasks]]\" as=\"task\">\n                        <li>[[task]]</li>\n                      </template>\n                    </ul>\n                  </div>\n                  <div class=\"experience-item-tools\">\n                    <template is=\"dom-repeat\" items=\"[[project.technologies]]\" as=\"techUsed\">\n                      <div class=\"experience-item-tools-item\">[[techUsed]]</div>\n                    </template>\n                  </div>\n                </div>\n              </div>\n          </template>\n        </div>\n        <div class=\"skills-container\">\n          <h1>[[skillsTitle]]</h1>\n          <div class=\"skills-item-container\">\n            <template is=\"dom-repeat\" items=\"[[portfolioData.skills]]\" as=\"skill\">\n              <span class=\"skills-item\">[[skill]]</span>\n            </template>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"experience-container\">\n        <h1>[[certificationsTitle]]</h1>\n        <template is=\"dom-repeat\" items=\"[[portfolioData.certifications]]\" as=\"certification\">\n\n            <div class=\"experience-item-container\">\n              <div class=\"experience-item-head\">\n                <h2>[[certification.title]]<hr class=\"small-divider\"></h2><small>[[_hasEndDate(certification.endDate)]]</small>\n              </div>\n              <div class=\"experience-item-content-container\">\n                <div class=\"experience-item-description\">[[certification.description]]</div>\n                <div class=\"experience-item-labours\">\n                  <ul class=\"experience-item-skill-container\">\n                    <template is=\"dom-repeat\" items=\"[[certification.learned]]\">\n                      <li>[[item]]</li>\n                    </template>\n                  </ul>\n                </div>\n                <div class=\"experience-item-tools\">\n                  <template is=\"dom-repeat\" items=\"[[certification.tools]]\">\n                    <div class=\"experience-item-tools-item\">[[item]]</div>\n                  </template>\n                </div>\n              </div>\n            </div>\n\n        </template>\n      </div>\n    "]);

  _templateObject_c97da480c89c11ebbc24df5f1d878864 = function _templateObject_c97da480c89c11ebbc24df5f1d878864() {
    return data;
  };

  return data;
}

import { html, PolymerElement } from "../../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * `portfolio-organism`
 * A component that renders a portafolio in a basic syntax
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

var PortfolioOrganism =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(PortfolioOrganism, _PolymerElement);

  function PortfolioOrganism() {
    babelHelpers.classCallCheck(this, PortfolioOrganism);
    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PortfolioOrganism).apply(this, arguments));
  }

  babelHelpers.createClass(PortfolioOrganism, [{
    key: "_hasEndDate",
    value: function _hasEndDate(endDate) {
      return endDate || 'In progress';
    }
  }], [{
    key: "template",
    get: function get() {
      return html(_templateObject_c97da480c89c11ebbc24df5f1d878864());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        portfolioTitle: {
          type: String,
          value: ''
        },
        skillsTitle: {
          type: String,
          value: ''
        },
        certificationsTitle: {
          type: String,
          value: ''
        },
        portfolioData: {
          type: Array,
          value: function value() {
            return {};
          }
        },
        projectsTitle: {
          type: String,
          value: ''
        }
      };
    }
  }]);
  return PortfolioOrganism;
}(PolymerElement);

window.customElements.define('portfolio-organism', PortfolioOrganism);