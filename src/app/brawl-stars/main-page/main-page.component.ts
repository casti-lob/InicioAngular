import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  players =[
    { name: 'Shelly', health: 3600},
    { name: 'Nita', health: 3800},
    { name: 'Colt', health: 2800}
]
  constructor() { }

  ngOnInit(): void {
  }

}
