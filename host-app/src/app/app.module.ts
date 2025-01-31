import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { Libraryapp1Module } from 'libraryapp1';
import { Libraryapp2Module } from 'libraryapp2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,RouterModule,Libraryapp1Module,Libraryapp2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
