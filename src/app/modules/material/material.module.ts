import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

const Modules: any[] = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: Modules,
  exports: Modules

})
export class MaterialModule { }
