import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';



const Modules: any[] = [
  CommonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule
]; 

@NgModule({
  declarations: [],
  imports: Modules,
  exports: Modules,

})
export class MaterialModule { }
