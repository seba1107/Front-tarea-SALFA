import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskDeleted = new EventEmitter<number>();

  onDelete(taskId: number): void {
    this.taskDeleted.emit(taskId);
  }
}