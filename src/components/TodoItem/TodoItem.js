import { LitElement, html } from "lit";

class TodoItem extends LitElement {
  static properties = {
    id: { type: Number },
    value: { type: String },
    checked: { type: Boolean },
  };

  constructor() {
    super();
    this.id = 0;
    this.value = "";
    this.checked = false;
  }

  render() {
    return html`
      <li class="item">
        <input type="checkbox" />
        <input type="text" />
        <button type="button" class="delete">X</button>
      </li>
    `;
  }
}

customElements.define("todo-item", TodoItem);
