import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
@Input() id: String;

  constructor(private _location: Location,private route: ActivatedRoute ) { }

  goBack() {
    this._location.back();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
