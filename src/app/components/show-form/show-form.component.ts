import { Component, OnInit } from '@angular/core';
import { Show } from '../../model/show';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {
   show : Show ;
   constructor() {
    this.show = new Show(null, null);
    
   }

  ngOnInit() {
  }

}