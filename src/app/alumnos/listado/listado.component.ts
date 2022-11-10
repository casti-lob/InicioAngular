import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  alumnos:string[] =[
    'Javier','Sergio','Pilar','Vicente'
  ]
  aprobados:string[]=[

  ]
  constructor() { }

  ngOnInit(): void {
  }
  aprobar(){
    this.aprobados.push(this.alumnos.pop() || '')
    
    
  }
}
