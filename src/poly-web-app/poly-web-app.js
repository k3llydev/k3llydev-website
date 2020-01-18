import {html, css, LitElement} from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import 'fa-icons';
import 'navigation-header';
import 'poly-console';
import 'git-blog-list';
import 'portfolio-organism';

/**
 * @customElement
 * @litelement
 */
class PolyWebApp extends LitElement {

  static get properties() {
    return {
      currentPage: {
        type: String,
        value: 'home'
      },
      navigationElement: Object
    };
  }
  
  constructor() {
    super();
    this.currentPage = 'home';
    this.portfolio = {
      experience: [
        {
          name: 'BBVA',
          experience: [
            {
              job: 'Front-end Software Engineer - GloMo',
              startDate: '00/00/0000',
              endDate: '',
              description: 'Code, debug and review features for the future global customer application.',
              labours: ['Write efficient and working code', 'Test written code'],
              tools: ['CELLS', 'JavaScript', 'HTML5', 'Polymer']
            },
            {
              job: 'Developer at BEyG - Business Process Engineering',
              startDate: '00/00/0000',
              endDate: '',
              description: 'Code, debug and review features for the future global customer application.',
              labours: ['Write efficient and working code', 'Test written code'],
              tools: "*".repeat(30).split('').map(e=>['JavaScript'])
            }
          ]
        }
      ],
      skills: ['JavaScript', 'Python', 'HTML', 'CSS', 'Web Components', 'SASS', 'webpack', 'nodejs', 'Polymer', 'LitElement', 'C++', 'E2E', 'JSON', 'RESTFul APIs'],
      education: [
        {
          place: 'Systems Automation Engineering, University of Matamoros',
          startDate: '00/00/0000',
          endDate: '00/00/0000',
          description: '2 years of 3',
          labours: [],
          tools: ['OOP', 'Data Structure', '.NET', 'Visual Basic', 'C++', 'Algebra', 'Statistics', 'HTML']
        }
      ],
      projects: [
        {
          name: 'bitten-c00kie',
          briefDescription: 'A simple web app made in PHP to prove how client-side vulnerabilites are still an issue.',
          url: 'https://github.com'
        }
      ]
    };
    this.addEventListener('navigate-to-home', this._router);
    this.addEventListener('navigate-to-portfolio', this._router);
    this.addEventListener('navigate-to-blog', this._router);
  }

  static get styles() {
    return css`
      .home-center{
        width: 700px;
        height: 400px;
        position:absolute;
        left:0; right:0;
        top:0; bottom:0;
        margin:auto;
        max-width:100%;
        max-height:100%;
        overflow:hidden;    
      }
  
      .home-center-mobile{
        width: 96%;
        height: 50vh;
        position:absolute;
        left:0; right:0;
        top:0; bottom:0;
        margin:auto;
        max-width:100%;
        max-height:100%;
        overflow:hidden;    
        display: none;
        text-align: center;
        color: white;
        font-family: 'Ubuntu Mono', monospace;
      }
      
      @media (max-width: 600px) {
        .home-center {
          display: none;
        }
        .home-center-mobile{
          display: block;
        }
        .portfolio-container {
          display: block; 
        }
        .portfolio-description-container, .portfolio-cards-container {
          width: 96%;
        }
        .home-background-icon img {
          filter: opacity(0.3);
        }
      }
    
      .home-networks{
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: 5vh;
        text-align: center;
      }
    
      .home-networks fa-icon {
        position: relative;
        margin: 0 0.5rem;
        text-decoration: none;
        font-size: calc(1em + 1vw);
      }

      .home-background-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: -11;
      }

      .home-background-icon img {
        width: 300px;
        height: 300px;
      }

      fa-icon {
        color: var(--k3-text-color-main, #33d8ff);
        --fa-icon-width: calc(1rem + 1vw);
        --fa-icon-height: calc(1rem + 1vw);
      }

      .home-profile{
        margin: 0;
        position: absolute;
        top: 85%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        color: red;
        text-align: center;
        display: flex;
      }
    
      .home-profile span{
        font-family: 'Ubuntu Mono', monospace;
        color: white;
      }
    
      .home-profile-item {
        text-align: center;
      }

      .safe-zone {
        width: 90%;
        padding: 15px;
        margin: 0 auto;
      }

      .portfolio h1, .blog h1 {
        font-family: 'Ubuntu Mono', monospace;
        color: var(--k3-text-color-third, #FFF);
        text-decoration: underline;
      }

      git-blog-list {
        /* Posts list */
        --git-blog-list-title-color: var(--k3-text-color-third, #FFF);
        --git-blog-list-post-list-date-color: var(--k3-bright-primary-color, #33d8ff);

        /* Exit button */
        --git-blog-list-exit-post-button-border: 1px solid var(--k3-text-color-main, #33d8ff);
        --git-blog-list-exit-post-button-color: #FFF;

        /* Post description */
        --git-blog-list-description-author-value-color: var(--k3-primary-color, #33d8ff);
        --git-blog-list-description-date-value-color: var(--k3-primary-color, #33d8ff);


        /* MARKDOWN */
        --git-blog-list-exit-post-button-background: var(--k3-text-color-main, #33d8ff);
        --git-blog-list-markdown-h1-color: var(--k3-primary-color, #33d8ff);
        --git-blog-list-markdown-h2-color: var(--k3-primary-color, #33d8ff);
        --git-blog-list-markdown-a-color: var(--k3-primary-color, #33d8ff);
        --git-blog-list-markdown-a-color: var(--k3-primary-color, #33d8ff);
        --git-blog-list-markdown-pre-background: #444;
        color: var(--k3-text-color-third, #FFF);
        font-family: 'Ubuntu Mono', monospace;
      }

      portfolio-organism {
        font-family: 'Ubuntu Mono', monospace;

        /** Titles color */
        --portfolio-organism-main-titles-color: #FFF;
        --portfolio-organism-experience-item-title-color: var(--k3-bright-primary-color, #33d8ff);
        --portfolio-organism-experience-item-title-divider-color: #666;
        --portfolio-organism-enterprise-title-color: var(--k3-bright-primary-color, #33d8ff);

        /** Experience items */
        --portfolio-organism-experience-item-background: #404040;
        --portfolio-organism-experience-item-head-date-color: #FFF;
        --portfolio-organism-experience-item-skill-text-color: #FFF;
        --portfolio-organism-experience-item-description-color: #FFF;

        /** Experience item tools */
        /* --portfolio-organism-experience-item-tools-item-background: var(--k3-primary-color, #33d8ff); */
        --portfolio-organism-experience-item-tools-item-color: #D3D3D3;
        --portfolio-organism-experience-item-tools-item-border-color: #666;

        /** Skills */
        --portfolio-organism-skills-container-item-background: var(--k3-primary-color, #33d8ff);
        --portfolio-organism-skills-container-item-color: #FFF;

        /** Personal projects */
        --portfolio-organism-projects-item-background: #404040;
        --portfolio-organism-projects-item-title-color: var(--k3-bright-primary-color, #33d8ff);
        --portfolio-organism-projects-item-description-color: #FFF;
      }
    `;
  }

