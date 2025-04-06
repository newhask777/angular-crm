import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  checkUser(): boolean {
    return false;
  }

  constructor() { }
}
