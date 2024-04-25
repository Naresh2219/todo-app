import { Component } from '@angular/core';

interface Todo {
  text: string;
  timestamp: Date;
  reminderTime?: Date;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  newTodo: string = '';
  todos: Todo[] = [];
  updateTodoText: string = '';
  reminderTime: Date = new Date(); 

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

  updateTodo(index: number) {
    const updatedTodoText = this.updateTodoText.trim(); 
    if (updatedTodoText !== '') {
      this.todos[index].text = updatedTodoText; 
      this.todos[index].timestamp = new Date(); 
      this.updateTodoText = ''; 
    }
  }

  setReminder(index: number, reminderTime: Date) {
    if (reminderTime) {
      const currentTime = new Date().getTime();
      const reminderTimeInMillis = reminderTime.getTime();
      const delay = reminderTimeInMillis - currentTime;

      if (delay > 0) {
        setTimeout(() => {
          alert(`Reminder: ${this.todos[index].text}`); 
        }, delay);

        // Update the reminder time for the to-do
        this.todos[index].reminderTime = reminderTime;
      } else {
        console.warn("Reminder time must be in the future.");
      }
    }
  }
}
