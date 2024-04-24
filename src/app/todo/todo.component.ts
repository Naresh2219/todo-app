import { Component } from '@angular/core';

interface Todo {
  text: string; // Define the structure of a to-do item
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
 todos: Todo[] = []; // Initialize an empty list of to-dos
  newTodo: string = ''; // A variable to hold the text for a new to-do

  // Method to add a new to-do
  addTodo() {
    if (this.newTodo.trim() !== '') {
      const newTodoItem: Todo = { text: this.newTodo.trim() };
      this.todos.push(newTodoItem); // Add to the list of to-dos
      this.newTodo = ''; // Clear the input field
    }
  }

  // Method to delete a to-do by index
  deleteTodo(index: number) {
    this.todos.splice(index, 1); // Remove the item from the list
  }
}
