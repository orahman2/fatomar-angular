import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() imageLocation: String;
@Input() restaurantName: String;
@Input() id: String;

  constructor(private dataService: DataService){}

  ngOnInit() {
  }

}
