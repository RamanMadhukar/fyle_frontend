import { Component, EventEmitter,Input, Output,OnInit  } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-uerdetails',
  templateUrl: './uerdetails.component.html',
  styleUrls: ['./uerdetails.component.css']
})
export class UerdetailsComponent implements OnInit {
  userDetails:any
  username:String

  constructor(private http :HttpClient) { }

  ngOnInit(): void {
    // this.username = localStorage.getItem('username')
    this.http.get(`https://fyle-backend-6mi3.onrender.com/username/${localStorage.getItem('username')}`).subscribe(res=>{this.userDetails=res, console.log("userDetails", this.userDetails);
    })
    
  }

}
