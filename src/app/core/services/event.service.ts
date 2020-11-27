import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventInterface } from '../interfaces/event-interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Array<EventInterface> = []

  constructor(
    private httpClient: HttpClient
  ) { }

  public findAll(): Observable<Array<EventInterface>> {
    return this.httpClient.get<EventInterface[]>(
      'http://localhost:4200/api/v2/events'
    )
  }
  
  public add(event: EventInterface): Observable<EventInterface> {
    return this.httpClient.post<EventInterface>(
      'http://localhost:4200/api/v2/events',
      event
    )
  }

  public remove(event: EventInterface): Observable<any> {
    return this.httpClient.delete<EventInterface>(
      `http://localhost:4200/api/v2/events/${event.id}`
    )
  }
}
