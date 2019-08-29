import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  constructor() { }

  Pages:string;
  ngOnInit() {
    document.getElementById('defaultOpen').click();
    this.Pages = 'Home';
  }

  openPage(pageName: any) {
    // tslint:disable-next-line:one-variable-per-declaration
    let i: any, tabcontent:any, tablinks:any;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = '';
    }
    document.getElementById(pageName).style.display = 'block';
    // elmnt.style.backgroundColor = color;
    this.Pages = pageName;
  }
  // Get the element with id="defaultOpen" and click on it

}
