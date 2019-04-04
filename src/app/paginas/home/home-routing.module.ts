import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './inicio/home.page';

const routes: Routes = [
  { path: '', component: HomePage},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule {}
