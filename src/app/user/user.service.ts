import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private _userEndpoint = 'http://localhost:9090/api/user';

  constructor(private _http: Http) {
  }

  createUser(user: any): Observable<any> {
    return this._http.post(this._userEndpoint + '/register', {name: user.name, email: user.email, password: user.password})
      .map(
        (response: Response) => {

          let responseJson = response.json();
          if (responseJson.code == 200) {
            let token = response.json().token;
            if (token) {
              localStorage.setItem('currentUser', JSON.stringify({
                username: responseJson.user.name,
                email: responseJson.user.email,
                token: token
              }));
              return true;
            }
          }

          return {code: responseJson.code, message: responseJson.message};
        }
      )
      .do(data => console.log("Response correct: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);

    return Observable.throw(error.json().error || 'Server error');
  }

}
