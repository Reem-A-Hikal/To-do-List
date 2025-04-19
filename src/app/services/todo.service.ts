import { Injectable } from '@angular/core';
import { Itask } from '../models/Itask';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks: Itask[] = [];

  constructor() {}

  getAllTasks() {
    return this.tasks;
  }

  addTask(taskName: string) {
    if (taskName.trim() !== '') {
      this.tasks.push({
        id: Math.random(),
        name: taskName,
        status: 'Pending',
      });
    }
  }

  startTask(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.status = 'In Progress';
    }
  }

  completeTask(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) task.status = 'Completed';
  }

  updateTaskStatus(id :number, newStatus: 'Pending' | 'In Progress' | 'Completed') {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = newStatus;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
