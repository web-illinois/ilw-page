import { LitElement, html, unsafeCSS, CSSResultGroup } from 'lit';
// @ts-ignore
import styles from './ilw-page.styles.css?inline';
import './ilw-page.css';

import { customElement, property, query, state } from "lit/decorators.js";
@customElement('ilw-page')
export default class Page extends LitElement {

  @property({ type: Boolean }) 
  expanded: boolean = true;

  static get styles() : CSSResultGroup {
      return unsafeCSS(styles);
  }

  constructor() {
    super();
    this.expanded = false;
  }

  renderPiece(className: string) {
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

declare global {
interface HTMLElementTagNameMap {
    "ilw-page": Page;
  }
}