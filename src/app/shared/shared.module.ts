import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ChartComponent } from './components/chart/chart.component';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [
      HeaderComponent,
      MenuComponent,
      ItemListComponent,
      ChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ItemListComponent,
    ChartComponent,
  ],
  providers: [
    LocalStorageService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule {}
