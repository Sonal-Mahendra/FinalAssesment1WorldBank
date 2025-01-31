import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'host-app';
  styleAsPerChild='';
 // constructor(private router:Router){
    // this.router.events.subscribe(event=>{
    //   if(event instanceof NavigationEnd){
    //     if(event.url.includes('/mfe1')){
    //       this.styleAsPerChild ='mfe1Theme'
    //     }else if(event.url.includes('/mfe2')){
    //       this.styleAsPerChild ='mfe2Theme'
    //     }else {
    //       this.styleAsPerChild =''
    //     }
    //   }
    // })
 // }
}
