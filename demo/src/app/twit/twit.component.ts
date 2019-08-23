// EventEmitter va propager l'évènement
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.scss']
})
export class TwitComponent implements OnInit {
  title = '';
  content = '';

// création d'un evennement 
  // @Output() twit: EventEmitter<{ title: string, content: string }> = new EventEmitter();
  @Output() twit: EventEmitter<Message> = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() { }

// void = ne renvoi rien, pas de retour
  onSend(): void {
    this.twit.emit({
      title: this.title,
      content: this.content
    });
    // alert(this.title + ' ' + this.content);

    this.title = '';
    this.content = '';
  }
}
