import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
   /* METHODE LONGUE

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  */

  // METHODE COURTE
  constructor(private http: HttpClient) { }


  ngOnInit() {
    
  }

};