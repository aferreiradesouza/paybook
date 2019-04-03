import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './paginas/home/home.module#HomeModule' },
  { path: 'cartao', loadChildren: './paginas/cartao/cartao.module#CartaoModule' },
  { path: 'estatistica', loadChildren: './paginas/estatistica/estatistica.module#EstatisticaModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
