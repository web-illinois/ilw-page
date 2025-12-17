import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-page";

const content = html`
    <ilw-page>
      <h1>Heading 1</h1>
    </ilw-page>`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("Heading 1");
    await expect.element(element).toBeInTheDocument();
});
