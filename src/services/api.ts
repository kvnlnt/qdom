import { TodoImplementation } from '~lib/types';

export default {
  getTodos() {
    return window.localStorage.getItem('todos');
  },
  saveTodos(todos: TodoImplementation[]) {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  },
};
