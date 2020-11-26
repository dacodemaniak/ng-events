import { Component, OnInit } from '@angular/core';
import { EventInterface } from './../../core/interfaces/event-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private pTitle = 'events'
  public subtitle = 'My awesome Angular Application'

  public events: Array<EventInterface> = new Array<EventInterface>()

  public showAll = false

  
  public constructor() {
    this.events.push({
      title: 'Journée 1 : Component and Template',
      subtitle: 'Components',
      date: new Date()
    })
    this.events.push({
      title: 'Journée 2 : Directives, Pipes, Routage',
      subtitle: 'Deeper'
    })
    this.events.push({
      title: 'Journée 3 : Service et DI',
      subtitle: 'Injection de dépendances'
    })
  }


  ngOnInit(): void {
  }
  public get title(): string {
    return this.pTitle
  }

  public titleAsUpperCase(): string {
    return this.pTitle.toUpperCase()
  }

  public addEvent(): void {
    this.events.push({
      title: 'Hello new event',
      subtitle: 'Dynamically update the wiew',
      date: new Date()
    })
  }

  public updateShowAll($event): void {
    this.showAll = $event
  }

  public displayedEvents(): number {
    if (this.showAll) {
      return this.events.length
    }

    return this.events.filter((event) => event.date).length
  }
}
