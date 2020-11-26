import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  public constructor(private router: Router) {}


  ngOnInit(): void {
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
  public get title(): string {
    return this.pTitle
  }

  public titleAsUpperCase(): string {
    return this.pTitle.toUpperCase()
  }

  public addEvent(): void {
    this.router.navigate(['add-event'])
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
