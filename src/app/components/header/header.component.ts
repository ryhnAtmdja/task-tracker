import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  'showAddTask': boolean;
  'subscription': Subscription;

  constructor(private uiServie: UiService) {}

  ngOnInit(): void {
    this.subscription = this.uiServie.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  toggleTask() {
    this.uiServie.toggleAddTask();
  }
}
