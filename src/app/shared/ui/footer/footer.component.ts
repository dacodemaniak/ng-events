import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public loginStatus: string

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.loginMessage.subscribe((loginStatus: boolean) => {
      this.loginStatus = loginStatus ? 'User is connected' : 'User is offline'
    })
  }

}
