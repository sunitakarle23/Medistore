import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject = new BehaviorSubject<any>(null); // for token use
  private loggedId = new BehaviorSubject<boolean>(false);
  private message: string;

  get currentUser() {
    return this.currentUserSubject.asObservable();
  }

  get isLoggedIn() {
    return this.loggedId.asObservable();
  }

  getMessage(): string {
    return this.message;
  }

  constructor(private router: Router) { }

  login(isValidUser: boolean) {
    if (!isValidUser) {
      localStorage.removeItem("userDetails");
      this.currentUserSubject.next(null); // for token use
      this.loggedId.next(false);
      this.message = "Please enter valid username and password !!";
    } else {
      //this.currentUserSubject.next(objUserDetails); // for token use
      this.message = "";
      localStorage.setItem("userDetails", JSON.stringify(isValidUser));
      this.loggedId.next(true);
      this.router.navigate(['/dashboard/default']);
    }
  }

  logout() {
    localStorage.clear();
    this.loggedId.next(false);
    this.router.navigate(['/auth/login']);
  }

}
