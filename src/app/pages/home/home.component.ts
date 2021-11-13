import { Component} from '@angular/core';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  
  constructor(private data:DataService){}

  changeMessage(){
    this.data.nombre$.emit('leonardo pernett')
  }
}
