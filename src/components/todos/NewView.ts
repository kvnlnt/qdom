import { el, style } from '~lib/dom';
import l10n from '~lib/l10n';
import { ComponentImplementation } from '../../lib/types';
import UI from '../UI/Main';
import TextInput from '../../elements/TextInput';
import DateTimeInput from '../../elements/DateTimeInput';
import Form from '../../elements/Form';
import Fieldset from '../../elements/Fieldset';
import Label from '../../elements/Label';
import styles from '~lib/styles';
import Breadcrumb from '../../elements/Breadcrumb';
import Button from '../../elements/Button';
import Select from '../../elements/Select';

export default class DesignSystem implements ComponentImplementation {
  wrapper: HTMLElement = el('div')();
  constructor() {}
  render() {
    this.wrapper.innerHTML = '';
    const header = el('h1');
    const field = el('div', ['class', styles.padding_l]);
    this.wrapper.appendChild(
      new UI(
        el('div')(
          Breadcrumb([[l10n.todosPageTitle, '#/todos']]),
          header(l10n.newTodoPageTitle),
          Form(
            Fieldset(
              field(Label({ text: l10n.inputParent }), Select()),
              field(
                Label({ text: l10n.inputNewTodo }),
                TextInput({ placeholder: l10n.inputNewTodo, value: '' })
              ),
              field(
                Label({ text: l10n.inputDateTime }),
                DateTimeInput({ placeholder: l10n.inputNewTodo, value: '' })
              ),
              field(Button({ text: l10n.buttonAdd }))
            )
          )
        )
      ).render()
    );
    return this.wrapper;
  }
}
