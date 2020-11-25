import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-filter-bar',
  templateUrl: './event-filter-bar.component.html',
  styleUrls: ['./event-filter-bar.component.scss']
})
export class EventFilterBarComponent implements OnInit {
  @Output() buttonClickEvent = new EventEmitter<boolean>()
  @Input() eventsNumber: number
  @Input() displayedEvents: number
  
  constructor() {
    console.log(`Hey, i'm the EventFilterBarComponent`)
  }

  ngOnInit(): void {
    console.log(`Hi, i'm ngOnInit from EventFilterBarComponent`)
  }

  public showAll(): void {
    this.buttonClickEvent.emit(true)
  }

  public hideUnDated(): void {
    this.buttonClickEvent.emit(false)
  }

}
