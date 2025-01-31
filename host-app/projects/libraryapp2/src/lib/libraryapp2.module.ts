import { NgModule } from '@angular/core';
import { Libraryapp2Component } from './libraryapp2.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LibraryApp2RoutingModule } from './libraryapp2-routing.module';



@NgModule({
  declarations: [
    Libraryapp2Component,
    AboutComponent,
    HomeComponent
  ],
  imports: [LibraryApp2RoutingModule
  ],
  exports: [
    Libraryapp2Component,LibraryApp2RoutingModule
  ]
})
export class Libraryapp2Module { }
