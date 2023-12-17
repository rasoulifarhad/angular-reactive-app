import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  errors$?: Observable<string[]>;
  ShowErrors$ = this.errors$?.pipe(
    map((errors) => (errors.length > 0) ? errors : null)
  );
  constructor(private readonly messagesService: MessagesService) { }

  ngOnInit(): void {
    this.errors$ = this.messagesService.errors$;
  }

  close() {
    this.messagesService.error();
  }
}
