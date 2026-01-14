import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddTodoAction } from './todo.actions';
import { Todo } from './todo.types';

export interface TodoStateModel {
  items: Todo[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: [],
  },
})
@Injectable()
export class TodoState {
  @Selector()
  static getState(state: TodoStateModel) {
    return state;
  }

  @Selector()
  static getItems(state: TodoStateModel) {
    return state.items;
  }

  @Action(AddTodoAction)
  add(ctx: StateContext<TodoStateModel>, { item }: AddTodoAction) {
    ctx.setState({ items: [...ctx.getState().items, item] });
  }
}
