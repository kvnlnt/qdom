import DesignSystem from './components/design-system/index';
import FourOhFour from './components/404/index';
import UI from './components/UI/index';
import Todos from './components/Todos/index';

function route(path: string): HTMLElement {
  const designSystem = /^#\/design-system$/;
  const todos = /^#\/todos$/;
  if (designSystem.test(path)) return new DesignSystem().render();
  if (todos.test(path)) return new Todos().render();
  return new FourOhFour().render();
}

const router = (container: HTMLElement) => {
  const page = new UI(route(window.location.hash));
  container.innerHTML = '';
  container.appendChild(page.render());
};

window.addEventListener('DOMContentLoaded', () => {
  const root: HTMLElement = document.getElementById('root');
  router(root);
  window.onhashchange = () => router(root);
});
