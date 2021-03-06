import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `navigation-handler`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class NavigationHandler extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host { 
          display: block;
          width: 100%; 
          height: 60px; 
          background: var(--k3-main-background-color, #333333);
          font-family: var(--k3-main-font-family, 'Ubuntu Mono', monospace);
          color: white;
          font-size: calc(1em + 1vw);
          @apply --navigation-handler;
        }

        header {
          display: flex;
          justify-content: space-between;
          height: 100%;
          @apply --navigation-handler-header;
        }

        :host div {
          margin: auto 1rem;
        }

        .link {
          color: var(--k3-primary-color, #a432a8);
          @apply --navigation-handler-link;
        }

        a:hover {
          cursor: pointer;
        }
      </style>
      <header id="navigation-header">
        <div class="topleft-name">k3llydev (<a on-click="_gotoPortfolio"><span class="link">[[leftLink]]</span></a>)</div>
        <div class="topright-blog">(<a on-click="_gotoBlog"><span class="link">[[rightLink]]</span></a>)</div>
      </header>
    `;
  }

  static get properties() {
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

  constructor() {
    super();
    this._updateLinks();
  }

  _updateLinks() {
    this.set('leftLink', this.left);
    this.set('rightLink', this.right);
  }

  _gotoPortfolio() {
    this._redirect(0);
  }

  _gotoBlog() {
    this._redirect(1);
  }

  _fireNavigation(to) {
    this.dispatchEvent(new CustomEvent(`navigate-to-${to}`, {
      bubbles: true,
      composed: true,
      detail: {navigateTo: to}
    }));
  }

  _redirect(to) {
    const updater = to === 0 ? 'leftLink' : 'rightLink';
    if(this[updater]==='home'){
      this._updateLinks();
      this._fireNavigation('home');
      return;
    }
    const reseted = to !== 0 ? ['left', 'leftLink'] : ['right', 'rightLink'];
    this._fireNavigation(this[updater]);
    this.set(updater, 'home');
    this.set(reseted[1], this.get(reseted[0], this));
  }
}

window.customElements.define('navigation-handler', NavigationHandler);
