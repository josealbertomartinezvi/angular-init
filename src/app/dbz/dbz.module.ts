import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DbzMainPageComponent } from './pages/main-page.component';
import { DbzCharacterFormComponent, DbzListComponent } from './components';

@NgModule({
  declarations: [
    DbzMainPageComponent,
    DbzListComponent,
    DbzCharacterFormComponent
  ],
  exports: [
    DbzMainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
