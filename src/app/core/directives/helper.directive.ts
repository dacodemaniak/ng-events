import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import * as moment from 'moment';
import { EventInterface } from '../interfaces/event-interface';

@Directive({
  selector: '[appHelper]'
})
export class HelperDirective implements OnInit{
  @Input() private event: EventInterface

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    console.log(`Event received : ${JSON.stringify(this.event)}`)
    const nativeElement = this.element.nativeElement
    const today: moment.Moment = moment()
    if (moment(this.event.date).isBefore(today, 'd')) {
      nativeElement.classList.add('due-task')
    } else {
      nativeElement.classList.add('current-task')
    }
  }
  
}
