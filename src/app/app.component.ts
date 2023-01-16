import { Component } from '@angular/core';
import{Router} from"@angular/router";
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resturent';
  username = ''
  repo = []
  userDdetails:any
  constructor(public router:Router, private http :HttpClient){}
  takeinput(e:any){
    this.username = e.target.value
    console.log(this.username)
  }
  ngOnInit(): void {
    
  }
  handleSubmit() {
    localStorage.setItem('username',this.username)
    this.http.get(`https://fyle-backend-6mi3.onrender.com/username/${this.username}`).subscribe(res=>{
      
      this.userDdetails = res;
      this.router.navigateByUrl('/user',{state:res})
      console.log(this.userDdetails);
    }
    )
  
    
  }
  
}
