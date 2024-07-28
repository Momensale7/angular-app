import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent
    // Add other components if any
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SlickCarouselModule
    // Add other Angular modules and external modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
