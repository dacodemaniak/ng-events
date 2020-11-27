import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date, ...args: any[]): string {
    const srcDate: moment.Moment = moment(value)
    const today: moment.Moment = moment()

    const diff: number = today.diff(srcDate, 'd')

    if (diff === 0)
      return `Today`

    if (diff < 0)
      return `Incoming ${diff} day`

    return `Past till ${diff} day`
  }

}
