import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UNKNOWN_USER, UserService } from '../services/user.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.userService.currentUser$.pipe(map(user => user !== UNKNOWN_USER));
  }
}
