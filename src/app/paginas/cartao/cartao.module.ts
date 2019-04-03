import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CartaoPage } from './inicio/cartao.page';
import { CartaoRoutingModule } from './cartao-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaoRoutingModule,
    SharedModule
  ],
  declarations: [CartaoPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CartaoModule {}
