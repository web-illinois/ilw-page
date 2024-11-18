import { LitElement, html } from 'lit';
import styles from './ilw-page.styles.js';
import './ilw-page.css';

/**
 * @prop {Boolean} expanded
 */
export class Page extends LitElement {

  static get properties() {
    return {
      expanded: { type: Boolean, attribute: true }
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
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