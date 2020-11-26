import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  public addEventForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  public get title(): AbstractControl {
    return this.addEventForm.controls.title
  }

  public get date(): AbstractControl {
    return this.addEventForm.controls.date
  }

  public getControl(control: string): AbstractControl {
    return this.addEventForm.controls[control]
  }

  public onSubmit(): void {
    if (this.addEventForm.valid) {
      // My Logic Here !!!
      this.addEventForm.reset()
    }
  }
  
  ngOnInit(): void {
    this.addEventForm = this.formBuilder.group({
      title: [
        '',
        Validators.compose([
         Validators.minLength(5),
         Validators.required
        ])
      ],
      subtitle: [
        ''
      ],
      date: [
        new Date(),
        Validators.required
      ]
    })
  }

}
