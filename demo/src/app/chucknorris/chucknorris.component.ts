import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';
import { Quote } from '../models/quote.model';

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.scss']
})
export class ChucknorrisComponent implements OnInit {
  quote: Quote;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    interval(5000)
    .subscribe(
      () => this.getQuote()
    );
  }

  getQuote() {
    this.http.get<Quote>('https://api.chucknorris.io/jokes/random')
      .pipe(map(data => data))
      .subscribe(
        (quote: Quote) => {
          this.quote = quote;

        },
        err => {

        }
      )
  }
}
