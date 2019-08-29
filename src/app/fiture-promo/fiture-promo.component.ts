import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common';

@Component({
  selector: 'app-fiture-promo',
  templateUrl: './fiture-promo.component.html',
  styleUrls: ['./fiture-promo.component.scss']
})
export class FiturePromoComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  Back(){
    this._location.back()
  }

}
