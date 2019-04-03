import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstatisticaPage } from './inicio/estatistica.page';

const routes: Routes = [
  { path: '', component: EstatisticaPage},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EstatisticaRoutingModule {}
