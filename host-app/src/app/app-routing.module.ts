import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
type PathMatch="full" | "prefix"
const routes = [
   {path:'',redirectTo:'home',pathMatch:'full' as PathMatch},
  {path:'home',component:HomeComponent},
  {path:'mfe1',loadChildren:()=>{
  return loadRemoteModule({ 
    type:'module',
     remoteEntry:'http://localhost:4001/remoteEntry.js',
    exposedModule:"./OrderModule"
  }).then(m=>m.OrderModule).catch(e=>console.log(e));}
},
{path:'mfe2',loadChildren:()=>{
  return loadRemoteModule({ 
    type:'module',
     remoteEntry:'http://localhost:4002/remoteEntry.js',
    exposedModule:"./OrderModule"
  }).then(m=>m.OrderModule).catch(e=>console.log(e));}
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
