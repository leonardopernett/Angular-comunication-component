import { Component, OnDestroy, OnInit, } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{

  mensaje:string = "Navbar!!"
  mensajeSuscription:Subscription
  constructor(public data:DataService){
  
  }

  ngOnInit(){
   
  }

  ngOnDestroy(){
    
    }

} 
