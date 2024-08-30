import { css } from 'lit';

export default css`

.page {
    display: grid;
    width: 100%;
    grid-template-areas:
      "head"
      "main"
      "foot";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
}

.header {
    grid-area: head;
    position: relative;
    z-index: 300;
}

.footer {
    grid-area: foot;
}

.main {
  grid-area: main;
  margin-left: var(--ilw-page--margin, 0);
  margin-right: var(--ilw-page--margin, 0);
}

.main.add-margin {
  margin-top: var(--ilw-page--main-margin-top, 0);
  margin-bottom: var(--ilw-page--main-margin-bottom, 0);
}
`;