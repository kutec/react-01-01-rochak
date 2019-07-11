import { HttpInterceptor } from './http-interceptor';
import { of as observableOf } from 'rxjs';
import { from } from 'rxjs';
import { pipe, map } from 'rxjs/operators';
import { apiRequest } from '../api/url.constants';

export class HttpRequest {
  httpInterceptor = new HttpInterceptor();
  constructor() {
    
  }

  request(type, data, headers) {
    return {
        method: type, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        headers: Object.assign(headers, this.httpInterceptor.getHeaders()),
        body: this.getResponseBody(), // body data type must match "Content-Type" header
    }
  }
  
  getResponseBody(url) {
    return apiRequest.filter((resSet) => resSet.url === url)[0].data;
  }

  get(url, data, headers = {}) {
    return observableOf(this.getResponseBody(url)).pipe(map(res => res));
  }
  post(url, data, headers = {}) {
    return observableOf(this.getResponseBody(url)).pipe(map(res => res));
  }
  put(url, data, headers = {}) {
    return observableOf(this.getResponseBody(url)).pipe(map(res => res));
  }
  
  delete(url, data, headers = {}) {
    return observableOf(this.getResponseBody(url)).pipe(map(res => res));
  }
}