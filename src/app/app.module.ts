import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CardComponent } from './card/card.component';
import { ReviewPageComponent } from './review-page/review-page.component';

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'map', component:MapComponent},
  {path:'reviews', component:ReviewsComponent},
  {path:'review-page',component:ReviewPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    HomeComponent,
    AboutComponent,
    MapComponent,
    ReviewsComponent,
    CardComponent,
    ReviewPageComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
