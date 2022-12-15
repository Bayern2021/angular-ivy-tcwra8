import { Component, OnInit } from '@angular/core';
import { Show } from '../../mode1/show';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  shows: Show[ ] = [ ];
  constructor(){this.shows.push(new Show(1, 'Paw Patrol'));}
  
  
  ngOnInit() {
  }

}