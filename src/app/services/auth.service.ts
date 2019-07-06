import { AccountService } from './account.service';
import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token = '';
  public tokenObservable = new Subject<string>();

  constructor(private as: AccountService) {
    this.token = localStorage.getItem('token');
    this.tokenObservable.next(this.token);
  }

  isAuthenticated() {
    this.token = localStorage.getItem('token');
    this.tokenObservable.next(this.token);
    if (this.token) {
      return true;
    }
    return false;
  }

  reCheckAuthntication(): Observable<any> {
    this.token = localStorage.getItem('token');
    this.tokenObservable.next(this.token);
    if (!this.token) {
      return of({});
    }
    return this.as.checkAuth(this.token);
  }

  logout() {
    this.token = '';
    localStorage.removeItem('token');
    this.tokenObservable.next(this.token);
  }

}
