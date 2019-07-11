export class HttpInterceptor {
  constructor() {
  }
  getHeaders() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let user = sessionStorage.getItem('user');
    if(user) {
      headers.append('Authorization', 'Basic '+btoa(user.firstName + ':' + user.email));
    }
    return headers;
  }

}