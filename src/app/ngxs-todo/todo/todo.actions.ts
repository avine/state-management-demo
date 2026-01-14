import { Todo } from './todo.types';

export class AddTodoAction {
  static readonly type = '[Todo] Add item';
  constructor(readonly item: Todo) {}
}
