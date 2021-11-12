import { Component } from '@angular/core';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  
  constructor(public data:DataService){}

  changeImg(){
    return {  width:'50px', height:'40px'}
  }

} 
