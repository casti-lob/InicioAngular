import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  :string = 'Contador';
  contador: number=10;
  base: number=2

  calculo(value:number){
    this.contador += value;
  }
  
}
