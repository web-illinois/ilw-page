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
}

.footer {
    grid-area: foot;
}

.main {
  grid-area: main;
  margin: var(--ilw-page--main-margin, 0);
}

.main.add-top-margin {
  margin-top: var(--ilw-page--main-margin-top, 0);
  margin-bottom: var(--ilw-page--main-margin-bottom, 0);
}
`;