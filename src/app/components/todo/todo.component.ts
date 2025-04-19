import { CommonModule } from '@angular/common';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itask } from '../../models/Itask';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  newTaskName: string = '';

  constructor(public todoService: TodoService) {}

  addTask(taskName: string) {
    this.todoService.addTask(taskName);
    this.newTaskName = '';
  }

  startTask(index: number) {
    this.todoService.startTask(index);
  }

  completeTask(id: number) {
    this.todoService.completeTask(id);
  }

  toggleTaskStatus(task: Itask) {
    if (task.status === 'Completed') {
      task.status = 'In Progress';
      this.todoService.updateTaskStatus(task.id, 'In Progress');
    } else {
      task.status = 'Completed';
      this.todoService.updateTaskStatus(task.id, 'Completed');
    }
  }

  deleteTask(index: number) {
    this.todoService.deleteTask(index);
  }

  getAlltasks() {
    return this.todoService.getAllTasks();
  }
  ngOnInit() {}
}
