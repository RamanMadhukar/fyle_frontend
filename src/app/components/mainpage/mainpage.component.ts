import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  userDdetails:Array<any>
  constructor() { }

  ngOnInit() {
    this.userDdetails = window.history.state
    console.log("new",this.userDdetails);
    
  }

}
