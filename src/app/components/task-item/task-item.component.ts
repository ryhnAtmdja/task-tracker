import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from 'src/app/Tasks';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() 'task': Tasks;
  trashIcon = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
