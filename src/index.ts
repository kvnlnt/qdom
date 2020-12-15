import { el, style } from './dom';
import {
  StateImplementation,
  ComponentImplementation,
  TodoItem,
} from './types';

const atoms = {
  fs_m: ['fontSize', '16px'],
  fs_l: ['fontSize', '18px'],
  fs_xl: ['fontSize', '24px'],
  text_strike: ['textDecoration', 'line-through'],
  cursor_pointer: ['cursor', 'pointer'],
};
const cls = style<typeof atoms>(atoms);

class TodoState implements StateImplementation<TodoItem[]> {
  data: TodoItem[];
  subs: Function[] = [];
  constructor(items: TodoItem[]) {
    this.data = items;
  }
  get() {
    return this.data;
  }
  set(todos: TodoItem[]) {
    this.data = todos;
    this.subs.forEach((sub) => sub());
  }
  sub(func: Function) {
    this.subs.push(func);
  }
}

class TodoList implements ComponentImplementation {
  private todoItems: TodoState;
  private todoItemsCompleted: TodoState;
  wrapper: HTMLElement;
  constructor(todoItems: TodoState, todoItemsCompleted: TodoState) {
    this.todoItems = todoItems;
    this.todoItemsCompleted = todoItemsCompleted;
    this.todoItems.sub(this.render.bind(this));
    this.todoItemsCompleted.sub(this.render.bind(this));
    this.wrapper = el('div', ['class', cls.fs_xl])();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e: Event) {
    const item = (<HTMLLIElement>e.target).innerText;
    if (this.todoItemsCompleted.get().includes(item)) {
      this.todoItemsCompleted.set(
        this.todoItemsCompleted.get().filter((i) => i !== item)
      );
    } else {
      this.todoItemsCompleted.set([...this.todoItemsCompleted.get(), item]);
    }
  }
  render() {
    const completed = this.todoItemsCompleted.get();
    this.wrapper.innerHTML = '';
    this.wrapper.appendChild(
      el('ul')(
        ...this.todoItems.get().map((todo) => {
          const classes = [
            'cursor_pointer',
            completed.includes(todo) && cls.text_strike,
          ];
          return el(
            'li',
            ['class', classes.join(' ')],
            ['onclick', this.handleClick]
          )(todo);
        })
      )
    );
    return this.wrapper;
  }
}

class TodoForm implements ComponentImplementation {
  private todosState: TodoState;
  private input: HTMLInputElement = el('input', ['type', 'text'])();
  wrapper: HTMLElement;
  constructor(todosState: TodoState) {
    this.todosState = todosState;
    this.todosState.sub(this.render.bind(this));
    this.handleClick = this.handleClick.bind(this);
    this.wrapper = el('div')();
  }
  handleClick(): void {
    this.todosState.set([...this.todosState.get(), this.input.value]);
    this.input.value = '';
    this.input.focus();
  }
  render() {
    this.wrapper.innerHTML = '';
    this.wrapper.appendChild(
      el('form', ['onsubmit', (e: Event) => e.preventDefault()])(
        this.input,
        el(
          'input',
          ['type', 'submit'],
          ['value', 'Add'],
          ['onclick', this.handleClick]
        )()
      )
    );
    return this.wrapper;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const root: HTMLElement = document.getElementById('root');
  const todoItems = new TodoState(['one', 'two', 'three']);
  const todoItemsCompleted = new TodoState([]);
  const todoList = new TodoList(todoItems, todoItemsCompleted);
  const todoForm = new TodoForm(todoItems);
  root.appendChild(todoList.render());
  root.appendChild(todoForm.render());
});
