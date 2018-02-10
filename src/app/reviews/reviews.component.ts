import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers: [DataService]

})
export class ReviewsComponent implements OnInit {
  allCardDetails: [{name : String, imageLoc : String}];

  constructor(private taskService: DataService) { 
    this.allCardDetails = [
      {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
      {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
      {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'}
    ];
  }

  ngOnInit() {}

}
