import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginSource$ = new BehaviorSubject<boolean>(false)
  public loginMessage = this.loginSource$.asObservable()

  private theStatus: boolean

  constructor() { }

  public login(): void {
    this.loginSource$.next(true)
    this.theStatus = this.loginSource$.getValue()
  }

  public logout(): void {
    this.loginSource$.next(false)
    this.theStatus = this.loginSource$.getValue()
  }
}
