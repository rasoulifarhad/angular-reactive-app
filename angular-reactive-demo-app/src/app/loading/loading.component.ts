import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading$!: Observable<boolean>;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.loading$ = this.router.events.pipe(
      map(event => event instanceof NavigationStart || event instanceof RoutesRecognized)
    );
  }
}
