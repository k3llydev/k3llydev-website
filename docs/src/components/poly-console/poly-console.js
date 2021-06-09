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

class PolyConsole extends PolymerElement {
  static get properties() {
    return {
      commands: {
        type: Array,
        value: () => []
      },
      domain: {
        type: String,
        value: () => document.domain
      }
    };
  }

  static get template() {
    return html`
      <style>
        
  .console-background {
    opacity: 0.5;
    z-index: 0;
    position: absolute;
    overflow: hidden;
}

.background-container {
  background: green;
}

.App-logo {
    overflow: hidden;
    width: 200px; height: 200px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.console-wrapper{
    width: 100%;
    height: 100%;
}


.console-wrapper * {
    font-family: 'Ubuntu Mono', monospace;
    font-size: 1.2rem;
}

.console-bar{
    width: 100%;
    background: rgb(235, 235, 235);
    display: block;
    height: 30px;
    border-radius: 15px 15px 0 0;
}

.console-bar-items{
    display: table-cell;
    height: 100%;
    width: 10%;
    padding-left: 10px;
    vertical-align: middle;
}

.console-bar-close{
    height: 15px;
    width: 15px;
    vertical-align: middle;
    border-radius: 50%;
    background: rgba(248, 73, 72, 0.9);
    display: inline-block;
    margin-top: 7px;
    margin-left: 5px;
}

.console-bar-minimize{
    height: 15px;
    width: 15px;
    vertical-align: middle;
    border-radius: 50%;
    background: #febd2e;
    display: inline-block;
    margin-top: 7px;
    margin-left: 5px;
}

.console-bar-maximize{
    height: 15px;
    width: 15px;
    vertical-align: middle;
    border-radius: 50%;
    background: #3fc650;
    display: inline-block;
    margin-top: 7px;
    margin-left: 5px;
}

.console-bar-close:hover, .console-bar-minimize:hover, .console-bar-maximize:hover{
    cursor: pointer;
    filter: opacity(0.7);
}


.console{
    background: rgba(12,12,12, 0.8);
    color: #FFF;
    padding: 20px;
    border-radius: 0 0 5px 5px;
    height: 300px;
    overflow-y: scroll;
}

.console::-webkit-scrollbar {
    width: 12px;
}
 

 
.console::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}



.console-input-control, .console-input{
    background: transparent;
    border: 0;
    caret-color: var(--k3-text-color-main-light, #33d8ff);
    color: var(--k3-text-color-main-light, #FFF);
    font-size: 18px;
}

.console-input {
  display: flex;
}

.console-cursor {
  color: var(--k3-text-color-main-light, #33d8ff);
  font-weight: bolder;
}

.console-input-control{
    width: 65%;
}

.console-input-control:focus {
    outline-width: 0;
}

.command{
    margin-top: 3px;
    margin-bottom: 3px;
}
      </style>
      <div class="console-wrapper" on-click="focusInput">
        <div class="console-window">
            <div class="console-bar">
                <div class="console-bar-items">
                    <div class="console-bar-close"></div>
                    <div class="console-bar-minimize"></div>
                    <div class="console-bar-maximize"></div>
                </div>
            </div>
            <div class="console">
                <div class="console-display">
                  <template is="dom-repeat" items="{{commands}}">
                    <div class="command">
                      {{item}}
                    </div>
                  </template>
                </div>
                <div class="console-input"><span class="console-cursor">[[domain]]@website:&nbsp;</span><input spellCheck="false" id="inpt" on-keydown="handleInput" class="console-input-control" type="text" /></div>
            </div>
        </div>
    </div>
    `;
  }

  handleInput(event) {
    const {
      commands
    } = this;

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

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.focusInput);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.focusInput);
  }

  ready() {
    super.ready();
    setTimeout(_ => {
      this.println('Web console v1.0.3');
    }, 300);
    setTimeout(_ => {
      this.println('Still in development, @k3llydev');
    }, 1000);
  }

  executeCommand(text) {
    let subCommand = text.split(' ');
    let command = subCommand.shift();
    console.log("Command is: " + command + " And subcommand is: " + subCommand);

    if (!CommandList[command]) {
      this.println("Command " + command + " not found.");
      return; //Command undefined, so print in console it doesn't exist.
    }

    if (typeof CommandList[command].action != "undefined") {
      //If command has to manipulate component
      let result = CommandList[command].action(subCommand); //Let command manipulate state

      if ("updateState" in result) {
        //If command needs to update the state
        Object.keys(result.updateState).forEach(key => this[key] = result.updateState[key]);
      }

      if ("output" in result) {
        //If command has output, show it
        this.println(result.output);
      }
    } else {
      this.println(CommandList[command]);
    }
  }

  focusInput(e) {
    this.$.inpt.focus();
  }

  println(string) {
    this.push('commands', string);
  }

}

window.customElements.define('poly-console', PolyConsole);