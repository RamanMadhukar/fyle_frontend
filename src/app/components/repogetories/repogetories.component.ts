import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repogetories',
  templateUrl: './repogetories.component.html',
  styleUrls: ['./repogetories.component.css']
})
export class RepogetoriesComponent implements OnInit {
  items: any;
  pageOfItems: Array<any>;
  userdetails: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
    this.http.get(`http://localhost:5000/username/${localStorage.getItem('username')}`).subscribe((res:any) => {
      this.userdetails = res
      this.items = res?.reposData
      
    });
    this.items = this.userdetails?.reposData
    console.log("newdata",this.items);

  }
  onChangePage(pageOfItems: any) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }


}
