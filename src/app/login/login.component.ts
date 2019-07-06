import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private as: AccountService, private router: Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  login() {
    const email: string = this.loginForm.value.email;
    const password: string = this.loginForm.value.password;
    this.as.login(email, password).subscribe((response: any) => {

      if (response.status === 200) {
        const token: string = response.data.token;
        localStorage.setItem('token', token);
        this.router.navigate(['category']);
      } else {
        // error
      }

    }, (error) => {
      console.log(error);
    });
  }

}
