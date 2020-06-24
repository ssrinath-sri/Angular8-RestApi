import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let resp = this.http.get('https://jsonplaceholder.typicode.com/users');
    resp.subscribe((data) => this.users = data);
  }

}
