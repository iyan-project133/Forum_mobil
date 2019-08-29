import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  now : Date = new Date()
  constructor(private router: Router) { }

  ngOnInit() {
  }


    DetailPage(){
      this.router.navigate(['/detail'])
    }

}
