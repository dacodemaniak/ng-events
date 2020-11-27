import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { EventInterface } from '../../interfaces/event-interface';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-remove-event',
  templateUrl: './remove-event.component.html',
  styleUrls: ['./remove-event.component.scss']
})
export class RemoveEventComponent implements OnInit {
  @Input() private event: EventInterface
  @Output() private removedEvent: EventEmitter<EventInterface> = new EventEmitter()

  constructor(private eventService: EventService) { }

  public get title(): string {
    return this.event.title
  }

  ngOnInit(): void {
  }

  public remove(): void {
    this.eventService
      .remove(this.event)
      .pipe(
        take(1),
        map((response: any) => this.event)
      ).subscribe((event: EventInterface) => {
        this.removedEvent.emit(event)
      })
  }
}
