import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiture',
  templateUrl: './fiture.component.html',
  styleUrls: ['./fiture.component.scss']
})
export class FitureComponent implements OnInit {

  datas: any = 1
  constructor(private router : Router) { }

  ngOnInit() {
  }

  plusDivs(){
    this.router.navigate(["fitur/promo"])
  }
  Pencarian(){
    this.router.navigate(["fitur/cari"])
  }

}
