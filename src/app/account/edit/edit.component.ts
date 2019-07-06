import { AccountService } from './../../services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public accountForm: FormGroup;

  constructor(private fb: FormBuilder, private as: AccountService, private router: Router) { }

  ngOnInit() {
    this.createAccountForm();
  }

  createAccountForm() {
    this.accountForm = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      summary: [null, Validators.required]
    });
  }

  save() {
    console.log(this.accountForm.value);
    this.as.createAccount(this.accountForm.value).subscribe((Response) => {
      this.router.navigate(['account']);
    }, (error) => {
      console.log(error);
    });
  }

}
