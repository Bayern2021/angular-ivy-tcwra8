
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowDataService } from './services/show-data.service';
import { ShowFormComponent } from './components/show-form/show-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ShowListComponent,ShowFormComponent],
  bootstrap:    [ AppComponent ],
  providers: 	  [ShowDataService]

})
export class AppModule { }
