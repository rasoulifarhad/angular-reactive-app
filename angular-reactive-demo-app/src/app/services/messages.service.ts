import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private errorsSubject = new BehaviorSubject<string[]>([]);

  errors$ = this.errorsSubject.asObservable();

  constructor() {
    console.log('created MessageService...');
  }

  error(...errors: string []) {
    this.errorsSubject.next(errors);
  }
}
