import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list: any[];

  constructor(private as: AccountService) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.as.getAccounts().subscribe((Response: any[]) => {
      this.list = Response;
    }, (error) => {
      console.log(error);
    });
  }

}
