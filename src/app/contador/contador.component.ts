import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
  templateUrl:'./contador.component.html'
})
export class Contador{
   
        title  :string = 'Contador';
        contador: number=10;
        base: number=2
      
        calculo(value:number){
          this.contador += value;
        }
}