import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public token;

  constructor(public as: AuthService, private router: Router) {

    this.as.tokenObservable.subscribe((tk) => {
      this.token = tk;
    }, (error) => {
      console.log(error);
    });

    this.as.reCheckAuthntication().subscribe((response) => {
      if (response === {} || (response && response.data && response.data === false)) {
        this.router.navigate(['login']);
      }
    });
  }

  logout() {
    this.as.logout();
    this.router.navigate(['login']);
  }


}
