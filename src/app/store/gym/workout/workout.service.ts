import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WorkoutItem } from './workout.state';

@Injectable()
export class WorkoutService {

  public constructor(private http: HttpClient) {}

  public listWorkouts(userId: string): Observable<WorkoutItem[]> {
    return this.http.get(`http://localhost:3000/workout/${userId}`, {}) as Observable<WorkoutItem[]>;
  }
}
