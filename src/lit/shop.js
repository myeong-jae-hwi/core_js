import { LitElement, html, css } from "lit";

import s from "/src/lit/text.css?inline";

class TodoList extends LitElement {
  static properties = {};

  constructor() {
    super();

    this.data = [
      { id: 1, product: "소고기 샤브샤브 밀키트", price: 15900, quantity: 3 },
      { id: 2, product: "비빔밥 세트", price: 11900, quantity: 5 },
      { id: 3, product: "차돌박이 숙주 볶음", price: 10320, quantity: 2 },
    ];
  }

  handleDelete() {}

  render() {
    return html`
      <style>
        ${s}
      </style>
      <div>
        ${this.data.map(
          (item) => html`
            <div class="card">
              <img src="https://picsum.photos/100/100" alt="" />
              <div class="innner">
                <h2>${item.product}</h2>
                <h3>가격: ${item.price}원</h3>
                <p>수량: ${item.quantity}개</p>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define("todo-list", TodoList);

app.append(document.createElement("todo-list"));
