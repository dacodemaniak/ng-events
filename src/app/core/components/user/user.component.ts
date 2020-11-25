import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: any = {
    firstName: 'Jean-Luc',
    lastName: 'Aubert'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
