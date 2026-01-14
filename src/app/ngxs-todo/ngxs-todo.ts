import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { AddTodoAction } from './todo/todo.actions';
import { TodoState } from './todo/todo.state';

@Component({
  selector: 'app-ngxs-todo',
  imports: [JsonPipe, MatAnchor],
  templateUrl: './ngxs-todo.html',
  styleUrl: './ngxs-todo.scss',
})
export class NgxsTodo {
  private store = inject(Store);

  protected todos = this.store.selectSignal(TodoState.getItems);

  protected addTodo() {
    this.store.dispatch(
      new AddTodoAction({ userId: 1, id: 1, title: 'Lorem ipsum', completed: false }),
    );
  }
}
