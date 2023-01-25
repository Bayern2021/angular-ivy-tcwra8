import { Component, OnInit } from '@angular/core';
import { Show } from '../../model/show';
import { ShowDataService } from '../../services/show-data.service';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {
   show : Show ;
   constructor(private showDataService: ShowDataService) {
    this.show = new Show(null, null);
    }
    save() {
      this.showDataService.saveShow(this.show);
      this.show = new Show(null, null);
    }
   

  ngOnInit() {
  }
  

}