  _router(params) {
    this.currentPage = params.detail.navigateTo;
  }

  _showMail(e) {
    e.preventDefault();
    let mail = String.fromCharCode(104,101,108,108,111,64,107,51,108,108,121,46,100,101,118);
    alert(`Only for humans. \nContact me at: ${mail}`);
  }

  _home() {
    return html`
      <div class="home-center">
        <poly-console domain="k3lly.dev"></poly-console>
      </div>

      <div class="home-background-icon">
        <img src="src/assets/images/polymer.svg">
      </div>

      <div class="home-center-mobile">
          <h2 class="link">Hello world!</h2>
          <p>
              You can find everything about my professional career and profile here.
          </p>
          <p>
              If you need anything else not provided here, you can always contact me in my social media.<br/>
          </p>
      </div>

      <div class="home-profile">
      <div class="home-profile-item">
          <span>Community contributor with <span role="img" aria-label="love">💜</span></span><br/>
          <a href="https://stackexchange.com/users/7308699/k3llydev?tab=accounts" target="_blank" rel="noopener noreferrer"><img src="https://stackexchange.com/users/flair/7308699.png" alt="SE Flair"></a>
      </div>
          
      </div>
      <div class="home-networks">
          <a href="https://linkedin.com/in/k3llydev" target="_blank" rel="noopener noreferrer"><fa-icon class="fab fa-linkedin-in"></fa-icon></a>
          <a href="https://stackoverflow.com/users/5568741/k3llydev" target="_blank" rel="noopener noreferrer"><fa-icon class="fab fa-stack-overflow"></fa-icon></a>
          <a href="https://github.com/k3llydev" target="_blank" rel="noopener noreferrer"><fa-icon class="fab fa-github"></fa-icon></a>
          <a href="https://twitter.com/k3llydev" target="_blank" rel="noopener noreferrer"><fa-icon class="fab fa-twitter"></fa-icon></a>
          <a href="https://hackerrank.com/k3llydev" target="_blank" rel="noopener noreferrer"><fa-icon class="fab fa-hackerrank"></fa-icon></a>
          <a href="https://stackoverflow.com/cv/k3llydev" target="_blank" rel="noopener noreferrer"><fa-icon class="fas fa-portrait"></fa-icon></a>
          <a href="https://jsfiddle.net/user/k3llydev/fiddles/" target="_blank" rel="noopener noreferrer"><fa-icon class="fab fa-jsfiddle"></fa-icon></a>
          <a href="https://k3lly.dev" @click="${this._showMail}"><fa-icon class="fas fa-envelope"></fa-icon></a>
      </div>
    `;
  }

  _portfolio() {
    return html`
      <div class="safe-zone portfolio">
        <portfolio-organism
          portfolio-title="Professional experience"
          skills-title="Skills"
          education-title="Education"
          projects-title="Personal projects"
          .portfolioData="${this.portfolio}">
        </portfolio-organism>
      </div>  
      `;
  }

  _blog() {
    return html`
      <div class="safe-zone blog">
        <git-blog-list githubUser="k3llydev" githubRepo="blog.k3lly.dev"></git-blog-list>
      </div>
    `;
  }

  _navigation() {
    if(this.currentPage === 'home') {
      return this._home();
    }
    if(this.currentPage === 'portfolio') {
      return this._portfolio();
    }
    if(this.currentPage === 'blog') {
      return this._blog();
    }
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          --navigation-handler-link: {
              background-color: red;
          };
        }
      </style>
      <navigation-handler id="navigation"></navigation-handler>
      ${ this._navigation() }
    `;
  }
  
}

window.customElements.define('poly-web-app', PolyWebApp);
