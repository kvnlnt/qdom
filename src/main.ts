import DesignSystemData from './components/design-system/data';
import DesignSystemState from './components/design-system/State';
import DesignSystemView from './components/design-system/View';
import FourOhFour from './components/404/index';
import TodosListView from './components/todos/TodosListView';
import TodosNewView from './components/todos/TodosNewView';
import TodosState from './components/todos/TodosState';

function route(path: string): HTMLElement {
  const designSystemRoute = /^#\/design-system$/;
  const designSystemState = new DesignSystemState(DesignSystemData);
  const designSystemView = new DesignSystemView(designSystemState);
  const todosState = new TodosState(TodosState.localStorage());
  const todosListRoute = /^#\/todos$/;
  const todosListView = new TodosListView(todosState);
  const todosNewRoute = /^#\/todos\/new$/;
  const todosNewView = new TodosNewView(todosState);
  if (designSystemRoute.test(path)) return designSystemView.render();
  if (todosListRoute.test(path)) return todosListView.render();
  if (todosNewRoute.test(path)) return todosNewView.render();
  return new FourOhFour().render();
}

const router = (container: HTMLElement) => {
  const page = route(window.location.hash);
  container.innerHTML = '';
  container.appendChild(page);
};

window.addEventListener('DOMContentLoaded', () => {
  const root: HTMLElement = document.getElementById('root');
  router(root);
  window.onhashchange = () => router(root);
});
