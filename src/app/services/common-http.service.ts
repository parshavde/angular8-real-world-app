import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  public baseUrl = 'http://localhost:3200';
  private token = '';
  private headers;

  constructor(private httpClient: HttpClient) { }

  // to set the lattest headers
  setHeaders() {
    this.token = localStorage.getItem('token');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    });
  }

  // to make a get request
  get(url) {
    this.setHeaders();
    return this.httpClient.get(this.baseUrl + url, { headers: this.headers });
  }

  // to make a post request
  post(url, data) {
    this.setHeaders();
    return this.httpClient.post(this.baseUrl + url, data, { headers: this.headers });
  }

  // to make a patch request
  patch(url, data) {
    this.setHeaders();
    return this.httpClient.patch(this.baseUrl + url, data, { headers: this.headers });
  }

  // to make a delete request
  delete(url) {
    this.setHeaders();
    return this.httpClient.delete(this.baseUrl + url, { headers: this.headers });
  }

}
