import { LitElement, html } from "lit";

class NameTag extends LitElement {
  static properties = {
    check: {},
    value: {},
  };

  constructor() {
    super();

    this.check = false;
    this.value = "hello";
  }

  setChecked(e) {
    this.check = e.target.checked;
    console.log(this.check);
  }

  render() {
    return html`
      <div>
        <input type="text" .value=${this.value} ?hidden=${this.check} />
      </div>
      <label>
        <input type="checkbox" name="" id="checkbox" @change=${this.setChecked} />
      </label>
    `;
  }
}

customElements.define("name-tag", NameTag);
app.append(document.createElement("name-tag"));
