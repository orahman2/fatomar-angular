import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() imageLocation: String;
@Input() restaurantName: String;
@Input() id: String;

  ngOnInit() {
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
