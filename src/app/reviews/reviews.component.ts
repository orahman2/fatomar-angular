import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers: [DataService]

})
export class ReviewsComponent implements OnInit {
  allCardDetails: {RestaurantName : String, Review : String, _id: String}[];

  constructor(private dataService: DataService) { 
    // this.allCardDetails = [
    //   {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
    //   {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
    //   {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
    //   {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
    //   {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
    //   {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
    //   {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
    //   {name: 'Creams Cafe' , imageLoc: 'assets/images/creams_bubble_waffle.1.jpg'},
    // ];
  }

  ngOnInit() {
    console.log('begin logging data');
    this.dataService.getData().subscribe(data => {
      this.allCardDetails = data;
    });
  }
  getImageLocation(RestaurantName: String){
    return 'assets/images/'+RestaurantName+'/1.jpg';
  }
}
