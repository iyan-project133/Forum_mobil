import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-fiture-cari',
  templateUrl: './fiture-cari.component.html',
  styleUrls: ['./fiture-cari.component.scss']
})
export class FitureCariComponent implements OnInit {

  constructor(private _location : Location) { }

  ngOnInit() {
  }

  Back(){
    this._location.back()
  }

}
