import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() taskAdded = new EventEmitter<string>();
  newTaskText = '';

  onSubmit(): void {
    if (this.newTaskText.trim()) {
      this.taskAdded.emit(this.newTaskText);
      this.newTaskText = '';
    }
  }
}