import { Injectable } from '@angular/core';
import { Tasks } from '../Tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiURL = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTask(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.apiURL);
  }
}
