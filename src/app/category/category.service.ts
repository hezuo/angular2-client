import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ICategory} from './category'

@Injectable()
export class CategoryService {

    private _categoryEndpoint = 'http://localhost:9090/api/category';

    constructor(private _http: Http) {}

    getCategories(): Observable<ICategory[]> {
        return this._http.get(this._categoryEndpoint)
            .map((response: Response) => <ICategory[]> response.json())
            .do(data => console.log("Response correct"))
            .catch(this.handleError);
    }

    getCategory(id: number): Observable<ICategory> {
        return this._http.get(this._categoryEndpoint + '/'+ id)
            .map((response: Response) => <ICategory> response.json())
            .do(data => console.log("Response correct: " + JSON.stringify(data) ))
            .catch(this.handleError);
    }

    updateCategory(id: number, name: string, area: string): Observable<ICategory> {
        return this._http.put(this._categoryEndpoint + '/'+ id, {name: name, area: area})
            .map((response: Response) => response.json())
            .do(data => console.log("Response correct: " + JSON.stringify(data) ))
            .catch(this.handleError);
    }

    createCategory(name: string, area: string) : Observable<ICategory> {
        return this._http.post(this._categoryEndpoint, {name: name, area: area})
            .map((response: Response) => response.json())
            .do(data => console.log("Response correct: " + JSON.stringify(data) ))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}