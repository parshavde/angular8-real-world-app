import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private fb: FormBuilder, private as: AccountService, private router: Router) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  register() {
    const name: string = this.registerForm.value.name;
    const email: string = this.registerForm.value.email;
    const password: string = this.registerForm.value.password;
    this.as.register(name, email, password).subscribe((response: any) => {
      if (response && response.status && response.status === 200) { }
      this.router.navigate(['login']);
    }, (error) => {
      console.log(error);
    });
  }

}
