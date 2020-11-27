import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public buttonTitle = 'Login'

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public connect(): void {
    if (this.buttonTitle === 'Login') {
      this.loginService.login()
      this.buttonTitle = 'Logout'
    } else {
      this.loginService.logout()
      this.buttonTitle = 'Login'
    }
  }
}
