import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserService } from '../services/user.service';
import { NewsletterService } from '../services/newsletter.service';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent implements OnInit {
  firstName$: Observable<string> | undefined;

  constructor(
    private userService: UserService,
    private newsletterService: NewsletterService
  ) {}
  mapFirstName = map((user: User) => user.firstName);
  ngOnInit(): void {
    this.userService.currentUser$.pipe(this.mapFirstName);
  }

  subscribeToNewsletter(emailField: HTMLInputElement) {
    this.newsletterService.subscribeToNewsletter(emailField.value)
      .subscribe(
        () => {
          emailField.value = '';
          alert('Subscription successful ...');
        },
        console.error
      );
  }
}
