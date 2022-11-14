import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces/Player';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  nuevo={
    name: "",
    health: 0
  }

  players : Player[]=[
    { name: 'Shelly', health: 3600},
    { name: 'Nita', health: 3800},
    { name: 'Colt', health: 2800},
    { name: 'Ciry', health: 8000},
    { name: 'Gerald', health: 1200},
    { name: 'Triss', health: 800},
    { name: 'Yenny', health: 2100},
    { name: 'Arthur', health: 3100},
]
  

 

}
