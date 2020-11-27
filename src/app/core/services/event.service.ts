import { Injectable } from '@angular/core';
import { EventInterface } from '../interfaces/event-interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Array<EventInterface> = []

  constructor() { }

  public findAll(): Array<EventInterface> {
    return this.events
  }
  
  public add(event: EventInterface): void {
    this.events.push(event)
  }
}
