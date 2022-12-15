import { Injectable } from '@angular/core';
import { Show } from '../../mode1/show';

@Injectable()
export class ShowDataService {
  shows: Show[ ] = [ ];
  constructor() {this.shows.push(new Show(1, 'Paw Patrol'));}

}