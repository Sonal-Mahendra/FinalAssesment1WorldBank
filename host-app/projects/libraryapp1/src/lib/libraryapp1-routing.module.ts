import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
type PathMatch="full" | "prefix"
const routes = [
  {path:'child1/home',component:HomeComponent},
  {path:'child1/about',component:AboutComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class Libraryapp1RoutingModule { }
