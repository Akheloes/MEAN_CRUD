import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dbUrl = 'http://localhost:3000'; // TODO: hide ! (making an inaccessible file and exporting the value from it to here)

  constructor(private http: HttpClient){}

  /**
   * Minimimalistic example of sending an http get request from Angular to ExpressJS
   */
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
    this.http.post(this.dbUrl, {content: 'request content'}, {responseType: 'json'}).subscribe(
      (response) => {
        console.info('[angular][post][response][/]', response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
