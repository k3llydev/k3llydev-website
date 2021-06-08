import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `git-blog-list`
 * A component to load blog posts based on GIT
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class GitBlogList extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'git-blog-list',
      },
    };
  }
}

window.customElements.define('git-blog-list', GitBlogList);
