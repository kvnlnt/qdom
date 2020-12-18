import {
  TodoOptions,
  StateImplementation,
  TodoImplementation,
} from '../../lib/types';

export default class Todo implements StateImplementation {
  private _todos: TodoImplementation[] = [];
  subs: Function[] = [];
  constructor({ todos }: TodoOptions) {
    this._todos = todos;
  }
  sub(func: Function) {
    this.subs.push(func);
  }
  public get todos() {
    return this._todos;
  }
  public set todos(todos: TodoImplementation[]) {
    this._todos = todos;
    this.subs.forEach((sub) => sub(this._todos));
  }
}
