import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  dbUrl = 'http://localhost:3000'; // TODO: hide ! (making an inaccessible file and exporting the value from it to here)
  
  constructor(private http: HttpClient) {}

  get() {
    this.http.get(this.dbUrl, {responseType: 'text'}).subscribe(
      (response) => {
        console.info('[angular][get][response][/]', response);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  post() {
    this.http.post(this.dbUrl, {content: Date.now().toString()}, {responseType: 'json'}).subscribe(
      (response) => {
        console.info('[angular][post][response][/]', response);
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
