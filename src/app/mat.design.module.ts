import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSnackBarModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
  ],
  exports:[
  	CommonModule,
  	MatInputModule,
  	MatGridListModule,
  	MatButtonModule,
  	MatCardModule,
  	MatSnackBarModule
  ],
  declarations: []
})
export class MatDesignModule { }
