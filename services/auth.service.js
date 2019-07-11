import { AuthService } from './../AuthGuard';
import { HttpRequest } from './http.service';
import { of as observableOf } from 'rxjs';
import { pipe, map } from 'rxjs/operators';


export class AuthenticationService{
  http = new HttpRequest();
  authService = AuthService;
  constructor() {
  }

  login(userInfo) {
    let loggedIn = false;
    return this.http.post('/getUsers', userInfo).pipe(map((userData) => {
      console.log(userData);
        userData.forEach((user) => {
          if(user.email.trim() === userInfo.email.trim() && user.password.trim() === userInfo.password.trim()) {
            loggedIn = true;
            this.authService.authenticated(()=>{});
          }
        });
        return {'loggedIn' : this.authService.isAuthenticated};
    }));
  }
}