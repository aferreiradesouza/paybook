import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaoPage } from './inicio/cartao.page';

const routes: Routes = [
  { path: '', component: CartaoPage},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CartaoRoutingModule {}
