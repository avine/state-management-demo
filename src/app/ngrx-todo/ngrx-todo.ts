import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { TodoStore } from './ngrx-todo-store';

@Component({
  selector: 'app-ngrx-todo',
  imports: [JsonPipe, MatAnchor],
  templateUrl: './ngrx-todo.html',
  styleUrl: './ngrx-todo.scss',
})
export class NgrxTodo {
  private todoStore = inject(TodoStore);

  protected items = this.todoStore.items;

  protected addTodo() {
    this.todoStore.add({ userId: 1, id: 1, title: 'Lorem ipsum', completed: false });
  }
}
