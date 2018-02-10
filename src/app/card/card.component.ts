import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() imageLocation: String;
@Input() restaurantName: String;

  constructor() { 

    console.log(this.imageLocation,this.restaurantName);
  }

  ngOnInit() {
  }

}
