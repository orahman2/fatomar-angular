import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  allCardDetails: [{name : String, imageLoc : String}];

  constructor() { 
    this.allCardDetails = [
      {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
      {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
      {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'}
    ];
  }

  ngOnInit() {}

}
