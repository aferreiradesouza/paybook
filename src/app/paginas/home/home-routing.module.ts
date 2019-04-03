import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';

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
