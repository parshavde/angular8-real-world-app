import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public categoryForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createCategoryForm();
  }

  createCategoryForm() {
    this.categoryForm = this.fb.group({
      id: [null],
      name: [null, Validators.required]
    })
  }

  save() {
    console.log(this.categoryForm.valid)
    console.log(this.categoryForm.value)
  }

}
