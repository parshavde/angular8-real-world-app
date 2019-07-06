import { Injectable } from '@angular/core';
import { CommonHttpService } from './common-http.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  checkAuth(token: string) {
    return this.chttp.post('/authnticate', {
      token
    });
  }

  constructor(private chttp: CommonHttpService) { }

  login(email, password) {
    return this.chttp.post('/user/login', {
      email, password
    });
  }

  register(name, email, password) {
    const object: object = { name, email, password };
    return this.chttp.post('/user/register', object);
  }

  getUser() { }


  getCategories() { }

  // ---- Account functions
  createAccount(data) {
    return this.chttp.post('/account', data);
  }

  getAccounts() {
    return this.chttp.get('/account');
  }

}

