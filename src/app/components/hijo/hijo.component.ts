import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent  {
  @Input('nombreHijo') nombreHijo:string = "hijo nombre" 
  @Output() newNombre = new EventEmitter<string>()
  
  
  constructor(public data:DataService){}

  cambiar(){
    this.nombreHijo="milena rios"
    this.newNombre.emit(this.nombreHijo)
    this.data.nombreUsuario = this.nombreHijo
  }
}
