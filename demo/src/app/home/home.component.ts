import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // title = 'demo';
  // name = 'Lily';
  title = 'demo';
  name: string;
  // twits: { title: string, content: string }[] = [];
  twits: Message[] = [];

  saveTwit(data: { title: string, content: string }): void {
  //  console.log(data);
    this.twits.push(data);
  }

  constructor() {}

  ngOnInit(){ }
}
