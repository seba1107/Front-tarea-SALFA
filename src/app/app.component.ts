import { Component } from '@angular/core';
import { TodoService, Task } from './services/todo.service';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
})
export class AppComponent {
  tasks: Task[] = [];

  constructor(private todoService: TodoService) {
    this.tasks = this.todoService.getTasks();
  }

  addTask(text: string): void {
    this.todoService.addTask(text);
    this.tasks = this.todoService.getTasks();
  }

  deleteTask(id: number): void {
    this.todoService.deleteTask(id);
    this.tasks = this.todoService.getTasks();
  }
}