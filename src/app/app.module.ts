import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UerdetailsComponent } from './components/uerdetails/uerdetails.component';
import { RepogetoriesComponent } from './components/repogetories/repogetories.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    UerdetailsComponent,
    RepogetoriesComponent,
    MainpageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    JwPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
