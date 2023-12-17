import { Injectable } from '@angular/core';
import { User } from '../shared/model/user';
import { BehaviorSubject, Observable, distinctUntilChanged, map, shareReplay, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

export const UNKNOWN_USER: User = {
  firstNamme: 'Unknown'
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(UNKNOWN_USER);

  currentUser$: Observable<User> = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  public isAuthenticated = this.currentUser$.pipe(map((user) => !!user));

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router) { }

  login(email: string, password: string): Observable<{ user: User }> {
    const headers = new HttpHeaders();
    return this.http
      .post<{ user: User }>('/api/login', { email, password })
      .pipe(tap(({ user }) => this.setAuth(user)));
  }

  setAuth(user: User): void {
    this.currentUserSubject.next(user);
  }

  purgeAuth(): void {
    this.currentUserSubject.next(UNKNOWN_USER);
  }

  logout(): void {
    this.purgeAuth();
    this.router.navigate(['/']);
  }
}
