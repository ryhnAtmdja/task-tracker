import { Injectable } from '@angular/core';
import { Tasks } from '../Tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headerOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiURL = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTask(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.apiURL);
  }

  deleteTask(task: Tasks): Observable<Tasks> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Tasks>(url);
  }

  toggleTaskReminder(task: Tasks): Observable<Tasks> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Tasks>(url, task, headerOptions);
  }
}
