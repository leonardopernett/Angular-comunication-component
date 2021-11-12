import { Component} from '@angular/core';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  nombre:string = "nombre"
 

  constructor(private data:DataService){}

  cambiar(){
    this.nombre="leonardo pernett"
    this.data.nombreUsuario=this.nombre
  }

  cambiarPadre(event:string){
    this.nombre = event
    
  }

}
