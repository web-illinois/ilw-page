import { LitElement, html } from 'lit';
import styles from './ilw-page.styles';
import './ilw-page.css';

class Page extends LitElement {

  static get properties() {
    return {
      illinois: { type: Boolean, attribute: true },
      expanded: { type: Boolean, attribute: true }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.illinois = false;
    this.expanded = false;
  }

  renderPiece(className) {
    return html`<div class="${className}">
    <slot name="${className}"></slot>
    </div>`;
  }

  render() {
      return html`
      <div class="page">
      ${this.renderPiece('header')}
      <div class="main ${this.expanded ? 'add-margin' : ''}">
          <slot></slot>
      </div>
      ${this.renderPiece('footer')}
      </div>
      `;
  }
}

customElements.define('ilw-page', Page);