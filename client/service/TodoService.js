export class TodoService {
  static state = [];

  static initializeState() {
    this.state = this.state;
  }

  static AddTodoItem(id, val, check) {
    this.state.push({
      id,
      val,
      check,
    });
    console.log(...this.state);
  }

  static RemoveTodoItem(id) {
    this.state = this.state.filter((item) => item.id !== id);
    console.log(...this.state);
  }

  static CheckTodoItem(id, check) {}
}
