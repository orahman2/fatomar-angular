import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{

    constructor(private http: Http){}

    getData(){
        return this.http.get('http://localhost:3000/api/allReviews').map(res => res.json());
    }
}