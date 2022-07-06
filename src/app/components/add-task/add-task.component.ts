import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tasks } from '../../Tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onSubmitTask: EventEmitter<Tasks> = new EventEmitter();

  // two way binding data (connect data dari input form di html dan mendefinisikan tipe nya)
  'text': string;
  'day': string;
  'reminder': boolean;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add task!');
      return;
    } else {
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.onSubmitTask.emit(newTask);

      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }
}
