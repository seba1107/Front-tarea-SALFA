import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(text: string): void {
    this.tasks.push({ id: Date.now(), text });
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}