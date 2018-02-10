import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{

    constructor(private http: Http){}

    getAllReviews(){
        return this.http.get('http://localhost:3000/api/allReviews').map(res => res.json());
    }
    getReviewByID(id: String){
        return this.http.get('http://localhost:3000/api/review/'+id).map(res => res.json());
    }

    beautifyName(name: string){
        var words = name.split('_')
        var restaurantName = '';
        for (var index in words) {
        restaurantName += words[index].charAt(0).toUpperCase() + words[index].substr(1).toLowerCase() + ' ';
        }
        return restaurantName;
    }
}