import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatGridListModule, MatTabsModule} from '@angular/material';
import { HomepageComponent } from './homepage/homepage.component';
import {MDBBootstrapModule, MdbCardComponent} from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';

import { ContentfulService } from './contentful.service'; // dodan service za cf
import { Routes, RouterModule } from '@angular/router'; // dodano
import { NovostListComponent } from './novost-list/novost-list.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';
import { NewsAllComponent } from './news-all/news-all.component';
import { StaffcardComponent } from './staffcard/staffcard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UpisComponent } from './upis/upis.component';
import { DetailsnewsComponent } from './detailsnews/detailsnews.component';
import { SmjerComponent } from './smjer/smjer.component';
import { UceniciComponent } from './ucenici/ucenici.component';
import { SekcijeComponent } from './sekcije/sekcije.component';
import { MisijavizijaComponent } from './misijavizija/misijavizija.component'; // dodano

import { NgImageSliderModule } from 'ng-image-slider';
import { SekcijedetailsComponent } from './sekcijedetails/sekcijedetails.component';
import {AngularFittextModule} from 'angular-fittext';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeComponent,
    NovostListComponent,
    FooterComponent,
    AboutComponent,
    StaffComponent,
    NewsAllComponent,
    StaffcardComponent,
    GalleryComponent,
    UpisComponent,
    DetailsnewsComponent,
    SmjerComponent,
    UceniciComponent,
    SekcijeComponent,
    MisijavizijaComponent,
    SekcijedetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    NgImageSliderModule,
    MDBBootstrapModule.forRoot(),
    AngularFittextModule

  ],
  exports: [],
  providers: [
    ContentfulService, // dodano
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
