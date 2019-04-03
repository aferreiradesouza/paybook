import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EstatisticaPage } from './inicio/estatistica.page';
import { EstatisticaRoutingModule } from './estatistica-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstatisticaRoutingModule,
    SharedModule
  ],
  declarations: [EstatisticaPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EstatisticaModule {}
