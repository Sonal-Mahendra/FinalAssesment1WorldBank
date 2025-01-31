import { NgModule } from '@angular/core';
import { Libraryapp1Component } from './libraryapp1.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Libraryapp1RoutingModule } from './libraryapp1-routing.module';


@NgModule({
  declarations: [
    Libraryapp1Component,
    HomeComponent,
    AboutComponent
  ],
  imports: [Libraryapp1RoutingModule
  ],
  exports: [
    Libraryapp1Component,Libraryapp1RoutingModule
  ]
})
export class Libraryapp1Module { }
