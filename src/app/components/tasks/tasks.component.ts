import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Tasks } from 'src/app/Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Tasks[] = [];

  constructor(private taskService: TasksService) {}

  // subscribe => bisa disebut .then dalam es6 js

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteItem(task: Tasks) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((i) => i.id !== task.id);
    });
  }

  toggleReminder(task: Tasks) {
    task.reminder = !task.reminder;
    this.taskService.toggleTaskReminder(task).subscribe();
  }

  submitTask(task: Tasks) {
    this.taskService.submitTask(task).subscribe((t) => {
      this.tasks.push(t);
    });
  }
}
