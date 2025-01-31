import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
const routes = [
  {path:'child2/home',component:HomeComponent},
  {path:'child2/about',component:AboutComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class LibraryApp2RoutingModule { }
