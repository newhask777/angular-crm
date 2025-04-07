import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseHttpLogin } from 'src/app/models/responseHttpLogin';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  login(email: string, password: string) {
    return this.http.post<ResponseHttpLogin>(environment.apiUrl + 'api/pub/auth/login',{
      email,
      password
    }).pipe(
      map((data)=>{
      if(data.data.user && data.data.api_token) {
        this.setUser(JSON.stringify(data.data.user));
        this.setToken(data.data.api_token);

        return data.data.user;
      }

      return null;
    })
    ,
    catchError((error) => {
      console.log(error);
      return throwError(error);
    })
    )
  }
  setToken(api_token: string) {
    sessionStorage.setItem('userToken', api_token);
  }
  setUser(user: string) {
    sessionStorage.setItem('currentUser', user);
  }

  logout() : void {
    //throw new Error('Method not implemented.');
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('currentUser');

  }
  checkUser(): boolean {
    if(sessionStorage.getItem('userToken') && sessionStorage.getItem('currentUser')) {
        return true;
    }

    return false;
  }

  getToken(): string {
    if(this.checkUser()) {
      return sessionStorage.getItem('userToken');
    }
    return '';
  }

  constructor(private http: HttpClient) { }
}
