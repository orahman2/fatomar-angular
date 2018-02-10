import { Component, OnInit, Injectable } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  constructor(private _location: Location) { }

  goBack() {
    this._location.back();
  }

  ngOnInit() {}

}
