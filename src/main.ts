import DesignSystemView from './components/design-system/view';
import DesignSystemState from './components/design-system/state';
import DesignSystemData from './components/design-system/data';
import FourOhFour from './components/404/index';
import UI from './components/UI/index';
import Todos from './components/Todos/index';

function route(path: string): HTMLElement {
  const designSystemRoute = /^#\/design-system$/;
  const designSystemState = new DesignSystemState(DesignSystemData);
  const designSystemView = new DesignSystemView(designSystemState);
  const todosRoute = /^#\/todos$/;
  if (designSystemRoute.test(path)) return designSystemView.render();
  if (todosRoute.test(path)) return new Todos().render();
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
