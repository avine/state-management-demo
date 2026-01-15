import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Todo } from './todo-types';

interface TodoState {
  items: Todo[];
}

const initialState: TodoState = {
  items: [],
};

export const TodoStore = signalStore(
  withState(initialState),

  withMethods((store) => ({
    add(item: Todo) {
      patchState(store, ({ items }) => ({ items: [...items, item] }));
    },
  })),
);
