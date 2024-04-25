import { Component } from '@angular/core';

interface Todo {
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  newTodo: string = '';
  todos: Todo[] = [];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const newTodoItem: Todo = {
        text: this.newTodo.trim(),
        timestamp: new Date(),
      };
      this.todos.push(newTodoItem);
      this.newTodo = ''; 
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
