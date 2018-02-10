import { Component, OnInit, Injectable} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params} from '@angular/router';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css'],
  providers: [DataService]
})
export class ReviewPageComponent implements OnInit {
name: String;
review: String;
verdict: String;
status: String;
imageCount: number;
imageAddresses: String[];

  constructor(private _location: Location,private route: ActivatedRoute, private dataService: DataService ) { }

  goBack() {
    this._location.back();
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    var review = this.dataService.getReviewByID(id).subscribe(data => {
      this.name = data.RestaurantName;
      this.review = data.Review;
      this.verdict = data.Verdict;
      this.status = data.Status;
      this.imageCount = data.count;
      this.imageAddresses = [];
      for (let index: number = 1; index <= this.imageCount; index++) { 
        this.imageAddresses[index-1] = 'assets/images/'+this.name+'/'+index+'.jpg';
      }
    });
  }

}
